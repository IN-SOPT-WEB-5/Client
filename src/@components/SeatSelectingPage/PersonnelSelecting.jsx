import React from 'react';
import styled from 'styled-components';
import MoviePoster from '../../assets/seatSelectingPage/PersonnelSelecting/moviePoster.png';
import MovieAge from '../../assets/seatSelectingPage/PersonnelSelecting/movieAge.svg';
import General from '../../assets/seatSelectingPage/PersonnelSelecting/SeatIcon/General.svg';
import Disabled from '../../assets/seatSelectingPage/PersonnelSelecting/SeatIcon/Disabled.svg';
import Selected from '../../assets/seatSelectingPage/PersonnelSelecting/SeatIcon/Selected.svg';
import Impossible from '../../assets/seatSelectingPage/PersonnelSelecting/SeatIcon/Impossible.svg';
import Sold from '../../assets/seatSelectingPage/PersonnelSelecting/SeatIcon/Sold.svg';
import MinusBtn from '../../assets/seatSelectingPage/PersonnelSelecting/Buttons/MinusButton.svg';
import PlusBtn from '../../assets/seatSelectingPage/PersonnelSelecting/Buttons/PlusButton.svg';

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
            <img src={General}></img>
            <SeatOptionText>일반</SeatOptionText>
          </SeatOption>
          <SeatOption>
            <img src={Disabled}></img>
            <SeatOptionText>장애인</SeatOptionText>
          </SeatOption>
          <SeatOption>
            <img src={Selected}></img>
            <SeatOptionText>선택</SeatOptionText>
          </SeatOption>
          <SeatOption>
            <img src={Impossible}></img>
            <SeatOptionText>선택불가</SeatOptionText>
          </SeatOption>
          <SeatOption>
            <img src={Sold}></img>
            <SeatOptionText>예매완료</SeatOptionText>
          </SeatOption>
        </SeatOptions>
        <PersonnelAdd>
          <SelectionButton>
            <SelectionText>성인</SelectionText>
            <MinusButton></MinusButton>
            <ButtonText>0</ButtonText>
            <PlusButton></PlusButton>
          </SelectionButton>
          <SelectionButton>
            <SelectionText>청소년</SelectionText>
            <MinusButton></MinusButton>
            <ButtonText>0</ButtonText>
            <PlusButton></PlusButton>
          </SelectionButton>
          <SelectionButton>
            <SelectionText>우대</SelectionText>
            <MinusButton></MinusButton>
            <ButtonText>0</ButtonText>
            <PlusButton></PlusButton>
          </SelectionButton>
        </PersonnelAdd>
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
  border: 1px solid ${({ theme }) => theme.colors.gray5};
  margin-top: 1.6rem;
`;

const SeatOptions = styled.div`
  width: 12rem;
  height: 24.8rem;
  background-color: ${({ theme }) => theme.colors.footer};
  padding-top: 3.2rem;
  padding-left: 1.6rem;
  padding-bottom: 3.2rem;
  padding-bottom: 1.6rem;
`;

const SeatOption = styled.div`
  width: 9.6rem;
  height: 2.4rem;
  font: ${({ theme }) => theme.fonts.body1};
  color: ${({ theme }) => theme.colors.gray1};
  margin-bottom: 1.6rem;
  display: flex;
  align-items: center;
`;

const SeatOptionText = styled.p`
  margin-top: 0.3rem;
  margin-left: 0.8rem;
`;

const PersonnelAdd = styled.div`
  width: 19.6rem;
  height: 24.8rem;
  padding-top: 5.2rem;
  padding-left: 1.5rem;
`;

const MinusButton = styled.button`
  background-image: url(${MinusBtn});
  width: 3.2rem;
  height: 3.2rem;
`;

const PlusButton = styled.button`
  background-image: url(${PlusBtn});
  width: 3.2rem;
  height: 3.2rem;
`;

const SelectionButton = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2.4rem;
`;

const ButtonText = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.gray5};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray5};
  font: ${({ theme }) => theme.fonts.body1};
  color: ${({ theme }) => theme.colors.gray1};
  width: 4rem;
  height: 3.2rem;
  padding: 0.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 0.65rem; // 글자랑 버튼 수평 안맞아서 일단 0.65 줬음
`;

const SelectionText = styled.p`
  width: 4.8rem;
  margin-right: 0.4rem;
  font: ${({ theme }) => theme.fonts.body1};
  color: ${({ theme }) => theme.colors.gray1};
  align-items: center;
  padding-top: 0.3rem; // 글자랑 버튼 수평 안맞아서 일단 0.3 줬음
`;
