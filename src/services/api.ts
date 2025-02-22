import axios from 'axios';
import { API_BASE_URL } from '../helpers/Constants';
import { fetchMovies, fetchTheaters, fetchReservations, createReservation, fetchSeatMap } from './ApiStrategies';

const api = axios.create({
  baseURL: API_BASE_URL,
});

export { fetchMovies, fetchTheaters, fetchReservations, createReservation, fetchSeatMap };

export default api;