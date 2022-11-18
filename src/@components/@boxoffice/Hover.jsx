import React from 'react';
// import MovieCard from './MovieCard';
import styled from 'styled-components';

function Hover() {
  return (
    <div>
      <HoverText>
        <div>기본정보</div>
        <div>“와칸다를 지켜라!”거대한 두 세계의 충돌, 운명을 건 최후의 전투가 시작된다!</div>
      </HoverText>
      {/* <MovieCard /> */}
    </div>
  );
}

export default Hover;

const HoverText = styled.div`
  width: 245px;
  height: 352px;
  background-color: black;
  color: white;
  opacity: 30%;
`;
