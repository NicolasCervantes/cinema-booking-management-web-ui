import axios from 'axios';
import { API_BASE_URL } from '../helpers/Constants';
import { Reservation } from '../types';
import { createReservation } from './api';

const API_URL = API_BASE_URL; // Replace with your backend API URL

export const makeReservation = async (reservation: { name: string; email: string; showtimeId: number; seatIds: number[] }) => {
  const response = await createReservation(reservation);
  return response;
};

export const fetchReservations = async (userId: string): Promise<Reservation[]> => {
  const response = await axios.get(`${API_URL}/reservations?userId=${userId}`);
  return response.data;
};

export const fetchSeatMap = async (movieId: string, theaterId: string, showTime: string) => {
  const response = await axios.get(`${API_URL}/seatmap?movieId=${movieId}&theaterId=${theaterId}&showTime=${showTime}`);
  return response.data;
};

export const reserveSeats = async (movieId: string, theaterId: string, showTime: string, seats: string[]) => {
  const response = await axios.post(`${API_URL}/reservations`, { movieId, theaterId, showTime, seats });
  return response.data;
};