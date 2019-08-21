import { fromJS } from 'immutable';

const initialState = fromJS({
  app: {
    authors: [],
    isFetching: false
  },
  detail: {
    isFetching: false,
    publications: [],
    author: {
    }
  },
  home: {
    isFetching: false,
    publications: []
  }
});

export default initialState;
