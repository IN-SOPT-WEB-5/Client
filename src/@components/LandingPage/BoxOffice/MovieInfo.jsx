import styled from 'styled-components';
import wacanda from '../../../assets/wacandaImg.png';
import likeIcon from '../../../assets/likeIcon.svg';
import mxIcon from '../../../assets/mxIcon.svg';
import dolbyIcon from '../../../assets/dolbyIcon.svg';

const InfoContainer = styled.article`
  width: 24.5rem;

  background-color: ${({ theme }) => theme.colors.gray1};
  color: ${({ theme }) => theme.colors.white};
`;

const MoviePoster = styled.img`
  height: 35.2rem;
  width: 100%;
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

const TicketingPercent = styled.strong`
  font: ${({ theme }) => theme.fonts.body2};
`;

export default function MovieInfo() {
  return (
    <InfoContainer>
      <MoviePoster src={wacanda} alt="movie-poster"></MoviePoster>
      <ButtonWrapper>
        <TicketingBtn>예매</TicketingBtn>
        <LikeBtn src={likeIcon} alt="like-icon" />
      </ButtonWrapper>
      <InfoBox>
        <Dday>D-6</Dday>
        <DivisionBar />
        <TicketingPercent>예매율 28.2%</TicketingPercent>
        <DivisionBar />
        <InfoIcon src={mxIcon} alt="info-icon" />
        <DivisionBar />
        <InfoIcon src={dolbyIcon} alt="info-icon" />
      </InfoBox>
    </InfoContainer>
  );
}
