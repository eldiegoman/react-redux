import { createAction } from 'redux-actions';
import homeActionTypes from '../actionTypes';

export const searchPublications = createAction(
  homeActionTypes.SEARCH,
  term => ({ term })
);

export const searchPublicationsCancel = createAction(
  homeActionTypes.SEARCH_CANCEL
);

export const searchPublicationsFailure = createAction(
  homeActionTypes.SEARCH_FAILURE,
  error => {
    return error;
  }
);

export const searchPublicationsRequest = createAction(
  homeActionTypes.SEARCH_REQUEST
);

export const searchPublicationsSuccess = createAction(
  homeActionTypes.SEARCH_SUCCESS,
  response => {
    return response
  }
);
