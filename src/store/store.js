import { legacy_createStore as createStore } from "redux";
import { storyReducer } from "./reducers/story.reducer";

export const store = createStore(storyReducer)

window.gStore = store