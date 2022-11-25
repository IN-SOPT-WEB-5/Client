import styled from 'styled-components';
import React from 'react';
import MovieSelect from './MovieSelect';
import Nav from './Nav';
import GeneralNav from '../@common/GeneralNav';
import Footer from '../@common/Footer';
import { useNavigate } from 'react-router-dom';

function Index() {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <GeneralNav footprint1="영화" footprint2="전체영화" />
      <Nav />
      <MovieSelect />
      <Footer />
    </Wrapper>
  );
}

export default Index;

const Wrapper = styled.div`
  --vh: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Hello = styled.button`
  width: 30rem;
  height: 30rem;
  background-color: red;
`;
