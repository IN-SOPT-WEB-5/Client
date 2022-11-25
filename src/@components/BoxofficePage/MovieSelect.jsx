import { React, useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import TopBtn from './TopBtn';
import { movieData } from '../../core/movieData';
import styled from 'styled-components';
import AddMovieBtn from '../../assets/AddMovieBtn.png';
import MovieCard1st from './MovieCard1st';
import axios from 'axios';

function MovieSelect() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMovieData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`http://107.21.205.44:3000/movie`);
        setData(response.data.data);
        console.log(response.data.data);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchMovieData();
  }, []);

  if (loading) {
    return <div>로딩중</div>;
  }

  if (!data) {
    return null;
  }

  return (
    <ItemsRepeat>
      {data.map((movie, index) =>
        index === 0 ? (
          <MovieCard1st movieData={movieData[index]} movie={movie} key={index} />
        ) : (
          <MovieCard movieData={movieData[index]} movie={movie} key={index} />
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
