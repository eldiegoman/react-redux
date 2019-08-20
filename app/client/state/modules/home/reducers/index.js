import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

import initialState from 'initialState';
import homeActionTypes from '../actionTypes';

const isFetching = handleActions(
  {
    [homeActionTypes.FETCH_HOME]: () => true,
    [homeActionTypes.FETCH_HOME_REQUEST]: () => true,
    [homeActionTypes.FETCH_HOME_FAILURE]: () => false,
    [homeActionTypes.FETCH_HOME_SUCCESS]: () => false
  },
  initialState.getIn(['home', 'isFetching'])
);

const publications = handleActions(
  {
    [homeActionTypes.FETCH_HOME_REQUEST]: () => [],
    [homeActionTypes.FETCH_HOME_SUCCESS]: (_, action) =>
      action.payload
  },
  initialState.getIn(['home', 'publications'])
);

export default combineReducers({
  isFetching,
  publications
});
