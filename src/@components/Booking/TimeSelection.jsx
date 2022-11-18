import styled from 'styled-components';
import SpecialType from './SpecialType';
import CalendarSvg from '../../assets/Calendar.svg';

export default function TimeSelection() {
  return (
    <St.Root>
      <St.SectionTitle>
        <h3>시간</h3>
      </St.SectionTitle>
      <SpecialType />
      <St.TimeSelectArea>
        <St.CalendarIcon src={CalendarSvg} alt="달력 아이콘" />
        <St.TimeSelectExplain>
          날짜, 영화, 극장을 선택하시면 <br />
          상영시간표를 비교하여 볼 수 있습니다.
        </St.TimeSelectExplain>
      </St.TimeSelectArea>
    </St.Root>
  );
}

const St = {
  Root: styled.section`
    width: 100%;
    height: 100%;
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

  TimeSelectArea: styled.article`
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,
  CalendarIcon: styled.img``,
  TimeSelectExplain: styled.p`
    ${({ theme }) => theme.fonts.body1};
    color: ${({ theme }) => theme.colors.gray3};
    text-align: center;
  `,
};
