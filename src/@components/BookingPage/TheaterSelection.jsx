import { useState } from 'react';
import styled from 'styled-components';
import { areaArr, seoulAreaArr } from '../../core/bookingPage';

export default function TheaterSelection() {
  const [areaSelect, setAreaSelect] = useState(false);
  const [seoulAreaSelect, setSeoulAreaSelect] = useState([]);

  const toggleareaSelect = () => {
    setAreaSelect((prev) => !prev);
  };

  const toggleSeoulAreaSelect = (seoul) => {
    if (areaSelect) {
      if (seoulAreaSelect.includes(seoul)) {
        const flitered = seoulAreaSelect.filter((el) => el !== seoul);
        setSeoulAreaSelect(flitered);
        console.log(seoulAreaSelect);
      } else {
        setSeoulAreaSelect([...seoulAreaSelect, seoul]);

        console.log(seoulAreaSelect);
      }
    } else return;
  };

  return (
    <St.Root>
      <St.SectionTitle>
        <h3>극장</h3>
      </St.SectionTitle>
      <St.MovieTypeWrapper>
        <St.TheaterAll type="button">전체</St.TheaterAll>
        <St.SpecialTheater type="button" disabled>
          특별관
        </St.SpecialTheater>
      </St.MovieTypeWrapper>
      <St.AreaBox>
        <St.AreaWrapper>
          <St.Area type="button" onClick={toggleareaSelect} areaSelect={areaSelect}>
            서울(19)
          </St.Area>
          {areaArr.map((area) => {
            return (
              <St.Area key={area} type="button">
                {area}
              </St.Area>
            );
          })}
        </St.AreaWrapper>
        <St.SeoulAreaWrapper>
          <St.SeoulArea type="button" onClick={() => toggleSeoulAreaSelect('강남')}>
            강남
          </St.SeoulArea>
          <St.SeoulArea type="button" onClick={() => toggleSeoulAreaSelect('강남대로(씨티)')}>
            강남대로(씨티)
          </St.SeoulArea>
          {seoulAreaArr.map((seoulArea) => {
            return (
              <St.SeoulArea key={seoulArea} type="button">
                {seoulArea}
              </St.SeoulArea>
            );
          })}
        </St.SeoulAreaWrapper>
      </St.AreaBox>
      <St.TheaterSelectWrapper>
        <p>최대 3개의 극장은 선택할 수 있습니다.</p>
      </St.TheaterSelectWrapper>
    </St.Root>
  );
}

const St = {
  Root: styled.section`
    width: 100%;
  `,
  SectionTitle: styled.div`
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
  `,
  MovieTypeWrapper: styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 5.2rem;

    border-left: 0.5px solid ${({ theme }) => theme.colors.gray4};
    border-right: 0.5px solid ${({ theme }) => theme.colors.gray4};
  `,
  TheaterAll: styled.button`
    width: 50%;
    height: 100%;
    cursor: pointer;

    ${({ theme }) => theme.fonts.body1};
    color: ${({ theme }) => theme.colors.gray2};
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray2};
  `,
  SpecialTheater: styled.button`
    width: 50%;
    height: 100%;

    ${({ theme }) => theme.fonts.body1};
    color: ${({ theme }) => theme.colors.gray4};
    border-bottom: 0.5px solid ${({ theme }) => theme.colors.gray4};
  `,
  AreaBox: styled.article`
    width: 100%;
    display: flex;
    border-bottom: 0.5px solid ${({ theme }) => theme.colors.gray4};
    border-left: 0.5px solid ${({ theme }) => theme.colors.gray4};
    border-right: 0.5px solid ${({ theme }) => theme.colors.gray4};
  `,
  AreaWrapper: styled.div`
    width: 50%;
    height: 51rem;
    display: flex;
    flex-direction: column;
  `,
  Area: styled.button`
    width: 100%;
    height: 3.6rem;
    display: flex;
    align-items: center;
    padding-left: 2.4rem;

    ${({ theme }) => theme.fonts.body1};
    color: ${({ theme }) => theme.colors.gray1};

    border: 1px solid ${({ theme, areaSelect }) => (areaSelect ? theme.colors.gray1 : 'none')};
  `,
  SeoulAreaWrapper: styled.div`
    width: 50%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.footer};
    display: flex;
    flex-direction: column;

    border-left: 0.5px solid ${({ theme }) => theme.colors.gray4};
  `,
  SeoulArea: styled.button`
    width: 100%;
    height: 3.6rem;
    display: flex;
    align-items: center;
    padding-left: 2.4rem;

    ${({ theme }) => theme.fonts.body1};
    color: ${({ theme }) => theme.colors.gray1};
    &:focus {
      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors.gray2};
    }
  `,
  TheaterSelectWrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    ${({ theme }) => theme.fonts.body2}
    color: ${({ theme }) => theme.colors.gray3};
    height: 14.5rem;

    border-left: 0.5px solid ${({ theme }) => theme.colors.gray4};
    border-right: 0.5px solid ${({ theme }) => theme.colors.gray4};
  `,
};
