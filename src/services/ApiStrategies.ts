import ApiFactory from './ApiFactory';
import { API_BASE_URL } from '../helpers/Constants';

const api = ApiFactory.createApiInstance(API_BASE_URL);

export const fetchMovies = async () => {
  const response = await api.get('/movies');
  return response.data;
};

export const fetchTheaters = async () => {
  const response = await api.get('/theaters');
  return response.data;
};

export const fetchReservations = async (userId: any) => {
  const response = await api.get(`/reservations?userId=${userId}`);
  return response.data;
};

export const createReservation = async (reservationData: any) => {
  const response = await api.post('/reservations', reservationData);
  return response.data;
};

export const fetchSeatMap = async (movieId: string, theaterId: string) => {
  const response = await api.get(`/seatmap?movieId=${movieId}&theaterId=${theaterId}`);
  return response.data;
};