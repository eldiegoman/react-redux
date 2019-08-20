import { combineEpics } from 'redux-observable';
import { publications } from './home';

export const rootEpic = combineEpics(
  publications
);