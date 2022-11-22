import { React } from 'react';
import MovieCard from './MovieCard';
import { movieData } from '../../constants/movieData';
import styled from 'styled-components';
import AddMovieBtn from '../../assets/AddMovieBtn.png';
// import MovieCard1st from './MovieCard1st';

function MovieSelect() {
  return (
    <ItemsRepeat>
      {movieData.map((movieData) => (
        <MovieCard movieData={movieData} key={movieData.id} />
      ))}
      {/* {movieData.map((movie) => {
        movie.isFirst ? (
          <MovieCard1st movieData={movie} key={movie.id} />
        ) : (
          <MovieCard movieData={movie} key={movie.id} />
        );
      })} */}
      <AddMovieBtnImg src={AddMovieBtn} />
    </ItemsRepeat>
  );
}

export default MovieSelect;

const AddMovieBtnImg = styled.img`
  padding-top: 3.2rem;
`;

// const HoverEvent = styled.div`
//   position: absolute;
//   top: 0px;
//   z-index: 2;
// `;

const ItemsRepeat = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 1100px;
  position: relative;
`;
