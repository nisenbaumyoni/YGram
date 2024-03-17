import { storyService } from "../../services/story.service";

export const SET_STORIES = "SET_STORIES";
export const ADD_STORY = "ADD_STORY";
export const REMOVE_STORY = "REMOVE_STORY";
export const UPDATE_STORY = "UPDATE_STORY";
export const SET_FILTER_BY = "SET_FILTER_BY";
export const UNDO_CHANGES = "UNDO_CHANGES";
export const SET_IS_LOADING = "SET_IS_LOADING";

const initialState = {
  stories: null,
  filterBy: storyService.getDefaultFilter(),
  loggedInMiniUser: {
    _id: "u999",
    fullname: "Yoni Nisenbaum",
    imgUrl: "http://some-img",
  }
};

export function storyReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_STORIES:
      return { ...state, stories: action.stories };

    case ADD_STORY:
      return { ...state, stories: [...state.stories, action.story] };

    case UPDATE_STORY:
      return {
        ...state,
        stories: state.stories.map((story) =>
          story._id === action.story._id ? action.story : story
        ),
      };

    case REMOVE_STORY:
      return {
        ...state,
        stories: state.stories.filter((story) => story._id !== action._id),
      };

    case SET_FILTER_BY:
      return {
        ...state,
        filterBy: { ...action.filterBy },
      };

    default:
      return state;
  }
}

