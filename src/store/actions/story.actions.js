import { storyService } from "../../services/story.service";
import {
  SET_STORIES,
  SET_IS_LOADING,
  REMOVE_STORY,
  UNDO_CHANGES,
  ADD_STORY,
  SET_FILTER_BY,
  UPDATE_STORY,
} from "../reducers/story.reducer";
import { store } from "../store";

export async function loadStories() {
  try {
    
    const stories = await storyService.query(filterBy);
    store.dispatch({ type: SET_STORIES, stories });
  } catch (err) {
    console.log("Had issues loading stories", err);
  }
}

export async function removeStory(storyId) {
  store.dispatch({ type: SET_IS_LOADING, isLoading: true });
  try {
    await storyService.remove(storyId);
    store.dispatch({ type: REMOVE_STORY, storyId });
  } catch (err) {
    console.log("Had issues Removing story", err);
    throw err;
  } finally {
    store.dispatch({ type: SET_IS_LOADING, isLoading: false });
  }
}

export async function removeStoryOptimistic(storyId) {
  try {
    store.dispatch({ type: REMOVE_STORY, storyId });
    await storyService.remove(storyId);
  } catch (err) {
    store.dispatch({ type: UNDO_CHANGES });
    console.log("Had issues Removing story", err);
    throw err;
  }
}

export async function saveStory(storyToSave) {
  store.dispatch({ type: SET_IS_LOADING, isLoading: true });
  const type = storyToSave._id ? UPDATE_STORY : ADD_STORY;
  try {
    const savedStory = await storyService.save(storyToSave);
    store.dispatch({ type, story: savedStory });
  } catch (err) {
    console.log("Had issues saving story", err);
    throw err;
  } finally {
    store.dispatch({ type: SET_IS_LOADING, isLoading: false });
  }
}

export function setFilterBy(filterBy) {
  store.dispatch({ type: SET_FILTER_BY, filterBy });
}

export function setIsLoading(isLoading) {
  store.dispatch({ type: SET_IS_LOADING, isLoading });
}
