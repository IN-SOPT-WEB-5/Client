import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import Hover from './Hover';
import twelveAge from '../../assets/AgeLimit12.png';
import fiftinAge from '../../assets/AgeLimit15.png';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function MovieCard(props) {
  const { movieData, movie } = props;
  const [isHover, setIsHover] = useState(false);
  const navigate = useNavigate();

  return (
    movie && (
      <Wrapper onMouseOver={() => setIsHover(true)} onMouseOut={() => setIsHover(false)}>
        <div>
          <PosterNum src={movieData.posterNum} />
          <PosterImg src={movie.image} />
        </div>
        <ContentsHead>
          {movie.ageLimit === 12 && <AgeImg src={twelveAge} />}
          {movie.ageLimit === 15 && <AgeImg src={fiftinAge} />}
          <Title>{movie.movieTitle.slice(0, 10)}</Title>
        </ContentsHead>
        <ContentsBody>
          <Date>개봉일 {movieData.openingDate}</Date>
          <Rate>예매율 {movie.advanceRate}%</Rate>
        </ContentsBody>
        <ContentsFooter>
          <BtnImg src={movieData.ticketingBtn} />
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
    )
  );
}

export default MovieCard;

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

const HeartBtnImg = styled.img`
  margin-left: 0.9rem;
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

const AgeImg = styled.img`
  height: 2.4rem;
  width: 2.4rem;
`;

const PosterImg = styled.img`
  width: 24.5rem;
  height: 35.2rem;
  margin-top: 2.1rem;
`;
