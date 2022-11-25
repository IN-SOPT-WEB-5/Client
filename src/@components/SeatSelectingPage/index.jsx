import React from 'react';
import PersonnelSelecting from './PersonnelSelecting';
import GeneralNav from '../@common/GeneralNav';
import styled from 'styled-components';
import Footer from '../@common/Footer';

export default function SeatSelectingPage() {
  return (
    <>
      <GeneralNav footprint1="예매" footprint2="빠른 예매"></GeneralNav>
      <WrapperWrapper>
        <Wrapper>
          <FastTicketing>빠른예매</FastTicketing>
          <PersonnelSelecting></PersonnelSelecting>
        </Wrapper>
        <Footer />
      </WrapperWrapper>
    </>
  );
}

const FastTicketing = styled.div`
  margin: 3.6rem 111.2rem 2.8rem 9.6rem;
  color: ${({ theme }) => theme.colors.gray1};
  font: ${({ theme }) => theme.fonts.headline3};
  height: 2.2rem;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background-color: #fff;
  width: 128rem;
`;

const WrapperWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;
//
