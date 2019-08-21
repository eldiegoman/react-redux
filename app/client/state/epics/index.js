import { combineEpics } from 'redux-observable';
import { publications } from './home';
import { search } from './home';
import { authors } from './app';
import { author } from './detail';
import { detail } from './detail'

export const rootEpic = combineEpics(
  author,
  authors,
  detail,
  publications,
  search
);