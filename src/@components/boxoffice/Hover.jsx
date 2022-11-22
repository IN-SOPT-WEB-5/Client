import React from 'react';
// import MovieCard from './MovieCard';
import styled from 'styled-components';
import OpacityBg from '../../assets/Opacity.png';

function Hover() {
  return (
    <div>
      <HoverText>
        <InforTitleText>기본정보</InforTitleText>
        <InforText>“와칸다를 지켜라!”거대한 두 세계의 충돌, 운명을 건 최후의 전투가 시작된다!</InforText>
      </HoverText>
      {/* <MovieCard /> */}
      <Img src={OpacityBg} alt="반투명 배경" />
    </div>
  );
}

export default Hover;

const InforText = styled.div`
  padding-top: 0.8rem;

  font: ${({ theme }) => theme.fonts.body1};
  font-size: 1.5rem;
`;

const InforTitleText = styled.div`
  font: ${({ theme }) => theme.fonts.body1_bold};
`;

const Img = styled.img``;

const HoverText = styled.div`
  color: ${({ theme }) => theme.colors.white};
  position: absolute;
  top: 50px;
`;
