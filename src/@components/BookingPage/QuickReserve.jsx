import { useState } from 'react';
import styled from 'styled-components';
import MovieSelection from './MovieSelection';
import TheaterSelection from './TheaterSelection';
import TimeSelection from './TimeSelection';

export default function QuickReserve() {
  const [movieSelect, setMovieSelect] = useState(false);
  const [seoulAreaSelect, setSeoulAreaSelect] = useState([]);

  return (
    <Root>
      <MovieSelection movieSelect={movieSelect} setMovieSelect={setMovieSelect} />
      <TheaterSelection
        movieSelect={movieSelect}
        seoulAreaSelect={seoulAreaSelect}
        setSeoulAreaSelect={setSeoulAreaSelect}
      />
      <TimeSelection seoulAreaSelect={seoulAreaSelect} />
    </Root>
  );
}

const Root = styled.article`
  width: 100%;
  display: grid;
  grid-template-columns: 26rem 36rem auto;
  margin-top: 2.4rem;

  border: 0.5px solid ${({ theme }) => theme.colors.gray4};
`;
