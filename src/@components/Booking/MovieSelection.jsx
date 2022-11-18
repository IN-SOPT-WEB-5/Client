import styled from 'styled-components';

import AgeLimit12 from '../../assets/AgeLimit12.png';
import AgeLimit15 from '../../assets/AgeLimit15.png';
import AgeLimit18 from '../../assets/AgeLimit18.png';

const movieArr = [
  { ageLimit: AgeLimit12, title: '블랙 팬서: 와칸다 포에버' },
  { ageLimit: AgeLimit12, title: '동감' },
  { ageLimit: AgeLimit12, title: '데시벨' },
  { ageLimit: AgeLimit18, title: '살인청부업자' },
  { ageLimit: AgeLimit15, title: '올빼미' },
  { ageLimit: AgeLimit15, title: '자백' },
  { ageLimit: AgeLimit15, title: '에브리씽 에브리웨어 올 앳 원스' },
  { ageLimit: AgeLimit12, title: '인생은 아름다워' },
  { ageLimit: AgeLimit15, title: '리멤버' },
  { ageLimit: AgeLimit15, title: '프로페어' },
  { ageLimit: AgeLimit12, title: '블랙 아담' },
];

/* 1. 블랙 팬서만 클릭 가능 2. 클릭 시 태그 생성 */
export default function MovieSelection() {
  return (
    <St.Root>
      <St.SectionTitle>영화</St.SectionTitle>
      <St.MovieTypeWrapper>
        <St.MovieAll type="button">전체</St.MovieAll>
        <St.Curation typr="button" disabled>
          큐레이션
        </St.Curation>
      </St.MovieTypeWrapper>
      <St.MovieBox>
        <St.OrderWrapper>
          <St.MovieOrder>예매수</St.MovieOrder>
          <St.Dropdown src="" alt="정렬기준" />
        </St.OrderWrapper>
        {movieArr.map((movie) => {
          return (
            <St.MovieWrapper key={movie.title}>
              <St.AgeLimit src={movie.ageLimit} alt="나이 제한" />
              <St.MovieTitle>{movie.title}</St.MovieTitle>
            </St.MovieWrapper>
          );
        })}
      </St.MovieBox>
      <St.MovieSelectWrapper></St.MovieSelectWrapper>
    </St.Root>
  );
}

const St = {
  Root: styled.section`
    width: 100%;
  `,
  SectionTitle: styled.h3``,
  MovieTypeWrapper: styled.nav``,
  MovieAll: styled.p``,
  Curation: styled.p``,
  MovieBox: styled.article``,
  OrderWrapper: styled.div``,
  MovieOrder: styled.p``,
  Dropdown: styled.img``,
  MovieWrapper: styled.div``,
  AgeLimit: styled.img``,
  MovieTitle: styled.p``,
  MovieSelectWrapper: styled.div``,
};
