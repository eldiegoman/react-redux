import Request from '../../utils/request';
import moment from 'moment';
import sortBy from 'lodash/sortBy';
import { of, from } from 'rxjs';

const request = new Request({
  normalizer: (data = []) => {
    let parseData = JSON.parse(data);

    parseData.data.map(item => {
      item.date = moment(item.date).format('DD MMM YYYY')
    });

    return parseData;
  }
});

export function fetch() {
  return request.get('/publications');
}


export function search(term) {
  console.log("TCL: search -> term", term)
  return request.get(`/search/:${term}`);
}