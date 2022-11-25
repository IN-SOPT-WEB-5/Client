import styled from 'styled-components';
import wacanda from '../../../assets/wacandaImg.png';
import likeIcon from '../../../assets/likeIcon.svg';
import mxIcon from '../../../assets/mxIcon.svg';
import dolbyIcon from '../../../assets/dolbyIcon.svg';
import starIcon from '../../../assets/starIcon.svg';
import { movieInfos } from '../../../core/movieInfos';
import api from '../../../core/api/api';
import { useEffect, useState } from 'react';
import axios from 'axios';

const InfoContainer = styled.article`
  width: 24.5rem;

  background-color: ${({ theme }) => theme.colors.gray1};
  color: ${({ theme }) => theme.colors.white};

  margin: 0 2rem;
`;

const MoviePoster = styled.img`
  height: 35.2rem;
  width: 100%;

  margin-bottom: 1.7rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TicketingBtn = styled.button`
  height: 3.6rem;
  width: 20rem;

  background-color: ${({ theme }) => theme.colors.main_purple};
  color: ${({ theme }) => theme.colors.white};

  border-radius: 0.3rem;
`;

const LikeBtn = styled.img`
  height: 4.8rem;
  width: 4.8rem;
`;

const DivisionBar = styled.span`
  height: 1.4rem;
  width: 0.1rem;

  background-color: ${({ theme }) => theme.colors.gray4};
`;

const InfoBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  padding-bottom: 0.6rem;
`;

const InfoIcon = styled.img``;

const Dday = styled.strong`
  color: ${({ theme }) => theme.colors.sub_mint};
  font: ${({ theme }) => theme.fonts.body2};
`;

const StarBox = styled.div`
  display: flex;
  align-items: center;
`;

const StarImg = styled.img`
  margin-right: 1rem;
  padding-bottom: 0.4rem;
`;

const StarScore = styled.strong`
  font: ${({ theme }) => theme.fonts.body2};
  color: ${({ theme }) => theme.colors.white};
`;

const TicketingPercent = styled.strong`
  font: ${({ theme }) => theme.fonts.body2};
`;

export default function MovieInfo() {
  const [movieData, setMovieData] = useState([]);
  async function getdata() {
    const response = await api.getData('/rank');
    setMovieData(response);
    console.log(response);
  }
  useEffect(() => {
    getdata();
  }, []);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const response = await axios.get(`http://107.21.205.44:3000/rank`);
        setMovieData(response.data.data);
        console.log(response.data.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchMovieData();
  }, []);

  return (
    movieData &&
    movieData.map((item, index) => (
      <InfoContainer key={index}>
        <MoviePoster src={item.image} alt="movie-poster"></MoviePoster>
        <ButtonWrapper>
          <TicketingBtn>예매</TicketingBtn>
          <LikeBtn src={likeIcon} alt="like-icon" />
        </ButtonWrapper>
        {item.rank === 1 ? (
          <InfoBox>
            <Dday>D-6</Dday>
            <DivisionBar />
            <TicketingPercent>예매율 {item.advanceRate}%</TicketingPercent>
            <DivisionBar />
            <InfoIcon src={mxIcon} alt="info-icon" />
            <DivisionBar />
            <InfoIcon src={dolbyIcon} alt="info-icon" />
          </InfoBox>
        ) : (
          <InfoBox>
            <StarBox>
              <StarImg src={starIcon} />
              <StarScore>{item.movieRating}</StarScore>
            </StarBox>
            <DivisionBar />
            <TicketingPercent>예매율 {item.advanceRate} %</TicketingPercent>
            <DivisionBar />
            <InfoIcon src={mxIcon} alt="info-icon" />
          </InfoBox>
        )}
      </InfoContainer>
    ))
  );
}
