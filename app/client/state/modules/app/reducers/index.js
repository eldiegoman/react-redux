import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

import initialState from 'initialState';
import appActionTypes from '../actionTypes';

const isFetching = handleActions(
  {
    [appActionTypes.FETCH_AUTHORS]: () => true,
    [appActionTypes.FETCH_AUTHORS_REQUEST]: () => true,
    [appActionTypes.FETCH_AUTHORS_FAILURE]: () => false,
    [appActionTypes.FETCH_AUTHORS_SUCCESS]: () => false
  },
  initialState.getIn(['app', 'isFetching'])
);

const authors = handleActions(
  {
    [appActionTypes.FETCH_AUTHORS_REQUEST]: () => [],
    [appActionTypes.FETCH_AUTHORS_SUCCESS]: (_, action) =>
      action.payload,
  },
  initialState.getIn(['app', 'authors'])
);

export default combineReducers({
  isFetching,
  authors
});
