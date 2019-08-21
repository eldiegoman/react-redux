import { createAction } from 'redux-actions';
import homeActionTypes from '../actionTypes';

export const fetchPublications = createAction(
  homeActionTypes.FETCH_HOME
);

export const fetchPublicationsCancel = createAction(
  homeActionTypes.FETCH_HOME_CANCEL
);

export const fetchPublicationsFailure = createAction(
  homeActionTypes.FETCH_HOME_FAILURE,
  error => {
    return error;
  }
);

export const fetchPublicationsRequest = createAction(
  homeActionTypes.FETCH_HOME_REQUEST
);

export const fetchPublicationsSuccess = createAction(
  homeActionTypes.FETCH_HOME_SUCCESS,
  response => {
    return response
  }
);


export const fetchPublicationsById = createAction(
  homeActionTypes.FETCH_HOME,
  id => ({ id })
);