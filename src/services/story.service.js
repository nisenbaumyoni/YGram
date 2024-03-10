import { storageService } from "./async-storage.service.js";
import { utilService } from "./util.service.js"; 

export const storyService = {
  query,
  save,
  remove,
  getById,
  createStory,
  getDefaultFilter,
};

const STORAGE_KEY = "stories";

// _createStories()

async function query(filterBy) {
  let stories = await storageService.query(STORAGE_KEY);
  if (!stories.length || !stories) {
    stories = backupStories
  }
  if (filterBy) {
    var { txt } = filterBy;
    stories = stories.filter((story) =>
      story.txt.toLowerCase().includes(txt.toLowerCase())
    );
  }
  return stories;
}

function getById(id) {
  return storageService.get(STORAGE_KEY, id);
}

function remove(id) {
  return storageService.remove(STORAGE_KEY, id);
}

function save(storyToSave) {
  if (storyToSave.id) {
    return storageService.put(STORAGE_KEY, storyToSave);
  } else {
    storyToSave.isOn = false;
    return storageService.post(STORAGE_KEY, storyToSave);
  }
}

function createStory(model = "", type = "", batteryStatus = 100) {
  return {
    model,
    batteryStatus,
    type,
  };
}
function getDefaultFilter() {
  return {
    txt: "",
  };
}

const backupStories =  [
    {
        _id: "1",
        txt: "Best trip ever 1 !!!",
        imgUrl: "http://some-img", //an array for a few pictures 
        by: {
          _id: "u101",
          fullname: "Ulash Ulashi",
          imgUrl: "http://some-img"
        },
        loc: { // Optional
          lat: 11.11, 
          lng: 22.22,
          name: "Tel Aviv"
        },
        comments: [
          {
            id: "c1001",
            by: {
              _id: "u105",
              fullname: "Bob",
              imgUrl: "http://some-img"
            },
            txt: "good one!",
            likedBy: [ // Optional
              {
                "_id": "u105",
                "fullname": "Bob",
                "imgUrl": "http://some-img"
              }
            ]
          },
          {
            id: "c1002",
            by: {
              _id: "u106",
              fullname: "Dob",
              imgUrl: "http://some-img"
            },
            txt: "not good!",
          }
        ],
        likedBy: [
          {
            _id: "u105",
            fullname: "Bob",
            imgUrl: "http://some-img"
          },
          {
            _id: "u106",
            fullname: "Dob",
            imgUrl: "http://some-img"
          }
        ],
        tags: ["fun", "romantic"]
      },
      {
        _id: "s101",
        txt: "Best trip ever 2 !!!",
        imgUrl: "http://some-img", //an array for a few pictures 
        by: {
          _id: "u101",
          fullname: "Ulash Ulashi",
          imgUrl: "http://some-img"
        },
        loc: { // Optional
          lat: 11.11, 
          lng: 22.22,
          name: "Tel Aviv"
        },
        comments: [
          {
            id: "_2",
            by: {
              _id: "u105",
              fullname: "Bob",
              imgUrl: "http://some-img"
            },
            txt: "good one!",
            likedBy: [ // Optional
              {
                "_id": "u105",
                "fullname": "Bob",
                "imgUrl": "http://some-img"
              }
            ]
          },
          {
            id: "c1002",
            by: {
              _id: "u106",
              fullname: "Dob",
              imgUrl: "http://some-img"
            },
            txt: "not good!",
          }
        ],
        likedBy: [
          {
            _id: "u105",
            fullname: "Bob",
            imgUrl: "http://some-img"
          },
          {
            _id: "u106",
            fullname: "Dob",
            imgUrl: "http://some-img"
          }
        ],
        tags: ["fun", "romantic"]
      }
    ]