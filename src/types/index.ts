export interface Seat {
  id: string;
  number: string;
  isAvailable: boolean;
}

export interface Movie {
  id: string;
  title: string;
  description: string;
}

export interface Theater {
  id: string;
  name: string;
  location: string;
}

export interface Reservation {
  id: string;
  name: string;
  email: string;
  movie: string;
  theater: string;
  seats: string[];
}