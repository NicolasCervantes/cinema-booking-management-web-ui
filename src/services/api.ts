import axios from 'axios';
import { API_BASE_URL } from '../helpers/Constants';
import { Movie, Theater, Showtime, Seat, Reservation } from '../types';

export const fetchMovies = async (): Promise<Movie[]> => {
  const response = await axios.get(`${API_BASE_URL}/movies`);
  console.log('API response:', response.data); // Agregar depuración
  return response.data;
};

export const fetchTheaters = async (): Promise<Theater[]> => {
  const response = await axios.get(`${API_BASE_URL}/theaters`);
  return response.data;
};

export const fetchShowtimes = async (movieId: string, theaterId: string): Promise<Showtime[]> => {
  const response = await axios.get(`${API_BASE_URL}/showtimes`, {
    params: { movieId, theaterId },
  });
  return response.data;
};

export const fetchSeats = async (showtimeId: string): Promise<Seat[]> => {
  const response = await axios.get(`${API_BASE_URL}/seats`, {
    params: { showtimeId },
  });
  return response.data;
};

export const createReservation = async (reservation: { name: string; email: string; seats: string[] }) => {
  const response = await axios.post(`${API_BASE_URL}/reservations`, reservation);
  return response.data;
};

export const fetchReservations = async (): Promise<Reservation[]> => {
  const response = await axios.get(`${API_BASE_URL}/reservations`);
  return response.data;
};
