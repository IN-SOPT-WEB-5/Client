import React from 'react';
import styled from 'styled-components';
import MoviePoster from '../../assets/seatSelectingPage/PersonnelSelecting/moviePoster.png';
import MovieAge from '../../assets/seatSelectingPage/PersonnelSelecting/movieAge.svg';
import General from '../../assets/seatSelectingPage/PersonnelSelecting/SeatIcon/General.svg';
import Disabled from '../../assets/seatSelectingPage/PersonnelSelecting/SeatIcon/Disabled.svg';
import Selected from '../../assets/seatSelectingPage/PersonnelSelecting/SeatIcon/Selected.svg';
import Impossible from '../../assets/seatSelectingPage/PersonnelSelecting/SeatIcon/Impossible.svg';
import Sold from '../../assets/seatSelectingPage/PersonnelSelecting/SeatIcon/Sold.svg';

export default function PersonnelSelecting() {
  return (
    <div>
      <PersonnelSelect>1. 관람인원 선택</PersonnelSelect>
      <MovieInfo>
        <MovieOption>2D, 자막</MovieOption>
        <MovieTitle>
          <img src={MovieAge} style={{ marginRight: '0.6rem', height: '2rem' }}></img>블랙 팬서: 와칸다 포에버
        </MovieTitle>
      </MovieInfo>
      <MovieTimePlace>
        <MovieTime>
          <Bolded>관람일시</Bolded>
          2022. 11. 06 (수) 17:20~20:11
        </MovieTime>
        <MoviePlace>
          <Bolded>관람장소</Bolded>
          강남 4관 (11층 4관)
        </MoviePlace>
      </MovieTimePlace>
      <PersonnelWrapper>
        <SeatOptions>
          <SeatOption>
            <img src={General}></img>일반
          </SeatOption>
          <SeatOption>
            <img src={Disabled}></img>장애인
          </SeatOption>
          <SeatOption>
            <img src={Selected}></img>선택
          </SeatOption>
          <SeatOption>
            <img src={Impossible}></img>선택불가
          </SeatOption>
          <SeatOption>
            <img src={Sold}></img>예매완료
          </SeatOption>
        </SeatOptions>
      </PersonnelWrapper>
    </div>
  );
}

const PersonnelSelect = styled.div`
  margin: 0rem 17.6rem 1.6rem 0.6rem;
  color: ${({ theme }) => theme.colors.gray1};
  font: ${({ theme }) => theme.fonts.headline3};
  height: 2.2rem;
  width: 13.4rem;
`;

const MovieInfo = styled.div`
  width: 31.6rem;
  height: 20rem;
  background-image: url(${MoviePoster});
`;

const MovieOption = styled.div`
  color: ${({ theme }) => theme.colors.white};
  font: ${({ theme }) => theme.fonts.body1};
  position: relative;
  top: 2.2rem;
  left: 2rem;
  width: 8rem;
  height: 2.4rem;
  font-size: 1.5rem;
`;

const MovieTitle = styled.div`
  color: ${({ theme }) => theme.colors.white};
  font: ${({ theme }) => theme.fonts.headline3};
  display: flex;
  position: relative;
  top: 12.7rem;
  left: 2rem;
  //height: 2.4rem;
`;

const MovieTimePlace = styled.div`
  border: solid 1px #aaa;
  padding-left: 2rem;
  padding-top: 2.4rem;
  padding-bottom: 2.4rem;
  font-size: 1.5rem; // global style theme.js 에서 body1 font size 잘못된 듯!
`;

const MovieTime = styled.div`
  font: ${({ theme }) => theme.fonts.body1};
  color: ${({ theme }) => theme.colors.gray1};
  font-size: 1.5rem;
  width: 28rem;
  line-height: 2.3rem;
  margin-bottom: 0.8rem;
  height: 2.3rem;
`;

const MoviePlace = styled.div`
  font: ${({ theme }) => theme.fonts.body1};
  color: ${({ theme }) => theme.colors.gray1};
  font-size: 1.5rem;
  width: 28rem;
  height: 2.3rem;
`;

const Bolded = styled.span`
  color: ${({ theme }) => theme.colors.gray1};
  font: ${({ theme }) => theme.fonts.body1_bold};
  margin-right: 1.6rem;
  width: 5.6rem;
  height: 2.3rem;
`;

const PersonnelWrapper = styled.div`
  display: flex;
`;

const SeatOptions = styled.div`
  width: 12rem;
  height: 24.8rem;
  background-color: ${({ theme }) => theme.colors.footer};
  margin-top: 1.6rem;
  padding-top: 3.2rem;
  padding-left: 1.6rem;
  padding-bottom: 3.2rem;
`;

const SeatOption = styled.div``;
