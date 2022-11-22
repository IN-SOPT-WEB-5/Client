import { React } from 'react';
import { useState } from 'react';
import MovieCard from './MovieCard';
import { movieData } from '../../constants/movieData';
import styled from 'styled-components';
import Hover from './Hover';
// import AddMovieBtn from '../../assets/AddMovieBtn.png';
// import MovieCard1st from './MovieCard1st';

function MovieSelect() {
  const [isHover, setIsHover] = useState(0);
  return (
    <ItemsRepeat onMouseOver={() => setIsHover(1)} onMouseOut={() => setIsHover(0)}>
      {movieData.map((movieData) => (
        <MovieCard movieData={movieData} key={movieData.id} />
      ))}
      {isHover ? (
        <HoverEvent>
          <Hover />
        </HoverEvent>
      ) : (
        ''
      )}
      {/* {movieData.map((movie) => {
        movie.isFirst ? (
          <MovieCard1st movieData={movie} key={movie.id} />
        ) : (
          <MovieCard movieData={movie} key={movie.id} />
        );
      })} */}
      {/* <AddMovieBtn /> */}
    </ItemsRepeat>
  );
}

export default MovieSelect;

const HoverEvent = styled.div`
  position: absolute;
  top: 0px;
  z-index: 2;
`;

const ItemsRepeat = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 1100px;
`;
