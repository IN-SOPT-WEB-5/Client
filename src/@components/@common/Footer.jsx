import React from 'react';
import styled from 'styled-components';
import footer from '../../assets/footer/footer.png';

function Footer() {
  return <Wrapper src={footer}></Wrapper>;
}

export default Footer;

const Wrapper = styled.img`
  width: 128rem;
  height: 20rem;
`;
