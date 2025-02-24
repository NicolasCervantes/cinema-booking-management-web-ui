export interface Movie {
  id: number;
  title: string;
  description: string;
  duration: number;
}

export interface Theater {
  id: number;
  name: string;
  location: string;
}

export interface Showtime {
  id: number;
  movieId: number;
  theaterId: number;
  startTime: Date;
}

export interface Seat {
  id: number;
  number: string;
  isAvailable: boolean;
  theaterId: number;
}

export interface Reservation {
  id: number;
  name: string;
  email: string;
  seats: string[];
}