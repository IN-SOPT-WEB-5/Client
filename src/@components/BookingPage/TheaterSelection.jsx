import { useState } from 'react';
import styled from 'styled-components';
import { areaArr, seoulAreaArr } from '../../core/bookingPage';
import TagDeleteIcon from '../../assets/TagDelete.svg';

export default function TheaterSelection(props) {
  const { movieSelect, seoulAreaSelect, setSeoulAreaSelect } = props;
  const [areaSelect, setAreaSelect] = useState(false);

  function toggleareaSelect() {
    if (movieSelect) setAreaSelect((prev) => !prev);
  }

  function toggleSeoulAreaSelect(seoul) {
    if (areaSelect) {
      if (seoulAreaSelect.includes(seoul)) {
        const flitered = seoulAreaSelect.filter((el) => el !== seoul);
        setSeoulAreaSelect(flitered);
      } else {
        setSeoulAreaSelect([...seoulAreaSelect, seoul]);
      }
    } else return;
  }

  return (
    <Root>
      <SectionTitle>
        <h3>극장</h3>
      </SectionTitle>
      <MovieTypeWrapper>
        <TheaterAll type="button">전체</TheaterAll>
        <SpecialTheater type="button" disabled>
          특별관
        </SpecialTheater>
      </MovieTypeWrapper>
      <AreaBox>
        <AreaWrapper>
          <Area type="button" onClick={toggleareaSelect} areaSelect={areaSelect}>
            서울(19)
          </Area>
          {areaArr.map((area) => {
            return (
              <Area key={area} type="button">
                {area}
              </Area>
            );
          })}
        </AreaWrapper>
        <SeoulAreaWrapper>
          <SeoulArea
            type="button"
            onClick={() => toggleSeoulAreaSelect('강남')}
            seoulAreaSelect={seoulAreaSelect.includes('강남')}>
            강남
          </SeoulArea>
          <SeoulArea
            type="button"
            onClick={() => toggleSeoulAreaSelect('강남대로(씨티)')}
            seoulAreaSelect={seoulAreaSelect.includes('강남대로(씨티)')}>
            강남대로(씨티)
          </SeoulArea>
          {seoulAreaArr.map((seoulArea) => {
            return (
              <SeoulArea key={seoulArea} type="button">
                {seoulArea}
              </SeoulArea>
            );
          })}
        </SeoulAreaWrapper>
      </AreaBox>
      <TheaterSelectWrapper seoulAreaSelect={seoulAreaSelect.length}>
        {seoulAreaSelect.length ? (
          seoulAreaSelect.map((seoul, idx) => {
            return (
              <SelectSeoulAreaTagWrapper key={idx}>
                <p>{seoul}</p>
                <img src={TagDeleteIcon} alt="태그 삭제" />
              </SelectSeoulAreaTagWrapper>
            );
          })
        ) : (
          <p>최대 3개의 극장을 선택할 수 있습니다.</p>
        )}
      </TheaterSelectWrapper>
    </Root>
  );
}

const Root = styled.section`
  width: 100%;
`;

const SectionTitle = styled.div`
  ${({ theme }) => theme.fonts.headline3};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.main_darken};
  height: 5.8rem;
  z-index: 3;

  display: flex;
  align-items: center;
  justify-content: center;
  border-left: 1px solid ${({ theme }) => theme.colors.main_darken};
  border-right: 1px solid ${({ theme }) => theme.colors.main_darken};
`;

const MovieTypeWrapper = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5.2rem;

  border-left: 0.5px solid ${({ theme }) => theme.colors.gray4};
  border-right: 0.5px solid ${({ theme }) => theme.colors.gray4};
`;

const TheaterAll = styled.button`
  width: 50%;
  height: 100%;
  cursor: pointer;

  ${({ theme }) => theme.fonts.body1};
  color: ${({ theme }) => theme.colors.gray2};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray2};
`;

const SpecialTheater = styled.button`
  width: 50%;
  height: 100%;

  ${({ theme }) => theme.fonts.body1};
  color: ${({ theme }) => theme.colors.gray4};
  border-bottom: 0.5px solid ${({ theme }) => theme.colors.gray4};
`;

const AreaBox = styled.article`
  width: 100%;
  display: flex;
  border-bottom: 0.5px solid ${({ theme }) => theme.colors.gray4};
  border-left: 0.5px solid ${({ theme }) => theme.colors.gray4};
  border-right: 0.5px solid ${({ theme }) => theme.colors.gray4};
`;

const AreaWrapper = styled.div`
  width: 50%;
  height: 51rem;
  display: flex;
  flex-direction: column;
`;

const Area = styled.button`
  width: 100%;
  height: 3.6rem;
  display: flex;
  align-items: center;
  padding-left: 2.4rem;

  ${({ theme }) => theme.fonts.body1};
  color: ${({ theme }) => theme.colors.gray1};

  border: 0.1rem solid ${({ theme, areaSelect }) => (areaSelect ? theme.colors.gray1 : 'none')};
`;

const SeoulAreaWrapper = styled.div`
  width: 50%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.footer};
  display: flex;
  flex-direction: column;

  border-left: 0.5px solid ${({ theme }) => theme.colors.gray4};
`;

const SeoulArea = styled.button`
  width: 100%;
  height: 3.6rem;
  display: flex;
  align-items: center;
  padding-left: 2.4rem;

  ${({ theme }) => theme.fonts.body1};
  color: ${({ theme, seoulAreaSelect }) => (seoulAreaSelect ? theme.colors.white : theme.colors.gray1)};
  background-color: ${({ theme, seoulAreaSelect }) => (seoulAreaSelect ? theme.colors.gray2 : '')};
`;

const TheaterSelectWrapper = styled.div`
  display: flex;
  justify-content: ${({ seoulAreaSelect }) => (seoulAreaSelect ? '' : 'center')};
  align-items: ${({ seoulAreaSelect }) => (seoulAreaSelect ? '' : 'center')};

  ${({ theme }) => theme.fonts.body2}
  color: ${({ theme }) => theme.colors.gray3};
  height: 14.5rem;

  border-left: 0.5px solid ${({ theme }) => theme.colors.gray4};
  border-right: 0.5px solid ${({ theme }) => theme.colors.gray4};
  padding: 2rem;
  gap: 1rem;
`;

const SelectSeoulAreaTagWrapper = styled.span`
  display: flex;
  align-items: center;
  padding: 0.7rem 1.2rem;
  border-radius: 3.5rem;
  border: 1px solid ${({ theme }) => theme.colors.gray5};
  gap: 1rem;
  height: 2.8rem;
`;
