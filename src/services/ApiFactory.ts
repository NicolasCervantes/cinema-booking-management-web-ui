import axios, { AxiosInstance } from 'axios';
import { API_BASE_URL } from '../helpers/Constants';

class ApiFactory {
  static createApiInstance(baseURL: string = API_BASE_URL): AxiosInstance {
    return axios.create({
      baseURL,
    });
  }
}

export default ApiFactory;