import React from 'react';
import MovieCard from './MovieCard';
import Hover from './Hover';
// import MovieCard1st from './MovieCard1st';
import { MovieData } from './MovieData';
import styled from 'styled-components';

function MovieSelect() {
  return (
    <ItemsRepeat>
      <Hover />
      {MovieData.map((movie) => (
        <MovieCard movieData={movie} key={movie.id} />
      ))}
    </ItemsRepeat>
  );
}

export default MovieSelect;

// const HoverEvent = styled.div``;

const ItemsRepeat = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 1100px;
`;
