import { React } from 'react';
import MovieCard from './MovieCard';
import TopBtn from './TopBtn';
import { movieData } from '../../constants/movieData';
import styled from 'styled-components';
import AddMovieBtn from '../../assets/AddMovieBtn.png';
import MovieCard1st from './MovieCard1st';

function MovieSelect() {
  return (
    <ItemsRepeat>
      {/* {movieData.map((movieData) => (
        <MovieCard movieData={movieData} key={movieData.id} />
      ))} */}
      {movieData.map((movie) =>
        movie.isFirst ? (
          <MovieCard1st movieData={movie} key={movie.id} />
        ) : (
          <MovieCard movieData={movie} key={movie.id} />
        ),
      )}

      <AddMovieBtnImg src={AddMovieBtn} />
      <TopBtn />
    </ItemsRepeat>
  );
}

export default MovieSelect;

const AddMovieBtnImg = styled.img`
  margin-top: 3.2rem;
  margin-bottom: 6rem;
`;

const ItemsRepeat = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 110rem;
  position: relative;
`;
