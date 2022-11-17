import React from 'react';
import Poster from '../../assets/ImgPoster.png';
import styled from 'styled-components';

function MovieCard() {
  return (
    <div>
      <PosterImg src={Poster} />
    </div>
  );
}

export default MovieCard;

const PosterImg = styled.img`
  width: 23.5rem;
  height: 35.2rem;
`;
