import { legacy_createStore as createStore } from "redux";
import { storyReducer } from "./reducers/story.reducer";


export const store = createStore(storyReducer)

window.gStore = store

store.subscribe(() => {
    console.log('**** Store state changed: ****')
    console.log('storeState:\n', store.getState())
    console.log('*******************************')
})



// const rootReducer = combineReducers({
//     storyReducer: storyReducer,
// })

// const middleware = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : undefined
// export const store = createStore(rootReducer, middleware)

// store.subscribe(() => {
//     console.log('**** Store state changed: ****')
//     console.log('storeState:\n', store.getState())
//     console.log('*******************************')
//     // console.log('storeListeners:\n', store.listeners())
//     // console.log('*******************************')
//     // console.log('storeDispatch:\n', store.dispatch())
// })