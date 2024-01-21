import { legacy_createStore as createStore } from "redux";
import { profileReducer } from "./reducers/profile.reducer";

export const store = createStore(profileReducer)

window.gStore = store