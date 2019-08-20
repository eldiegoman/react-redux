import axios from 'axios';
import get from 'lodash/get';
import { from, of, throwError } from 'rxjs';
import settings from './settingRequest';
class Request {
  constructor(args) {

    const { normalizer } = args;

    const request = axios.create({
      baseURL: `${settings.env.dev.url}`,
      timeout: 1000,
      transformResponse: normalizer
    });

    request.interceptors.response.use(this.handleSuccess, this.handleError);

    this.request = request;

  }

  handleSuccess = response => response;

  handleError = error => {
    const status = get(error, 'response.status', '');
    const message = get(error, 'message', '');

    return {
      status,
      message
    };
  };

  get(path) {

    const req = this.request.get(path)
      .then(response => {
        return response.data;
      });

    return from(req);

  }
}

export default Request;
