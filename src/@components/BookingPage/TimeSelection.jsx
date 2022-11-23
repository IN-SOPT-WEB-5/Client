import styled from 'styled-components';
import SpecialType from './SpecialType';
import CalendarSvg from '../../assets/Calendar.svg';
import AgeLimit12 from '../../assets/AgeLimit12.png';
import { screenTimeArr, timeTypeArr } from '../../core/bookingPage';

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
              return (
                <St.TimeSelectWrapper key={seoul}>
                  <St.Seoul>{seoul}</St.Seoul>
                  <St.ScreenTimeWrapper>
                    {screenTimeArr.강남.map((el, idx) => {
                      return (
                        <St.TimeSelect type="button" key={idx}>
                          <St.TimeWrapper>
                            {el.timeType && <St.TimeTypeIcon src={el.timeTypeIcon} alt={el.timeTypeName} />}
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
                        </St.TimeSelect>
                      );
                    })}
                  </St.ScreenTimeWrapper>
                </St.TimeSelectWrapper>
              );
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
  MovieTitle: styled.h2`
    ${({ theme }) => theme.fonts.headline3};
    color: ${({ theme }) => theme.colors.gray1};
  `,
  TimeSelectWrapper: styled.div`
    width: 100%;
  `,
  ScreenTimeWrapper: styled.div`
    width: 100%;
    /* display: flex; */
  `,
  Seoul: styled.h3`
    ${({ theme }) => theme.fonts.body1};
    color: ${({ theme }) => theme.colors.gray3};
    margin-top: 1.5rem;
    margin-bottom: 0.8rem;
  `,
  TimeSelect: styled.button`
    border: 1px solid ${({ theme }) => theme.colors.gray5};
    padding: 0.6rem;
    width: 13rem;
    height: 6rem;
    margin-right: 1.3rem;
    margin-bottom: 1.3rem;
  `,
  TimeTypeIcon: styled.img`
    width: 1.2rem;
  `,
  TimeWrapper: styled.div`
    display: flex;
    align-items: center;
    gap: 0.1rem;
  `,
  StartTime: styled.p`
    ${({ theme }) => theme.fonts.headline3_bold};
    color: ${({ theme }) => theme.colors.gray1};
  `,
  FinishTime: styled.p`
    ${({ theme }) => theme.fonts.body3};
    color: ${({ theme }) => theme.colors.gray3};
  `,
  TimeEtc: styled.div`
    display: flex;
    align-items: center;
    gap: 1.2rem;
  `,
  NumWrapper: styled.span`
    display: flex;
  `,
  CurrentNum: styled.p`
    ${({ theme }) => theme.fonts.body3};

    color: ${({ theme }) => theme.colors.sub_mint};
  `,
  TotalNum: styled.p`
    ${({ theme }) => theme.fonts.body3};
    color: ${({ theme }) => theme.colors.gray3};
  `,
  MovieEtc: styled.p`
    ${({ theme }) => theme.fonts.body3};
    color: ${({ theme }) => theme.colors.gray3};
  `,
  Special: styled.img``,
  TimeSelectExplain: styled.p`
    ${({ theme }) => theme.fonts.body1};
    color: ${({ theme }) => theme.colors.gray3};
    text-align: center;
  `,
};
