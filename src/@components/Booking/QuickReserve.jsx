import styled from 'styled-components';
import MovieSelection from './MovieSelection';
import TheaterSelection from './TheaterSelection';
import TimeSelection from './TimeSelection';

const areaArr = [
  '서울(19)',
  '경기(30)',
  '인천(5)',
  '대전/충청/세종(15)',
  '부상/대구/경상(22)',
  '광주/전라(9)',
  '강원(5)',
];

const seoulAreaArr = [
  '강남',
  '강남대로(씨티)',
  '강동',
  '군자',
  '동대문',
  '마곡',
  '목동',
  '상봉',
  '상암월드컵경기장',
  '성수',
  '센트럴',
  '송파파크하비오',
  '신촌',
  '이수',
];

export default function QuickReserve() {
  return (
    <St.Root>
      <MovieSelection />
      {/* 1. 서울(강남, 강남대로)만 클릭 가능 2. 클릭 시 태그 생성 */}
      <TheaterSelection />
      {/* 1. theater에 따라 시간 보이게 하기* */}
      <TimeSelection />
    </St.Root>
  );
}

const St = {
  Root: styled.article`
    width: 100%;
    display: grid;
    grid-template-columns: 26rem 36rem auto;
    margin-top: 2.4rem;

    border: 0.5px solid ${({ theme }) => theme.colors.gray4};
  `,
};
