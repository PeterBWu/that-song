import * as types from './../actions/types'
const INTITAL_STATE = {
    results:[],
    apiError:'',
    data:{}
}
export default function(state =INTITAL_STATE, action){
    switch(action.type){
        case types.SONG_INFO:
            return {...state,data:action.payload}
        case types.GET_SONGS:
            console.log("hit")
            return {...state, results:action.payload}
        case types.GET_SONGS_ERROR:
            return {...state, apiError:action.payload}
        default:
            return state;
    }
}