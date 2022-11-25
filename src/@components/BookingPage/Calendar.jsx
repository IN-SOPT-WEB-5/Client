import styled from 'styled-components';
import BeforeArrowSrc from '../../assets/BeforeDateArrow.svg';
import AfterArrowSrc from '../../assets/AfterDateArrow.svg';
import { dateArr } from '../../core/bookingPage';

export default function Calendar() {
  return (
    <Root>
      <BeforeDateArrow src={BeforeArrowSrc} alt="이전 날짜" />
      <DateArrWrapper>
        {dateArr.map((date) => {
          return (
            <DateWrapper key={date.date} date={date.date}>
              <Date>{date.date}</Date>
              <Day>{date.day}</Day>
            </DateWrapper>
          );
        })}
      </DateArrWrapper>
      <AfterDateArrow src={AfterArrowSrc} alt="이후 날짜" />
    </Root>
  );
}

const Root = styled.div`
  width: 100%;
  height: 6rem;

  display: flex;
  align-items: center;
`;

const BeforeDateArrow = styled.img`
  margin-right: 1.2rem;
`;

const AfterDateArrow = styled.img`
  margin-left: 1.2rem;
`;

const DateArrWrapper = styled.span`
  display: flex;
  gap: 2.8rem;
`;

const DateWrapper = styled.span`
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

  background-color: ${({ theme, date }) => (date === 6 ? theme.colors.main_purple : '')};
`;

const Date = styled.p`
  ${({ theme }) => theme.fonts.headline3}
`;

const Day = styled.p`
  ${({ theme }) => theme.fonts.body2}
`;
