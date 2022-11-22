import { useState } from 'react';
import styled from 'styled-components';

import DropDownSvg from '../../assets/OrderDropDown.svg';
import { movieArr } from '../../core/bookingPage';
import AgeLimit12 from '../../assets/AgeLimit12.png';
import TagDeleteIcon from '../../assets/TagDelete.svg';

/* 1. 블랙 팬서만 클릭 가능 2. 클릭 시 태그 생성 */
export default function MovieSelection() {
  const [movieSelect, setMovieSelect] = useState(false);
  const toggleMovieSelect = () => {
    setMovieSelect((prev) => !prev);
  };

  return (
    <St.Root>
      <St.SectionTitle>
        <h3>영화</h3>
      </St.SectionTitle>
      <St.MovieTypeWrapper>
        <St.MovieAll type="button">전체</St.MovieAll>
        <St.Curation type="button" disabled>
          큐레이션
        </St.Curation>
      </St.MovieTypeWrapper>
      <St.MovieBox>
        <St.OrderWrapper>
          <St.MovieOrder>예매수</St.MovieOrder>
          <St.Dropdown src={DropDownSvg} alt="정렬기준" />
        </St.OrderWrapper>
        <St.MovieWrapper type="button" onClick={toggleMovieSelect} movieSelect={movieSelect}>
          <St.AgeLimit src={AgeLimit12} alt="나이 제한" />
          <St.MovieTitle>블랙 팬서: 와칸다 포에버</St.MovieTitle>
        </St.MovieWrapper>
        {movieArr.map((movie) => {
          return (
            <St.MovieWrapper key={movie.title} type="button">
              <St.AgeLimit src={movie.ageLimit} alt="나이 제한" />
              <St.MovieTitle>{movie.title}</St.MovieTitle>
            </St.MovieWrapper>
          );
        })}
      </St.MovieBox>
      <St.SelectMovieWrapper movieSelect={movieSelect}>
        {movieSelect ? (
          <St.SelectMovieTagWrapper>
            <St.SelectMovieTag>블랙 팬서: 와칸다 포에버</St.SelectMovieTag>
            <img src={TagDeleteIcon} alt="태그 삭제" />
          </St.SelectMovieTagWrapper>
        ) : (
          <p>최대 3개의 영화를 선택할 수 있습니다.</p>
        )}
      </St.SelectMovieWrapper>
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
    border-right: 1px solid ${({ theme }) => theme.colors.main_darken};
  `,
  MovieTypeWrapper: styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 5.2rem;
  `,
  MovieAll: styled.button`
    width: 50%;
    height: 100%;
    cursor: pointer;

    ${({ theme }) => theme.fonts.body1};
    color: ${({ theme }) => theme.colors.gray2};
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray2};
  `,
  Curation: styled.button`
    width: 50%;
    height: 100%;

    ${({ theme }) => theme.fonts.body1};
    color: ${({ theme }) => theme.colors.gray4};
    border-bottom: 0.5px solid ${({ theme }) => theme.colors.gray4};
  `,
  MovieBox: styled.article`
    background-color: ${({ theme }) => theme.colors.footer};
    border-bottom: 0.5px solid ${({ theme }) => theme.colors.gray4};
    padding: 0.7rem 0;
  `,
  OrderWrapper: styled.div`
    background-color: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.gray5};
    height: 2.8rem;
    margin: 0.3rem 2.3rem;

    display: flex;
    padding-left: 1.8rem;
    padding-right: 1rem;
    align-items: center;
    justify-content: space-between;
  `,
  MovieOrder: styled.p`
    ${({ theme }) => theme.fonts.body2}
    color: ${({ theme }) => theme.colors.gray3};
  `,
  Dropdown: styled.img``,
  MovieWrapper: styled.button`
    display: flex;
    gap: 1.3rem;
    align-items: center;
    width: 100%;
    height: 4.2rem;
    padding: 0 2.3rem;
    color: ${({ theme, movieSelect }) => (movieSelect ? theme.colors.white : theme.colors.gray1)};
    background-color: ${({ theme, movieSelect }) => (movieSelect ? theme.colors.gray2 : '')};
  `,
  AgeLimit: styled.img`
    width: 2rem;
    height: 2rem;
  `,
  MovieTitle: styled.p`
    ${({ theme }) => theme.fonts.body1};

    display: flex;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `,
  SelectMovieWrapper: styled.div`
    display: flex;
    justify-content: ${({ movieSelect }) => (movieSelect ? '' : 'center')};
    align-items: ${({ movieSelect }) => (movieSelect ? '' : 'center')};

    ${({ theme }) => theme.fonts.body2}
    color: ${({ theme }) => theme.colors.gray3};
    height: 14.5rem;
    padding: 2rem;
  `,
  SelectMovieTagWrapper: styled.span`
    display: flex;
    align-items: center;
    padding: 0.7rem 1.2rem;
    border-radius: 3.5rem;
    border: 1px solid ${({ theme }) => theme.colors.gray5};
    gap: 1rem;
    height: 2.8rem;
  `,
  SelectMovieTag: styled.p``,
};
