import React from 'react';
import styled from 'styled-components';
import Checkbox from './Checkbox';

function Nav() {
  return (
    <div>
      <NavTitle>전체영화</NavTitle>
      <NavBtn>
        <ChangeBtn>
          <BoxOfficeBtn>박스오피스</BoxOfficeBtn>
          <UpcomingMovieBtn>상영예정작</UpcomingMovieBtn>
          <SpecialMovieBtn>특별상영</SpecialMovieBtn>
          <FilmSocietyBtn>필름소사이어티</FilmSocietyBtn>
          <ClassicSocietyBtn>클래식소사이어티</ClassicSocietyBtn>
        </ChangeBtn>
        <Checkbox />
      </NavBtn>
    </div>
  );
}
const ChangeBtn = styled.div`
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.main_purple};
`;

const NavTitle = styled.p`
  color: ${({ theme }) => theme.colors.gray1};
  font: ${({ theme }) => theme.fonts.headline3};
  /* margin-bottom: 46px; */
`;

const NavBtn = styled.button`
  margin: 0%;
  text-align: left;
`;

const BoxOfficeBtn = styled.button`
  font: ${({ theme }) => theme.fonts.body1_bold};
  color: ${({ theme }) => theme.colors.main_purple};
  padding: 0.8rem 7.7rem 0.8rem 7.6rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.main_purple};
  border-bottom: none;
`;

const UpcomingMovieBtn = styled.button`
  font: ${({ theme }) => theme.fonts.body1_bold};
  color: ${({ theme }) => theme.colors.gray1};
  margin: 0.8rem 7.6rem 0.8rem 7.7rem;
`;

const SpecialMovieBtn = styled.button`
  font: ${({ theme }) => theme.fonts.body1_bold};
  color: ${({ theme }) => theme.colors.gray1};
  margin: 0.8rem 8.2rem 0.8rem 8.4rem;
`;

const FilmSocietyBtn = styled.button`
  font: ${({ theme }) => theme.fonts.body1_bold};
  color: ${({ theme }) => theme.colors.gray1};
  margin: 5.2rem 6.2rem 0.8rem 6.4rem; //아니 얘는 왜 전체 margin-top이 얘로 인식되는고제??
`;

const ClassicSocietyBtn = styled.button`
  font: ${({ theme }) => theme.fonts.body1_bold};
  color: ${({ theme }) => theme.colors.gray1};
  margin: 0.8rem 5.6rem 0.8rem 5.7rem;
`;

export default Nav;
