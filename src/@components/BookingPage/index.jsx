import styled from 'styled-components';
import Footer from '../@common/Footer';
import GeneralNav from '../@common/GeneralNav';
import Calendar from './Calendar';
import QuickReserve from './QuickReserve';

export default function BookingPage() {
  return (
    <Root>
      <GeneralNav footprint1="예매" footprint2="빠른 예매" />
      <Blank></Blank>
      <Title>빠른 예매</Title>
      <SubTitleWrapper>
        <SubTitle>날짜</SubTitle>
        <Month>2022 11월</Month>
      </SubTitleWrapper>
      <Calendar />
      <QuickReserve />
      <Footer />
    </Root>
  );
}

const Root = styled.section`
  padding: 0 9rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h1`
  ${({ theme }) => theme.fonts.headline3}
  color: ${({ theme }) => theme.colors.gray1}
`;

const SubTitleWrapper = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  margin-top: 2.8rem;
  margin-bottom: 2.2rem;
`;

const SubTitle = styled.h2`
  ${({ theme }) => theme.fonts.headline3}
  color: ${({ theme }) => theme.colors.main_darken}
`;

const Month = styled.h3`
  ${({ theme }) => theme.fonts.body1}
  color: ${({ theme }) => theme.colors.gray1}
`;

const Blank = styled.div`
  height: 3.6rem;
  width: 128rem;
`;
