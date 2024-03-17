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
    stories = backupStories;
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

const backupStories = [
  {
    _id: "1",
    txt: "Best trip ever 1 !!!",
    imgUrl: "https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg", //an array for a few pictures
    createdAt: 1707088568381,
    createdBy: {
      _id: "u101",
      fullname: "Ulash Ulashi",
      imgUrl: "http://some-img",
    },
    loc: {
      // Optional
      lat: 11.11,
      lng: 22.22,
      name: "Tel Aviv",
    },
    comments: [
      {
        id: "c1001",
        by: {
          _id: "u105",
          fullname: "Bob",
          imgUrl:
            "https://th.bing.com/th/id/OIP.ddJW8TWOJgVPrWUS80RmBAHaHa?rs=1&pid=ImgDetMain",
        },
        txt: "good one!",
        likedBy: [
          // Optional
          {
            _id: "u105",
            fullname: "Bob",
            imgUrl: "http://some-img",
          },
        ],
      },
      {
        id: "c1002",
        by: {
          _id: "u106",
          fullname: "Dob",
          imgUrl: "http://some-img",
        },
        txt: "not good!",
      },
    ],
    likedBy: [
      {
        _id: "u105",
        fullname: "Bob",
        imgUrl: "http://some-img",
      },
      {
        _id: "u106",
        fullname: "Dob",
        imgUrl: "http://some-img",
      },
      {
        _id: "u105",
        fullname: "Bob",
        imgUrl: "http://some-img",
      },
      {
        _id: "u106",
        fullname: "Dob",
        imgUrl: "http://some-img",
      },
      {
        _id: "u105",
        fullname: "Bob",
        imgUrl: "http://some-img",
      },
      {
        _id: "u106",
        fullname: "Dob",
        imgUrl: "http://some-img",
      },
      {
        _id: "u999",
        fullname: "Yoni Nisenbaum",
        imgUrl: "http://some-img",
      },
    ],
    tags: ["fun", "romantic"],
  },
  {
    _id: "s13453",
    txt: "that's me !",
    imgUrl:
      "https://th.bing.com/th/id/R.343fcc1ec1dc4d948afab785843d1898?rik=vyQp99kH0yF0KQ&riu=http%3a%2f%2f3.bp.blogspot.com%2f_8CgUBDdSE8k%2fTKCmGyx3I0I%2fAAAAAAAAA_U%2fyhK5A-6mAIs%2fs1600%2frambo3-3.jpg&ehk=VUxRKTqxeHz5XV%2fDMOOmP%2fPAbhlEuU4u55jSQeuS%2f%2fc%3d&risl=&pid=ImgRaw&r=0", //an array for a few pictures
    createdAt: 1507741093375,
    createdBy: {
      _id: "u101",
      fullname: "Noam Nisenbaum",
      imgUrl: "http://some-img",
    },
    loc: {
      // Optional
      lat: 11.11,
      lng: 22.22,
      name: "Tel Aviv",
    },
    comments: [
      {
        id: "_2",
        by: {
          _id: "u105",
          fullname: "Bob",
          imgUrl: "http://some-img",
        },
        txt: "good one!",
        likedBy: [
          // Optional
          {
            _id: "u105",
            fullname: "Bob",
            imgUrl: "http://some-img",
          },
        ],
      },
      {
        id: "c1002",
        by: {
          _id: "u106",
          fullname: "Dob",
          imgUrl: "http://some-img",
        },
        txt: "not good!",
      },
    ],
    likedBy: [
      {
        _id: "u105",
        fullname: "Bob",
        imgUrl: "http://some-img",
      },
      {
        _id: "u106",
        fullname: "Dob",
        imgUrl: "http://some-img",
      },
      {
        _id: "u999",
        fullname: "Yoni Nisenbaum",
        imgUrl: "http://some-img",
      },
    ],
    tags: ["fun", "romantic"],
  },
  {
    _id: "s10342341",
    txt: "that's me !!!",
    imgUrl:
      "https://static1.srcdn.com/wordpress/wp-content/uploads/2022/03/Family-guy-why-brian-can-talk-but-other-dogs-cant.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5",
    createdAt: 1707741093375,
    createdBy: {
      _id: "u101",
      fullname: "Brian the dog",
      imgUrl: "http://some-img",
    },
    loc: {
      // Optional
      lat: 11.11,
      lng: 22.22,
      name: "Tel Aviv",
    },
    comments: [
      {
        id: "_2",
        by: {
          _id: "u105",
          fullname: "Bob",
          imgUrl: "http://some-img",
        },
        txt: "good one!",
        likedBy: [
          // Optional
          {
            _id: "u105",
            fullname: "Bob",
            imgUrl: "http://some-img",
          },
        ],
      },
      {
        id: "c1002",
        by: {
          _id: "u106",
          fullname: "Dob",
          imgUrl: "http://some-img",
        },
        txt: "not good!",
      },
    ],
    likedBy: [
      {
        _id: "u105",
        fullname: "Bob",
        imgUrl: "http://some-img",
      },
      {
        _id: "u106",
        fullname: "Dob",
        imgUrl: "http://some-img",
      },
    ],
    tags: ["fun", "romantic"],
  },
  {
    _id: "s103423434343441",
    txt: "that's me !!!",
    imgUrl:
      "https://thumbs.dreamstime.com/z/border-collie-vector-illustration-portrait-standing-profile-dog-blue-merle-color-colorful-isolated-white-background-104130488.jpg?ct=jpeg",
    createdAt: 1707741093375,
    createdBy: {
      _id: "u101",
      fullname: "Brian the dog",
      imgUrl: "http://some-img",
    },
    loc: {
      // Optional
      lat: 11.11,
      lng: 22.22,
      name: "Tel Aviv",
    },
    comments: [
      {
        id: "_2",
        by: {
          _id: "u105",
          fullname: "Bob",
          imgUrl: "http://some-img",
        },
        txt: "good one!",
        likedBy: [
          // Optional
          {
            _id: "u105",
            fullname: "Bob",
            imgUrl: "http://some-img",
          },
        ],
      },
      {
        id: "c1002",
        by: {
          _id: "u106",
          fullname: "Dob",
          imgUrl: "http://some-img",
        },
        txt: "not good!",
      },
    ],
    likedBy: [
      {
        _id: "u105",
        fullname: "Bob",
        imgUrl: "http://some-img",
      },
      {
        _id: "u106",
        fullname: "Dob",
        imgUrl: "http://some-img",
      },
      {
        _id: "u999",
        fullname: "Yoni Nisenbaum",
        imgUrl: "http://some-img",
      },
    ],
    tags: ["fun", "romantic"],
  }
];
