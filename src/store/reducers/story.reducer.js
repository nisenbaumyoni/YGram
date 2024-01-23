import { storyService } from "../../services/story.service";

export const SET_STORIES = "SET_STORIES";
export const ADD_STORY = "ADD_STORY";
export const REMOVE_STORY = "REMOVE_STORY";
export const UPDATE_STORY = "UPDATE_STORY";
export const SET_FILTER_BY = "SET_FILTER_BY";

const initialState = {
  stories: null,
  filterBy: storyService.getDefaultFilter(),
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
        stories: state.stories.filter((story) =>
          story._id === action._Id ? action.story : story
        ),
      };

    case REMOVE_STORY:
      return {
        ...state,
        stories: state.stories.filter(
          (story) => story._id !== action._Id
        ),
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
