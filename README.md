# Movie List App

This React Native application fetches a list of popular movies from the TMDB API and displays them in a scrollable list. Each movie item includes the title, release year, and a brief description.
Users can refresh the list, search for movies by title, and view detailed information about each movie.

## Features

- Fetches and displays popular movies from the TMDB API.
- Pull-to-refresh functionality to reload the movie list.
- Search functionality to filter the list by movie title.
- Pagination to load more movies as the user scrolls down.
- Detailed movie screen to view more information about a selected movie.

## Technologies Used

- React Native
- @tanstack/react-query for data fetching and caching
- axios for API requests
- React Navigation for navigation between screens

## Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/movie-list-app.git
   cd movie-list-app
   
2. **Install dependencies**
    npm install
   
4. **Run the application**
    npx react-native run-android
     # or
    npx react-native run-ios

