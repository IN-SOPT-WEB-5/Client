import styled from 'styled-components';

import SpecialTheaterSvg from '../../assets/SpecialTheater.svg';
import MorningTheaterSvg from '../../assets/MorningTheater.svg';
import BrunchTheaterSvg from '../../assets/BrunchTheater.svg';
import NightTheaterSvg from '../../assets/NightTheater.svg';

const timeTypeArr = [
  { icon: MorningTheaterSvg, name: '조조' },
  { icon: BrunchTheaterSvg, name: '브런치' },
  { icon: NightTheaterSvg, name: '심야' },
];

export default function SpecialType() {
  return (
    <St.Root>
      <St.SpecialTypeWrapper>
        <St.SpecialTypeIcon src={SpecialTheaterSvg} alt="특별관" />
        <St.SpecialType>특별관</St.SpecialType>
      </St.SpecialTypeWrapper>
      <St.TimeTypeBox>
        {timeTypeArr.map((timeType) => {
          return (
            <St.SpecialTypeWrapper key={timeType.name}>
              <St.SpecialTypeIcon src={timeType.icon} alt={timeType.name} />
              <St.SpecialType>{timeType.name}</St.SpecialType>
            </St.SpecialTypeWrapper>
          );
        })}
      </St.TimeTypeBox>
    </St.Root>
  );
}

const St = {
  Root: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 5.2rem;
    padding: 0 3.3rem;
    border-bottom: 0.5px solid ${({ theme }) => theme.colors.gray4};
  `,
  SpecialTypeWrapper: styled.span`
    display: flex;
    align-items: center;
  `,
  SpecialTypeIcon: styled.img``,
  SpecialType: styled.p`
    ${({ theme }) => theme.fonts.body2};
    color: ${({ theme }) => theme.colors.gray1};
    margin-left: 0.8rem;
  `,
  TimeTypeBox: styled.span`
    display: flex;
    gap: 2.3rem;
  `,
};
