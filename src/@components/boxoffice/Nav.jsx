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
`;

const NavBtn = styled.button`
  /* border: 1px solid #a7a7a7; */
  margin: 0%;
  width: 111rem;
  /* height: 39px; */
  text-align: left;
  display: flex;
  justify-content: space-around;
`;

const BoxOfficeBtn = styled.button`
  font-size: 1.5rem;
  /* margin: 0.8rem 7.7rem 0.8rem 7.6rem; */
  width: 22rem;
`;

const UpComingBtn = styled.button`
  font-size: 1.5rem;
  width: 22rem;
  /* margin: 0.8rem 15.9rem 0.8rem 7.7rem; */
`;

const SpecialFilmBtn = styled.button`
  font-size: 1.5rem;
  width: 22rem;
  /* margin: 0.8rem 14.6rem 0.8rem 0; */
`;

const FilmSocietyBtn = styled.button`
  font-size: 1.5rem;
  width: 22rem;
  /* margin: 0.8rem 15.3rem 0.8rem 0; */
`;

const ClassicSocietyBtn = styled.button`
  font-size: 15px;
  width: 22rem;
  /* margin: 0.8rem 12rem 0.8rem 0; */
`;
