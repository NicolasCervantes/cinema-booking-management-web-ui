import axios from 'axios';
import { Reservation } from '../types';
import api from './api';

const API_URL = 'http://your-backend-api-url'; // Replace with your backend API URL

export const createReservation = async (reservationData: Reservation): Promise<Reservation> => {
    const response = await axios.post(`${API_URL}/reservations`, reservationData);
    return response.data;
};

export const fetchReservations = async (userId: string): Promise<Reservation[]> => {
    const response = await axios.get(`${API_URL}/reservations?userId=${userId}`);
    return response.data;
};

export const fetchSeatMap = async (movieId: string, theaterId: string, showTime: string) => {
  const response = await api.get(`/seatmap?movieId=${movieId}&theaterId=${theaterId}&showTime=${showTime}`);
  return response.data;
};

export const reserveSeats = async (movieId: string, theaterId: string, showTime: string, seats: string[]) => {
  const response = await api.post('/reservations', { movieId, theaterId, showTime, seats });
  return response.data;
};