import styled from 'styled-components';
import SpecialType from './SpecialType';

export default function TimeSelection() {
  return (
    <St.Root>
      <St.SectionTitle>
        <h3>시간</h3>
      </St.SectionTitle>
      <SpecialType />
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
  `,
};
