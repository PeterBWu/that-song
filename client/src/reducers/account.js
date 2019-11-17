import * as types from './../actions/types';

const INITIAL_STATE = {
  email: '',
}

export default function( state = INITIAL_STATE, action ) {
  switch(action.type){
    case types.GET_ACCOUNT_INFO:
      return { ...state, email: action.payload }
    case types.GET_ACCOUNT_INFO_ERROR:
      return { ...state, apiError: action.payload }
    default:
        return state;
  }
}