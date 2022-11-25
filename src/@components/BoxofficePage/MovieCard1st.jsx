import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import Hover from './Hover';

function MovieCard1st({ movieData, movie }) {
  const [isHover, setIsHover] = useState(false);
  return (
    <Wrapper onMouseOver={() => setIsHover(true)} onMouseOut={() => setIsHover(false)}>
      <div>
        <PosterNum src={movieData.posterNum} />
        <PosterImg src={movie.image} />
      </div>
      <ContentsHead>
        {movie.ageLimit === 12 && <AgeImg src={movieData.ageImage} />}
        {movie.ageLimit === 15 && <AgeImg src={movieData.ageImage} />}
        <Title>{movie.movieTitle.slice(0, 10)}</Title>
      </ContentsHead>
      <ContentsBody>
        <Date>개봉일 {movieData.openingDate}</Date>
        <Rate>예매율 {movie.advanceRate} %</Rate>
      </ContentsBody>
      <ContentsFooter>
        <BtnImg src={movieData.ticketingBtn1st} />
        <CinemaBtnImg src={movieData.cinemaBtn} />
        <HeartBtnImg src={movieData.heartBtn} />
      </ContentsFooter>
      {isHover ? (
        <HoverEvent>
          <Hover movie={movie} />
        </HoverEvent>
      ) : (
        ''
      )}
    </Wrapper>
  );
}

export default MovieCard1st;

const PosterNum = styled.img`
  position: absolute;

  margin: 31.4rem 21.435rem 1.57rem 1.1rem;
`;

const HoverEvent = styled.div`
  position: absolute;
  top: 2.1rem;
  z-index: 2;

  width: 24.5rem;
  height: 35.2rem;
`;

const Wrapper = styled.div`
  position: relative;
`;

const ContentsFooter = styled.div`
  margin-top: 0.8rem;
`;

const CinemaBtnImg = styled.img`
  margin-left: 1.1rem;
`;

const HeartBtnImg = styled.img`
  margin-left: 1.1rem;
`;

const BtnImg = styled.img``;

const Rate = styled.span`
  margin-left: 1.1rem;
  font: ${({ theme }) => theme.fonts.body2};
`;

const Date = styled.span`
  border-right: 0.1rem solid ${({ theme }) => theme.colors.gray4};
  padding-right: 1.1rem;
  font: ${({ theme }) => theme.fonts.body2};
`;

const ContentsBody = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.4rem;
`;

const ContentsHead = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1.6rem;
`;

const Title = styled.span`
  color: ${({ theme }) => theme.colors.gray1};
  font: ${({ theme }) => theme.fonts.headline3};
  margin-left: 1.2rem;
`;

const AgeImg = styled.img``;

const PosterImg = styled.img`
  width: 24.5rem;
  height: 35.2rem;
  margin-top: 2.1rem;
`;
