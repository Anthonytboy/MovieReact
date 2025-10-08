import React from 'react';
import '../css/favorites.css';
import { useMovieContext } from '../contexts/MovieContext';
import MovieCard from '../components/MovieCard';

function Favorites() {
  const { favorites } = useMovieContext();

  if (favorites) {
    return (
      <>
        <h2>Your Favorite Movies</h2>
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </>
    );
  }
  return (
    <div className="favorites-empty">
      <h2>No favorite movies added yet.</h2>
      <p>Add some movies to your favorites to see them here!</p>
    </div>
  );
}

export default Favorites;
