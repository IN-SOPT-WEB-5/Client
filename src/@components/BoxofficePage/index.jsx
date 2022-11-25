import React from 'react';
import MovieSelect from './MovieSelect';
import Nav from './Nav';
import styled from 'styled-components';
import GeneralNav from '../@common/GeneralNav';

function Index() {
  return (
    <Wrapper>
      <GeneralNav />
      <Nav />
      <MovieSelect />
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
