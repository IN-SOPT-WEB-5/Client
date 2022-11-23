import styled from 'styled-components';
import SpecialType from './SpecialType';
import CalendarSvg from '../../assets/Calendar.svg';
import AgeLimit12 from '../../assets/AgeLimit12.png';
import { screenTimeArr } from '../../core/bookingPage';

export default function TimeSelection({ seoulAreaSelect }) {
  return (
    <St.Root>
      <St.SectionTitle>
        <h3>시간</h3>
      </St.SectionTitle>
      <SpecialType />
      <St.TimeSelectArea seoulAreaSelect={seoulAreaSelect.length}>
        {seoulAreaSelect.length ? (
          <>
            <St.MovieWrapper>
              <St.AgeLimit src={AgeLimit12} alt="나이 제한" />
              <St.MovieTitle>블랙 팬서: 와칸다 포에버</St.MovieTitle>
            </St.MovieWrapper>
            {seoulAreaSelect.map((seoul) => {
              if (screenTimeArr.includes(seoul)) {
                <St.TimeSelectWrapper key={seoul}>
                  <St.Seoul>{seoul}</St.Seoul>
                  {screenTimeArr.seoul.map((el) => {
                    <St.TimeSelect type="button">
                      {el.timeType && <St.TimeTypeIcon src={el.timeTypeIcon} alt={el.timeTypeName} />}
                      <St.TimeWrapper>
                        <St.StartTime>{el.start}</St.StartTime>
                        <St.FinishTime>~{el.finish}</St.FinishTime>
                      </St.TimeWrapper>
                      <St.TimeEtc>
                        <St.NumWrapper>
                          <St.CurrentNum>{el.currentNum}</St.CurrentNum>
                          <St.TotalNum>/{el.totalNum}</St.TotalNum>
                        </St.NumWrapper>
                        <St.MovieEtc>2D(자막)</St.MovieEtc>
                      </St.TimeEtc>
                      {el.special && <St.Special src={el.timeTypeIcon} alt={el.timeTypeName} />}
                    </St.TimeSelect>;
                  })}
                </St.TimeSelectWrapper>;
              }
            })}
          </>
        ) : (
          <>
            <img src={CalendarSvg} alt="달력 아이콘" />
            <St.TimeSelectExplain>
              날짜, 영화, 극장을 선택하시면 <br />
              상영시간표를 비교하여 볼 수 있습니다.
            </St.TimeSelectExplain>
          </>
        )}
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
    justify-content: ${({ seoulAreaSelect }) => (seoulAreaSelect ? '' : 'center')};
    align-items: ${({ seoulAreaSelect }) => (seoulAreaSelect ? '' : 'center')};
    padding: 2.2rem 2.6rem;
  `,
  MovieWrapper: styled.div`
    display: flex;
    gap: 1.3rem;
    align-items: center;
  `,
  AgeLimit: styled.img`
    width: 2rem;
    height: 2rem;
  `,
  MovieTitle: styled.h3`
    ${({ theme }) => theme.fonts.headline3};
    color: ${({ theme }) => theme.colors.gray1};
  `,
  TimeSelectExplain: styled.p`
    ${({ theme }) => theme.fonts.body1};
    color: ${({ theme }) => theme.colors.gray3};
    text-align: center;
  `,
};
