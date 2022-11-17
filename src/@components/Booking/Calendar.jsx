import styled from 'styled-components';

import BeforeArrowSrc from '../../assets/BeforeDateArrow.svg';
import AfterArrowSrc from '../../assets/AfterDateArrow.svg';

export default function Calendar() {
  const dateArr = [
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

  return (
    <St.Root>
      <St.BeforeDateArrow src={BeforeArrowSrc} />
      <St.DateArrWrapper>
        {dateArr.map((date) => {
          return (
            <St.DateWrapper key={date.date} date={date.date}>
              <St.Date>{date.date}</St.Date>
              <St.Day>{date.day}</St.Day>
            </St.DateWrapper>
          );
        })}
      </St.DateArrWrapper>
      <St.AfterDateArrow src={AfterArrowSrc} />
    </St.Root>
  );
}

const St = {
  Root: styled.div`
    width: 100%;
    height: 6rem;

    display: flex;
    align-items: center;
  `,
  BeforeDateArrow: styled.img`
    margin-right: 1.2rem;
  `,
  AfterDateArrow: styled.img`
    margin-left: 1.2rem;
  `,

  DateArrWrapper: styled.span`
    display: flex;
    gap: 2.8rem;
  `,
  DateWrapper: styled.span`
    width: 6rem;
    height: 6rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.2rem;

    color: ${({ theme, date }) =>
      date === 6
        ? theme.colors.white
        : date >= 7 && date <= 11
        ? theme.colors.gray1
        : date === 12
        ? theme.colors.blue2
        : date === 13
        ? theme.colors.red
        : theme.colors.gray5};
  `,
  Date: styled.p`
    ${({ theme }) => theme.fonts.headline3}
  `,
  Day: styled.p`
    ${({ theme }) => theme.fonts.body2}
  `,
};
