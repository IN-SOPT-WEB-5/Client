import styled from 'styled-components';
import MovieSelection from './MovieSelection';
import TheaterSelection from './TheaterSelection';
import TimeSelection from './TimeSelection';

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
