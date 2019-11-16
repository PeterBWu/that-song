import * as types from './../actions/types'

const INITIAL_STATE = {
  results: {},
  apiError: '',
  data: []
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.GET_SAVED_SONGS:
      return { ...state, data: action.payload }
    case types.GET_SAVED_SONGS_ERROR:
      return { ...state, apiError: action.payload }
    // case types.DELETE_SAVED_SONG:
    //   return{ ...state, data: action.payload}
    // case types.DELETE_SAVED_SONG_ERROR:
    //   return{ ...state, apiError: action.payload}
    default:
      return state;
  }
}