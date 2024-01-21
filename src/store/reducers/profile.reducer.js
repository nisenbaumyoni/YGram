import { profileService } from "../../services/profile.service";

export const SET_PROFILES = "SET_PROFILES";
export const ADD_PROFILE = "ADD_PROFILE";
export const REMOVE_PROFILE = "REMOVE_PROFILE";
export const UPDATE_PROFILE = "UPDATE_PROFILE";
export const SET_FILTER_BY = "SET_FILTER_BY";

const initialState = {
  profiles: null,
  filterBy: profileService.getDefaultFilter(),
};

export function profileReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_PROFILES:
      return { ...state, profiles: action.profiles };

    case ADD_PROFILE:
      return { ...state, profiles: [...state.profiles, action.profile] };

    case UPDATE_PROFILE:
      return {
        ...state,
        profiles: state.profiles.filter((profile) =>
          profile._id === action._Id ? action.profile : profile
        ),
      };

    case REMOVE_PROFILE:
      return {
        ...state,
        profiles: state.profiles.filter(
          (profile) => profile._id !== action._Id
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
