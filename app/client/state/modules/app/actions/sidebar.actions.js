import { createAction } from 'redux-actions';
import appActionTypes from '../actionTypes';

export const fetchAuthors = createAction(
  appActionTypes.FETCH_AUTHORS
);

export const fetchAuthorsCancel = createAction(
  appActionTypes.FETCH_AUTHORS_CANCEL
);

export const fetchAuthorsFailure = createAction(
  appActionTypes.FETCH_AUTHORS_FAILURE,
  error => {
    return error;
  }
);

export const fetchAuthorsRequest = createAction(
  appActionTypes.FETCH_AUTHORS_REQUEST
);

export const fetchAuthorsSuccess = createAction(
  appActionTypes.FETCH_AUTHORS_SUCCESS,
  response => {
    return response
  }
);
