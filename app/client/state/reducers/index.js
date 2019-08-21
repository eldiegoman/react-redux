import { combineReducers } from 'redux';

import home from '../modules/home/reducers';
import app from '../modules/app/reducers';
import detail from '../modules/detail/reducers';


const rootReducer = combineReducers({
  app,
  detail,
  home
});

export default rootReducer;
