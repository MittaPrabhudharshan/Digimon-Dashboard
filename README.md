# Digimon Dashboard

A React-based web application that provides a comprehensive dashboard for exploring Digimon characters. Built with Vite for fast development and React Router for navigation.

## Features

- **Browse Digimons**: View a paginated list of Digimon characters with their images and names.
- **Search Functionality**: Search for specific Digimons by name.
- **Detailed Views**: Click on any Digimon to view detailed information.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Technologies Used

- **React**: Frontend library for building user interfaces.
- **Vite**: Build tool for fast development and optimized production builds.
- **React Router**: For client-side routing.
- **Digi-API**: External API for fetching Digimon data (https://digi-api.com/api/v1/digimon).

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Attull/digimon-dasboard.git
   ```

2. Navigate to the project directory:
   ```bash
   cd digimon-dasboard
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and visit `http://localhost:5173` (or the port shown in the terminal).

### Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint for code linting

## Project Structure

```
src/
├── components/
│   ├── DigimonCard/      # Individual Digimon card component
│   ├── Digimons/         # Main list view with pagination
│   ├── DigimonDetails/   # Detailed view for a single Digimon
│   ├── Navbar/           # Navigation bar
│   └── SearchDigimon/    # Search functionality
├── App.jsx               # Main app component with routing
├── main.jsx              # Entry point
└── index.css             # Global styles
```

## API Usage

This application uses the Digi-API (https://digi-api.com/) to fetch Digimon data. The API provides information about various Digimon characters including their names, images, and attributes.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the ISC License.

## Acknowledgments

- Digi-API for providing the Digimon data
- Vite and React communities for excellent documentation and tools
