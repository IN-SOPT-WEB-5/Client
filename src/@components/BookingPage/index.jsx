import styled from 'styled-components';
import Footer from '../@common/Footer';
import GeneralNav from '../@common/GeneralNav';
import Header from '../@common/Header';
import Calendar from './Calendar';
import QuickReserve from './QuickReserve';

export default function BookingPage() {
  return (
    <St.Root>
      <GeneralNav />
      <St.Title>빠른 예매</St.Title>
      <St.SubTitleWrapper>
        <St.SubTitle>날짜</St.SubTitle>
        <St.Month>2022 11월</St.Month>
      </St.SubTitleWrapper>
      <Calendar />
      <QuickReserve />
      <Footer />
    </St.Root>
  );
}

const St = {
  Root: styled.section`
    padding: 0 9rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
  `,
  Title: styled.h1`
    ${({ theme }) => theme.fonts.headline3}
    color: ${({ theme }) => theme.colors.gray1}
  `,
  SubTitleWrapper: styled.div`
    display: flex;
    gap: 2rem;
    align-items: center;
    margin-top: 2.8rem;
    margin-bottom: 2.2rem;
  `,
  SubTitle: styled.h2`
    ${({ theme }) => theme.fonts.headline3}
    color: ${({ theme }) => theme.colors.main_darken}
  `,
  Month: styled.h3`
    ${({ theme }) => theme.fonts.body1}
    color: ${({ theme }) => theme.colors.gray1}
  `,
};
