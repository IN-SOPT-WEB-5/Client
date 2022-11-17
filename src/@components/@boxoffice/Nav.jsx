import React from 'react';
import styled from 'styled-components';

function Nav() {
  return (
    <div>
      <NavTitle>전체영화</NavTitle>
      <NavBtn>
        <ChangeBtn1>박스오피스</ChangeBtn1>
        <ChangeBtn2>상영예정작</ChangeBtn2>
        <ChangeBtn3>특별상영</ChangeBtn3>
        <ChangeBtn4>필름소사이어티</ChangeBtn4>
        <ChangeBtn5>클래식소사이어티</ChangeBtn5>
      </NavBtn>
    </div>
  );
}

const NavTitle = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 46px;
`;

const NavBtn = styled.button`
  border: 1px solid #a7a7a7;
  margin: 0%;
  /* width: 1110px; */
  height: 39px;
  text-align: left;
`;

const ChangeBtn1 = styled.button`
  font-size: 15px;
  margin: 0.8rem 77px 8px 76px;

  /* &:hover {
    border: 1px solid #f15a22;
  } */
`;

const ChangeBtn2 = styled.button`
  font-size: 15px;
  margin: 8px 159px 8px 77px;

  /* &:hover {
    border: 1px solid #f15a22;
  } */
`;

const ChangeBtn3 = styled.button`
  font-size: 15px;
  margin: 8px 146px 8px 0px;

  /* &:hover {
    border: 1px solid #f15a22;
  } */
`;

const ChangeBtn4 = styled.button`
  font-size: 15px;
  margin: 8px 153px 8px 0px;

  /* &:hover {
    border: 1px solid #f15a22;
  } */
`;

const ChangeBtn5 = styled.button`
  font-size: 15px;
  margin: 8px 120px 8px 0px;

  /* &:hover {
    border: 1px solid #f15a22;
  } */
`;

export default Nav;
