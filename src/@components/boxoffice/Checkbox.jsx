import React from 'react';
import styled from 'styled-components';
import Search from '../../assets/ic_search_gray2.svg';

function Checkbox() {
  const placeholder = '영화명 검색';

  return (
    <Container>
      <LeftSection className="LeftSection">
        <CheckInput type="checkbox" />
        <CheckText>현재 상영작만 보기</CheckText>
        <NumText>167개의 영화가 검색되었습니다.</NumText>
      </LeftSection>
      <InputBox className="RightSection">
        <input type="text" placeholder={placeholder} />
        <SearchImg src={Search} />
      </InputBox>
    </Container>
  );
}

export default Checkbox;

const SearchImg = styled.img`
  width: 1.6rem;
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
`;

const CheckText = styled.span`
  border-right: 1px solid black;
  padding-right: 0.8rem;
`;

const NumText = styled.span`
  margin-left: 0.8rem;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 39px;
  margin-top: 3.5rem;
`;

const CheckInput = styled.input`
  width: 1.7rem;
  height: 1.7rem;
  border: 1px solid black;
`;

const InputBox = styled.div`
  display: flex;
  justify-content: center;
  width: 23rem;
  height: 3.6rem;
  border: 1px solid black;
`;
