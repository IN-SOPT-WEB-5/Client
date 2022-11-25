import React from 'react';
// import MovieCard from './MovieCard';
// import { hoverData } from '../../constants/hoverData';
import styled from 'styled-components';
import OpacityBg from '../../assets/Opacity.png';

function Hover({ movie }) {
  // const HoverInfo = '“와칸다를 지켜라!”거대한 두 세계의 충돌, 운명을 건 최후의 전투가 시작된다!';
  return (
    <div>
      <HoverText>
        <HoverTopItems>
          <HoverHeader>기본정보</HoverHeader>
          <HoverBody>{movie.description}</HoverBody>
        </HoverTopItems>
        <HoverFooter>
          <RatingTitle>관람평</RatingTitle>
          <RatingCount>{movie.movieRating}</RatingCount>
        </HoverFooter>
      </HoverText>

      {/* <MovieCard /> */}
      <Img src={OpacityBg} />
    </div>
  );
}

export default Hover;

const HoverTopItems = styled.div`
  height: 240px;
`;

const RatingCount = styled.p`
  font: ${({ theme }) => theme.fonts.headline1};
  color: ${({ theme }) => theme.colors.sub_mint};
`;

const HoverFooter = styled.div`
  display: flex;
  justify-content: space-between;

  border-top: 0.1rem solid ${({ theme }) => theme.colors.gray5};
  padding-top: 1.8rem;
`;

const RatingTitle = styled.p`
  font: ${({ theme }) => theme.fonts.body1_bold};
`;

const HoverBody = styled.div`
  padding-top: 0.8rem;

  font: ${({ theme }) => theme.fonts.body1};
  font-size: 1.5rem;
`;

const HoverHeader = styled.div`
  font: ${({ theme }) => theme.fonts.body1_bold};
`;

const Img = styled.img`
  width: 24.5rem;
`;

const HoverText = styled.div`
  margin: 3.6rem 2.5rem 3.5rem 2.5rem;
  color: ${({ theme }) => theme.colors.white};
  position: absolute;
  top: 0;
`;
