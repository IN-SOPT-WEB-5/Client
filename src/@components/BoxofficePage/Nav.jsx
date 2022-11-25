import React from 'react';
import styled from 'styled-components';
import Checkbox from './Checkbox';

function Nav() {
  return (
    <div>
      <NavTitle>전체영화</NavTitle>
      <NavBtn>
        <BoxOfficeBtn>박스오피스</BoxOfficeBtn>
        <UpComingBtn>상영예정작</UpComingBtn>
        <SpecialFilmBtn>특별상영</SpecialFilmBtn>
        <FilmSocietyBtn>필름소사이어티</FilmSocietyBtn>
        <ClassicSocietyBtn>클래식소사이어티</ClassicSocietyBtn>
      </NavBtn>
      <Checkbox />
    </div>
  );
}

export default Nav;

const NavTitle = styled.p`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 4.6rem;

  margin-top: 3.6rem;
`;

const NavBtn = styled.button`
  margin: 0%;
  width: 111rem;
  height: 3.9rem;
  text-align: left;
  display: flex;
  justify-content: space-around;

  border-bottom: solid 0.1rem ${({ theme }) => theme.colors.gray1};
`;

const BoxOfficeBtn = styled.div`
  font-size: 1.5rem;
  width: 22rem;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 0.1rem ${({ theme }) => theme.colors.gray1};
  border-bottom: none;
`;

const UpComingBtn = styled.div`
  font-size: 1.5rem;
  width: 22rem;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const SpecialFilmBtn = styled.div`
  font-size: 1.5rem;
  width: 22rem;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const FilmSocietyBtn = styled.div`
  font-size: 1.5rem;
  width: 22rem;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const ClassicSocietyBtn = styled.button`
  font-size: 15px;
  width: 22rem;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;
