import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import auth from './auth';
import songs from './songs';
import counter from './counter';
import blogs from './blog';
import savedSongs from './savedSongs'
import tabsReducer from './tabs'
import history from './history'

export default combineReducers({
    auth,
    blogs,
    counter,
    songs,
    savedSongs,
    tabsReducer,
    history,
    form: formReducer
});
