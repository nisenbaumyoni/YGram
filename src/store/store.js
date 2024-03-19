import { legacy_createStore as createStore } from "redux";
import { storyReducer } from "./reducers/story.reducer";


export const store = createStore(storyReducer)

window.gStore = store

store.subscribe(() => {
    console.log('**** Store state changed: ****')
    console.log('storeState:\n', store.getState())
    console.log('*******************************')
})