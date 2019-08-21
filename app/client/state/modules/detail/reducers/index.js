import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

import initialState from 'initialState';
import detailActionTypes from '../actionTypes';

const isFetching = handleActions(
  {
    [detailActionTypes.FETCH_DETAIL]: () => true,
    [detailActionTypes.FETCH_DETAIL_REQUEST]: () => true,
    [detailActionTypes.FETCH_DETAIL_FAILURE]: () => false,
    [detailActionTypes.FETCH_DETAIL_SUCCESS]: () => false,

    [detailActionTypes.FETCH_AUTHOR]: () => true,
    [detailActionTypes.FETCH_AUTHOR_REQUEST]: () => true,
    [detailActionTypes.FETCH_AUTHOR_FAILURE]: () => false,
    [detailActionTypes.FETCH_AUTHOR_SUCCESS]: () => false
  },
  initialState.getIn(['detail', 'isFetching'])
);

const author = handleActions(
  {
    [detailActionTypes.FETCH_AUTHOR_REQUEST]: () => [],
    [detailActionTypes.FETCH_AUTHOR_SUCCESS]: (_, action) =>
      action.payload

  },
  initialState.getIn(['detail', 'author'])
);

const publications = handleActions(
  {
    [detailActionTypes.FETCH_DETAIL_REQUEST]: () => [],
    [detailActionTypes.FETCH_DETAIL_SUCCESS]: (_, action) =>
      action.payload,

    [detailActionTypes.FILTER]: (state, action) => {

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
  initialState.getIn(['detail', 'publications'])
);

export default combineReducers({
  author,
  isFetching,
  publications
});
