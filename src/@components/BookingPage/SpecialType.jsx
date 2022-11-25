import styled from 'styled-components';

import SpecialTheaterSvg from '../../assets/SpecialTheater.svg';
import { timeTypeArr } from '../../core/bookingPage';

export default function SpecialType() {
  return (
    <Root>
      <SpecialTypeWrapper>
        <SpecialTypeIcon src={SpecialTheaterSvg} alt="특별관" />
        <Special>특별관</Special>
      </SpecialTypeWrapper>

      <TimeTypeBox>
        {timeTypeArr.map((timeType) => {
          return (
            <SpecialTypeWrapper key={timeType.name}>
              <SpecialTypeIcon src={timeType.icon} alt={timeType.name} />
              <Special>{timeType.name}</Special>
            </SpecialTypeWrapper>
          );
        })}
      </TimeTypeBox>
    </Root>
  );
}

const Root = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5.2rem;
  padding: 0 3.3rem;
  border-bottom: 0.5px solid ${({ theme }) => theme.colors.gray4};
`;

const SpecialTypeWrapper = styled.span`
  display: flex;
  align-items: center;
`;

const SpecialTypeIcon = styled.img``;

const Special = styled.p`
  ${({ theme }) => theme.fonts.body2};
  color: ${({ theme }) => theme.colors.gray1};
  margin-left: 0.8rem;
`;

const TimeTypeBox = styled.span`
  display: flex;
  gap: 2.3rem;
`;
