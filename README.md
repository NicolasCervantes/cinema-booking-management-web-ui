# Frontend - Movie Reservation App

## Descripción

Este es el frontend de la aplicación de reserva de películas. Proporciona una interfaz de usuario para gestionar películas, teatros, showtimes, asientos y reservas.

## Funciones

Este frontend permite:

Ver la lista de películas disponibles.
Seleccionar una película y ver los teatros que la proyectan.
Seleccionar un teatro y ver los horarios de función (showtimes) disponibles.
Seleccionar un horario de función (showtime) y ver los asientos disponibles.
Realizar una reserva de asientos para un horario de función (showtime) específico.

## Requisitos

- Node.js (v14 o superior)
- npm (v6 o superior)

## Estructura del proyecto

```plaintext
frontend
├── public
│   ├── index.html          # Archivo HTML principal para la aplicación React
│   └── manifest.json       # Metadata para características de Progressive Web App
├── src
│   ├── components          # Componentes reutilizables
│   │   ├── MovieList.tsx   # Componente para mostrar una lista de películas
│   │   ├── TheaterList.tsx # Componente para mostrar una lista de teatros
│   │   ├── SeatMap.tsx     # Componente para la selección de asientos
│   │   ├── ReservationForm.tsx # Componente para hacer reservas
│   │   └── ReservationList.tsx # Componente para ver reservas existentes
│   ├── pages               # Componentes de página
│   │   ├── HomePage.tsx    # Página de inicio de la aplicación
│   │   ├── MoviePage.tsx   # Página de detalles de la película seleccionada
│   │   ├── TheaterPage.tsx # Página de detalles del teatro seleccionado
│   │   ├── SeatSelectionPage.tsx # Página para la selección de asientos
│   │   └── ReservationPage.tsx # Página para ver reservas existentes
│   ├── services            # Archivos de servicio de API
│   │   ├── api.ts          # Funciones para hacer llamadas a la API
│   │   └── reservationService.ts # Funciones para llamadas a la API relacionadas con reservas
│   ├── App.tsx             # Componente principal de la aplicación
│   ├── index.tsx           # Punto de entrada para la aplicación React
│   └── types               # Tipos e interfaces de TypeScript
│       └── index.ts
├── .env                    # Archivo de configuración de variables de entorno
├── package.json            # Archivo de configuración de npm
├── tsconfig.json           # Archivo de configuración de TypeScript
└── README.md               # Documentación del proyecto
```

## Getting Started

1. Clona el repositorio:
   ```sh
   git clone <URL_DEL_REPOSITORIO_FRONTEND>
   cd frontend
   ```

2. Instala las dependencias:
   ```
   npm install
   ```

3. Configura las variables de entorno, crea o modifica el archivo constants.tsx para añadir la siguiente variable:
   ```
   API_BASE_URL=http://localhost:3000/api
   ```

4. Ejecuta la aplicación:
   ```
   npm start
   ```
   Se debe tener en cuenta que el puerto debe ser diferente del usado al puerto del backend, para no impedir el funcionamiento del flujo.

   Ejemplo:
   http://localhost:3001/api
