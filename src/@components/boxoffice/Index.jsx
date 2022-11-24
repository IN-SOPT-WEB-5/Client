import React from 'react';
import MovieSelect from './MovieSelect';
import Nav from './Nav';
import Header from '../@common/Header';
import styled from 'styled-components';

function Index() {
  return (
    <Wrapper>
      <Header />
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
