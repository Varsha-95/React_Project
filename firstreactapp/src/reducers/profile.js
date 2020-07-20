import {
    PROFILE_ERROR,
    GET_PROFILE,
    CLEAR_PROFILE,
    UPDATE_PROFILE,
    GET_REPOS,
    GET_PROFILES
} from "../actions/types";

const initialState = {
    profile: null,
    profiles: [],//profile listing
    respos: [],
    loading: true,
    error: {},

}
export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
      case GET_PROFILES:
        return {
          ...state,
          loading: false,
          profiles: payload
        };
      case GET_PROFILE:
        return {
          ...state,
          loading: false,
          profile: payload
        };
      case UPDATE_PROFILE: 
        return {
          ...state,
          loading: false,
          profile: payload
        }  
      case PROFILE_ERROR:
        return {
          ...state,
          error: payload,
          loading: false,
          profile: null 
        };
      case  CLEAR_PROFILE:
      return {
        ...state,
        profile: null,
        repos: [],
        loading: false
      }; 
      case  GET_REPOS:
      return {
        ...state,
        repos: payload,
        profile:null,
        loading: false
      } 
      default:
        return state;
    }
  }