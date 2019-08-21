import Request from '../../utils/request';
import moment from 'moment';
import sortBy from 'lodash/sortBy';
import { of, from } from 'rxjs';

const request = new Request({});

export function fetch() {
  return request.get('/authors');
}

export function fetchById(authorId) {
  return request.get(`/authors/${authorId}`);
}

export function fetchPublicationsById(id) {
  return request.get(`/authors/${id}/publications`);
}

