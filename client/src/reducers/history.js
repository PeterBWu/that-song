import * as types from './../actions/types';

const INITIAL_STATE = {
  results: {},
  apiError: '',
  data: []
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.GET_SEARCH_HISTORY:
      console.log(action.payload)
      return { ...state, data: action.payload }
    case types.GET_SEARCH_HISTORY_ERROR:
      return { ...state, apiError: action.payload }
    default:
      return state;
  }
}