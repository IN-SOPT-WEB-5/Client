import React from 'react';
import styled from 'styled-components';
import Search from '../../assets/ic_search_gray2.svg';
import Check from '../../assets/movie_icn_checkbox_purple.svg';

function Checkbox() {
  const placeholder = '영화명 검색';
  const number = '165개';

  return (
    <Container>
      <LeftSection className="LeftSection">
        <CheckImg src={Check} />

        <CheckText>현재 상영작만 보기</CheckText>
        <NumText>
          <ColorText>{number}</ColorText>의 영화가 검색되었습니다.
        </NumText>
      </LeftSection>
      <InputBox className="RightSection">
        <Placeholder type="text" placeholder={placeholder} />
        <SearchImg src={Search} />
      </InputBox>
    </Container>
  );
}

export default Checkbox;

const CheckImg = styled.img`
  width: 1.7rem;
  height: 1.7rem;
  margin-right: 0.8rem;
`;

const Placeholder = styled.input`
  font: ${({ theme }) => theme.fonts.body1};
  color: ${({ theme }) => theme.colors.gray1};
`;

const ColorText = styled.span`
  color: ${({ theme }) => theme.colors.main_purple};
`;

const SearchImg = styled.img`
  width: 1.5rem;
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
`;

const CheckText = styled.span`
  font: ${({ theme }) => theme.fonts.body1_bold};
  color: ${({ theme }) => theme.colors.gray1};
  border-right: 0.1rem solid ${({ theme }) => theme.colors.gray5};
  padding-right: 0.8rem;
`;

const NumText = styled.span`
  margin-left: 0.8rem;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3.5rem;
`;

const InputBox = styled.div`
  display: flex;
  justify-content: center;
  width: 23rem;
  height: 3.6rem;
  border: 0.2rem solid ${({ theme }) => theme.colors.gray5}; ;
`;
