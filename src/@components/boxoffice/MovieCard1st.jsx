import React from 'react';
// import Poster from '../../assets/ImgPoster.png';
// import Age from '../../assets/Age.svg';
// import TicketingBtn from '../../assets/TicketingBtnS.svg';
// import CinemaBtn from '../../assets/CinemaBtn.svg';
// import HeartBtn from '../../assets/HeartBtn.svg';
import styled from 'styled-components';

function MovieCard1st({ movieData }) {
  // const title = '극장판 짱구는 못말려:···';
  // const OpeningDate = '2022.09.28';
  // const TicketingRate = '0.9';

  return (
    <div>
      <div>
        <PosterImg src={movieData.image} />
      </div>
      <ContentsHead>
        <AgeImg src={movieData.ageImage} />
        <Title>{movieData.title}</Title>
      </ContentsHead>
      <ContentsBody>
        <Date>개봉일 {movieData.openingDate}</Date>
        <Rate>예매율 {movieData.ticketingRate} %</Rate>
      </ContentsBody>
      <ContentsFooter>
        <BtnImg src={movieData.ticketingBtn} />
        <CinemaBtnImg src={movieData.CinemaBtn} />
        <HeartBtnImg src={movieData.HeartBtn} />
      </ContentsFooter>
    </div>
  );
}

export default MovieCard1st;

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
  width: 23.5rem;
  height: 35.2rem;
  margin-top: 2.1rem;
`;
