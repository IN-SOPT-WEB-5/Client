import React from 'react';
import MovieCard from './MovieCard';
import MovieCard1st from './MovieCard1st';

function MovieSelect() {
  return (
    <div>
      <MovieCard1st />
      <MovieCard />
    </div>
  );
}

export default MovieSelect;
