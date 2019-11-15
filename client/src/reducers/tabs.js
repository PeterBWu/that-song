import * as types from './../actions/types';

const initialState = {
  tabs1: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.CHANGE_SELECTED_TAB:
      return {
        ...state,
        [action.namespace]: action.tab
      };

    default:
      return state;
  }
}