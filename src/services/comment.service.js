import { storageService } from "./async-storage.service.js";
import { utilService } from "./util.service.js";
import { saveStory } from "../store/actions/story.actions";

export const commentService = {
  saveComment,
  removeComment,
  createComment,
};

const STORAGE_KEY = "stories";

function removeComment(story, commentToRemove) {
  let storyToSave = structuredClone(story); 
  const updatedComments = story.comments.filter(
    (comment) => comment._id !== commentToRemove._id
  );
  storyToSave.comments = updatedComments;

  saveStory(storyToSave)

  
}

function saveComment(storyToSave, commentToSave) {
  console.log("saveComment", storyToSave);
  console.log("saveComment", commentToSave);
  storyToSave.comments.push(commentToSave)
  saveStory(storyToSave)
}

function createComment(by = "", txt = "") {
  return {
    by: by,
    _id: utilService.makeId(), //TODO
    txt: txt,
    likedBy: [],
    createdAt: Date.now()
  };
}
