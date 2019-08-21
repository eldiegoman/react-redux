import { combineEpics } from 'redux-observable';
import { publications } from './home';
import { search } from './home';

export const rootEpic = combineEpics(
  publications,
  search
);