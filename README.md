# Movie Reservation App

This project is a movie reservation application built with React and TypeScript. It allows users to view a list of movies and theaters, select a movie, theater, and time, reserve seats with a seat map, and view existing reservations.

## Features

- View a list of movies and theaters
- Select a movie and theater
- Choose a showtime and reserve seats
- Interactive seat map for seat selection
- View existing reservations

## Project Structure

```
movie-reservation-app
├── public
│   ├── index.html          # Main HTML file for the React application
│   └── manifest.json       # Metadata for Progressive Web App features
├── src
│   ├── components          # Reusable components
│   │   ├── MovieList.tsx   # Component to display a list of movies
│   │   ├── TheaterList.tsx  # Component to display a list of theaters
│   │   ├── SeatMap.tsx      # Component for seat selection
│   │   ├── ReservationForm.tsx # Component for making reservations
│   │   └── ReservationList.tsx # Component to view existing reservations
│   ├── pages               # Page components
│   │   ├── HomePage.tsx    # Landing page of the application
│   │   ├── MoviePage.tsx   # Page for selected movie details
│   │   ├── TheaterPage.tsx  # Page for selected theater details
│   │   ├── SeatSelectionPage.tsx # Page for seat selection
│   │   └── ReservationPage.tsx # Page to view existing reservations
│   ├── services            # API service files
│   │   ├── api.ts          # Functions for making API calls
│   │   └── reservationService.ts # Functions for reservation-related API calls
│   ├── App.tsx             # Main application component
│   ├── index.tsx           # Entry point for the React application
│   └── types               # TypeScript types and interfaces
│       └── index.ts
├── package.json            # npm configuration file
├── tsconfig.json           # TypeScript configuration file
└── README.md               # Project documentation
```

## Getting Started

1. Clone the repository:
   ```
   git clone <repository-url>
   cd movie-reservation-app
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000` to view the application.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.