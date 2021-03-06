import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

import initialState from 'initialState';
import homeActionTypes from '../actionTypes';

const isFetching = handleActions(
  {
    [homeActionTypes.FETCH_HOME]: () => true,
    [homeActionTypes.FETCH_HOME_REQUEST]: () => true,
    [homeActionTypes.FETCH_HOME_FAILURE]: () => false,
    [homeActionTypes.FETCH_HOME_SUCCESS]: () => false,

    [homeActionTypes.SEARCH]: () => true,
    [homeActionTypes.SEARCH_REQUEST]: () => true,
    [homeActionTypes.SEARCH_FAILURE]: () => false,
    [homeActionTypes.SEARCH_SUCCESS]: () => false
  },
  initialState.getIn(['home', 'isFetching'])
);

const publications = handleActions(
  {
    [homeActionTypes.FETCH_HOME_REQUEST]: () => [],
    [homeActionTypes.FETCH_HOME_SUCCESS]: (_, action) =>
      action.payload,

    [homeActionTypes.SEARCH_REQUEST]: () => [],
    [homeActionTypes.SEARCH_SUCCESS]: (_, action) =>
      action.payload || [],

    [homeActionTypes.FILTER]: (state, action) => {

      const { key } = action.payload;
      const newData = state.slice().sort((a, b) => {
        if (a[key] > b[key]) {
          return 1;
        }
        if (a[key] < b[key]) {
          return -1;
        }
        // a must be equal to b
        return 0;
      });

      return newData
    },
  },
  initialState.getIn(['home', 'publications'])
);

export default combineReducers({
  isFetching,
  publications
});
