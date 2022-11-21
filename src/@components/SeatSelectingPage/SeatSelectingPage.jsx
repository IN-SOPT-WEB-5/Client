import React from 'react';
import PersonnelSelecting from './PersonnelSelecting';
import SeatSelecting from './SeatSelecting';
import GeneralNav from '../@common/GeneralNav';
import styled from 'styled-components';

export default function SeatSelectingPage() {
  return (
    <div>
      <GeneralNav></GeneralNav>
      <Hello>hi</Hello>
      <PersonnelSelecting></PersonnelSelecting>
      <SeatSelecting></SeatSelecting>
    </div>
  );
}

const Hello = styled.div`
  height: 10rem;
  width: 10rem;
  background-color: red;
`;
