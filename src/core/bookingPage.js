import AgeLimit12 from '../../assets/AgeLimit12.png';
import AgeLimit15 from '../../assets/AgeLimit15.png';
import AgeLimit18 from '../../assets/AgeLimit18.png';

import MorningTheaterSvg from '../../assets/MorningTheater.svg';
import BrunchTheaterSvg from '../../assets/BrunchTheater.svg';
import NightTheaterSvg from '../../assets/NightTheater.svg';

export const dateArr = [
  { date: 6, day: '오늘' },
  { date: 7, day: '월' },
  { date: 8, day: '화' },
  { date: 9, day: '수' },
  { date: 10, day: '목' },
  { date: 11, day: '금' },
  { date: 12, day: '토' },
  { date: 13, day: '일' },
  { date: 14, day: '월' },
  { date: 15, day: '화' },
  { date: 16, day: '수' },
  { date: 17, day: '목' },
];

export const movieArr = [
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

export const timeTypeArr = [
  { icon: MorningTheaterSvg, name: '조조' },
  { icon: BrunchTheaterSvg, name: '브런치' },
  { icon: NightTheaterSvg, name: '심야' },
];

export const areaArr = [
  '서울(19)',
  '경기(30)',
  '인천(5)',
  '대전/충청/세종(15)',
  '부상/대구/경상(22)',
  '광주/전라(9)',
  '강원(5)',
];

export const seoulAreaArr = [
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
