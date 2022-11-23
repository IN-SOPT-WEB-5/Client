import { useState } from 'react';
import styled from 'styled-components';
import MovieSelection from './MovieSelection';
import TheaterSelection from './TheaterSelection';
import TimeSelection from './TimeSelection';

export default function QuickReserve() {
  // 영화 고르기 - 블랙팬서
  const [movieSelect, setMovieSelect] = useState(false);
  // 서울 지역 고르기 - 강남, 강남대로
  const [seoulAreaSelect, setSeoulAreaSelect] = useState([]);
  return (
    <St.Root>
      <MovieSelection movieSelect={movieSelect} setMovieSelect={setMovieSelect} />
      <TheaterSelection
        movieSelect={movieSelect}
        seoulAreaSelect={seoulAreaSelect}
        setSeoulAreaSelect={setSeoulAreaSelect}
      />
      {/* 1. theater에 따라 시간 보이게 하기* */}
      <TimeSelection seoulAreaSelect={seoulAreaSelect} />
    </St.Root>
  );
}

const St = {
  Root: styled.article`
    width: 100%;
    display: grid;
    grid-template-columns: 26rem 36rem auto;
    margin-top: 2.4rem;

    border: 0.5px solid ${({ theme }) => theme.colors.gray4};
  `,
};
