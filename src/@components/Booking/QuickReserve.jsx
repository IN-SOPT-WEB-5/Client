import styled from 'styled-components';
import MovieSelection from './MovieSelection';
import TheaterSelection from './TheaterSelection';
import TimeSelection from './TimeSelection';

const movieArr = [
  { ageLimit: 12, title: '블랙 팬서: 와칸다 포에버' },
  { ageLimit: 12, title: '동감' },
  { ageLimit: 12, title: '데시벨' },
  { ageLimit: 18, title: '살인청부업자' },
  { ageLimit: 15, title: '올빼미' },
  { ageLimit: 15, title: '자백' },
  { ageLimit: 15, title: '에브리씽 에브리웨어 올 앳 원스' },
  { ageLimit: 12, title: '인생은 아름다워' },
  { ageLimit: 15, title: '리멤버' },
  { ageLimit: 15, title: '프로페어' },
  { ageLimit: 12, title: '블랙 아담' },
];

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
      {/* 1. 블랙 팬서만 클릭 가능 2. 클릭 시 태그 생성 */}
      <MovieSelection />
      {/* 1. 서울(강남, 강남대로)만 클릭 가능 2. 클릭 시 태그 생성 */}
      <TheaterSelection />
      {/* 1. theater에 따라 시간 보이게 하기* */}
      <TimeSelection />
    </St.Root>
  );
}

const St = {
  Root: styled.article``,
};
