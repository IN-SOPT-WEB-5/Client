import styled from 'styled-components';
import React from 'react';
import MovieSelect from './MovieSelect';
import Nav from './Nav';
import GeneralNav from '../@common/GeneralNav';
import Footer from '../@common/Footer';

function Index() {
  return (
    <Wrapper>
      <GeneralNav />
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
