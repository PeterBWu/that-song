import * as types from "./types";
import axios from "axios";

export const increment = () => {
  return { type: types.INCREMENT_COUNTER };
};

export const decrement = () => {
  return { type: types.DECREMENT_COUNTER };
};

export const signup = (formprops, callback) => async dispatch => {
  try {
    const response = await axios.post("/api/auth/signup", formprops);
    dispatch({ type: types.AUTH_USER, payload: response.data.token });
    localStorage.setItem("token", response.data.token);
    callback();
  } catch (e) {
    dispatch({ type: types.AUTH_ERROR, payload: "Email is in use" });
  }
};

export const signIn = (formProps, callback) => async dispatch => {
  try {
    const response = await axios.post("/api/auth/signin", formProps);
    dispatch({ type: types.AUTH_USER, payload: response.data.token });
    localStorage.setItem("token", response.data.token);
    callback();
  } catch (e) {
    dispatch({ type: types.AUTH_ERROR, payload: "Invalid login credentials" });
  }
};

export const signout = () => {
  localStorage.removeItem("token");
  return {
    type: types.AUTH_USER,
    payload: ""
  };
};

export const fetchBlogs = () => async dispatch => {
  try {
    const response = await axios.get("/api/blogs");
    dispatch({ type: types.FETCH_BLOGS, payload: response.data });
  } catch (e) {
    dispatch({ type: types.BLOGS_ERROR, payload: "Something went wrong" });
  }
};

export const fetchBlog = id => async dispatch => {
  try {
    const response = await axios.get(`/api/blogs/${id}`);
    dispatch({ type: types.FETCH_BLOG, payload: response.data });
  } catch (e) {
    dispatch({ type: types.BLOGS_ERROR, payload: "Something went wrong" });
  }
};

export const createBlog = (blog, callback) => async dispatch => {
  try {
    const response = await axios.post("/api/blogs", blog, {
      headers: { authorization: localStorage.getItem("token") }
    });

    dispatch({ type: types.CREATE_BLOG });
    callback();
  } catch (e) {
    dispatch({
      type: types.BLOGS_ERROR,
      payload: "Something went wrong when creating a blog"
    });
  }
};

export const getSavedSongs = () => async dispatch => {
  try {
    const savedSongs = await axios.get('api/favsongs', {
      headers: {authorization: localStorage.getItem("token")}
    })
    dispatch({ type: types.GET_SAVED_SONGS, payload: savedSongs.data});
  } catch(e){
    dispatch({ type: types.GET_SAVED_SONGS_ERROR, payload: "Something went wrong connecting to database "});
  }
};

export const getSearchHistory = () => async dispatch => {
  try {
    const searchHistory = await axios.get('api/history', {
      headers: {authorization: localStorage.getItem("token")}
    })
    dispatch({ type: types.GET_SEARCH_HISTORY, payload: searchHistory.data})
  } catch(e){
    dispatch({ type: types.GET_SEARCH_HISTORY_ERROR, payload: 'Something went wrong connecting to the database'});
  }
};

export const searchSongByLyrics = (formProps, callback) => async dispatch => {
  try {
    const {lyric,artist} = formProps
    const trackList = await axios.get('api/lyrics/search/'+lyric+'/'+artist)
    dispatch({ type: types.GET_SONGS, payload: trackList.data });
    callback();
  } catch (e) {
    dispatch({
      type: types.GET_SONGS_ERROR,
      payload: "something went wrong with getting the songs"
    });
  }
};
export const fetchDetails = (formProps, callback) => async dispatch => {
  try{
    const {id,artist,trackName} = formProps
    const lyrics     = await axios.get('/api/lyrics/display/'+id)
    const spotify    = await axios.get('/api/lyrics/spotify')
    const youtube    = await axios.get(`/api/lyrics/videoInfo/${artist}/${trackName}`)
    console.log('hellowrold')
    console.log(lyrics.data)
    console.log(spotify.data)
    console.log(youtube.data)
    // const secondCall = await axios.get(' our Backend B', trackList)
    // const secondCall = { data: [{id:'1234'},{id:'4321'}] };
    // console.log(trackList.data)
    dispatch({ type: types.SONG_INFO, payload: {lyrics:lyrics.data,spotify:spotify.data,youtube:youtube.data} });
    callback();

  } catch (e) {
    dispatch({
      type: types.GET_SONGS_ERROR,
      payload: "Something Went Wrong Getting Song Info. Please Try Again Later!"
    });
  }
};

  export const changeSelectedTab = (selectedTab, tabNamespace) => {
    return {
      type: types.CHANGE_SELECTED_TAB,
      tab: selectedTab,
      namespace: tabNamespace
    };
  }