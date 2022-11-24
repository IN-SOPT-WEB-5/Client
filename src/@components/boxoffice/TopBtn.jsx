import React from 'react';
import styled from 'styled-components';
import TopButton from '../../assets/btn_top.svg';

function TopBtn() {
  const MoveToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div>
      <TopBtnImg src={TopButton} onClick={MoveToTop} />
    </div>
  );
}

export default TopBtn;

const TopBtnImg = styled.img`
  z-index: 5;
  position: fixed;
  bottom: 0;
  left: 102.8rem;
`;
