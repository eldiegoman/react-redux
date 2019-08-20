import { combineReducers } from 'redux';

import home from '../modules/home/reducers';


const rootReducer = combineReducers({
  home
});

export default rootReducer;
