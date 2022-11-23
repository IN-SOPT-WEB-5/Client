import AgeLimit12 from '../assets/AgeLimit12.png';
import AgeLimit15 from '../assets/AgeLimit15.png';
import AgeLimit18 from '../assets/AgeLimit18.png';

import MorningTheaterSvg from '../assets/MorningTheater.svg';
import BrunchTheaterSvg from '../assets/BrunchTheater.svg';
import NightTheaterSvg from '../assets/NightTheater.svg';
import SpecialTheaterSvg from '../assets/SpecialTheater.svg';

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

export const areaArr = ['경기(30)', '인천(5)', '대전/충청/세종(15)', '부상/대구/경상(22)', '광주/전라(9)', '강원(5)'];

export const seoulAreaArr = [
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

export const screenTimeArr = [
  {
    강남: [
      {
        timeTypeIcon: MorningTheaterSvg,
        timeTypeName: '조조',
        start: '10:00',
        finish: '12:51',
        currentNum: 109,
        totalNum: 113,
        specialIcon: SpecialTheaterSvg,
      },
      {
        timeTypeIcon: MorningTheaterSvg,
        timeTypeName: '조조',
        start: '10:30',
        finish: '13:21',
        currentNum: 209,
        totalNum: 232,
      },
      { start: '11:00', finish: '13:41', currentNum: 103, totalNum: 203, specialIcon: SpecialTheaterSvg },
      { start: '13:15', finish: '16:06', currentNum: 99, totalNum: 103 },
      { start: '14:15', finish: '17:06', currentNum: 101, totalNum: 120, specialIcon: SpecialTheaterSvg },
      { start: '15:45', finish: '18:36', currentNum: 82, totalNum: 113 },
      { start: '17:20', finish: '20:11', currentNum: 100, totalNum: 103 },
      { start: '21:15', finish: '00:51', currentNum: 114, totalNum: 120 },
    ],
    '강남대로(씨티)': [
      {
        timeTypeIcon: MorningTheaterSvg,
        timeTypeName: '조조',
        start: '10:15',
        finish: '13:06',
        currentNum: 149,
        totalNum: 200,
      },
      {
        timeTypeIcon: BrunchTheaterSvg,
        timeTypeName: '브런치',
        start: '12:15',
        finish: '15:06',
        currentNum: 115,
        totalNum: 240,
        specialIcon: SpecialTheaterSvg,
      },
      { start: '15:25', finish: '18:16', currentNum: 99, totalNum: 230 },
      { start: '18:40', finish: '21:31', currentNum: 113, totalNum: 180 },
      { start: '19:00', finish: '21:51', currentNum: 159, totalNum: 240, specialIcon: SpecialTheaterSvg },
      { start: '21:05', finish: '00:41', currentNum: 189, totalNum: 200, specialIcon: SpecialTheaterSvg },
    ],
  },
];
