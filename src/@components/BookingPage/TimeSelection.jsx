import styled from 'styled-components';
import SpecialType from './SpecialType';
import CalendarSvg from '../../assets/Calendar.svg';
import AgeLimit12 from '../../assets/AgeLimit12.png';
import { screenTimeArr } from '../../core/bookingPage';
import { useNavigate } from 'react-router-dom';

export default function TimeSelection(props) {
  const { seoulAreaSelect } = props;
  const navigate = useNavigate();

  function handleClick(el) {
    navigate('/select', {
      state: {
        seoulArea: seoulAreaSelect[0],
        time: `${el.start}~${el.finish}`,
      },
    });
  }

  return (
    <Root>
      <SectionTitle>
        <h3>시간</h3>
      </SectionTitle>
      <SpecialType />
      <TimeSelectArea seoulAreaSelect={seoulAreaSelect.length}>
        {seoulAreaSelect.length ? (
          <>
            <MovieWrapper>
              <AgeLimit src={AgeLimit12} alt="나이 제한" />
              <MovieTitle>블랙 팬서: 와칸다 포에버</MovieTitle>
            </MovieWrapper>
            {seoulAreaSelect.map((seoul) => {
              return (
                <TimeSelectWrapper key={seoul}>
                  <Seoul>{seoul}</Seoul>
                  {screenTimeArr.강남.map((el, idx) => {
                    return (
                      <TimeSelect type="button" key={idx} onClick={() => handleClick(el)}>
                        <TimeWrapper>
                          {el.timeTypeIcon && <TimeTypeIcon src={el.timeTypeIcon} alt={el.timeTypeName} />}
                          <StartTime>{el.start}</StartTime>
                          <FinishTime>~{el.finish}</FinishTime>
                        </TimeWrapper>
                        <TimeEtc>
                          <NumWrapper>
                            <CurrentNum>{el.currentNum}</CurrentNum>
                            <TotalNum>/{el.totalNum}</TotalNum>
                          </NumWrapper>
                          <MovieEtc>2D(자막)</MovieEtc>
                        </TimeEtc>
                        {el.specialIcon && <Special src={el.specialIcon} alt="특별관" />}
                      </TimeSelect>
                    );
                  })}
                </TimeSelectWrapper>
              );
            })}
          </>
        ) : (
          <>
            <img src={CalendarSvg} alt="달력 아이콘" />
            <TimeSelectExplain>
              날짜, 영화, 극장을 선택하시면 <br />
              상영시간표를 비교하여 볼 수 있습니다.
            </TimeSelectExplain>
          </>
        )}
      </TimeSelectArea>
    </Root>
  );
}

const Root = styled.section`
  width: 100%;
  height: 100%;
`;

const SectionTitle = styled.div`
  ${({ theme }) => theme.fonts.headline3};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.main_darken};
  height: 5.8rem;
  z-index: 3;

  display: flex;
  align-items: center;
  justify-content: center;
  border-left: 1px solid ${({ theme }) => theme.colors.main_darken};
`;

const TimeSelectArea = styled.article`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: ${({ seoulAreaSelect }) => (seoulAreaSelect ? '' : 'center')};
  align-items: ${({ seoulAreaSelect }) => (seoulAreaSelect ? '' : 'center')};
  padding: 2.2rem 2.6rem;
`;

const MovieWrapper = styled.div`
  display: flex;
  gap: 1.3rem;
  align-items: center;
`;

const AgeLimit = styled.img`
  width: 2rem;
  height: 2rem;
`;

const MovieTitle = styled.h2`
  ${({ theme }) => theme.fonts.headline3};
  color: ${({ theme }) => theme.colors.gray1};
`;

const TimeSelectWrapper = styled.div`
  width: 100%;
`;

const Seoul = styled.h3`
  ${({ theme }) => theme.fonts.body1};
  color: ${({ theme }) => theme.colors.gray3};
  margin-top: 1.5rem;
  margin-bottom: 0.8rem;
`;

const TimeSelect = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.gray5};
  padding: 0.6rem 0.7rem;
  width: 13rem;
  height: 6rem;
  margin-right: 1.3rem;
  margin-bottom: 1.3rem;
  position: relative;
`;

const TimeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.1rem;
  position: relative;
`;

const TimeTypeIcon = styled.img`
  width: 1.2rem;
  position: absolute;
  left: 0;
`;

const StartTime = styled.p`
  ${({ theme }) => theme.fonts.headline3_bold};
  color: ${({ theme }) => theme.colors.gray1};
`;

const FinishTime = styled.p`
  ${({ theme }) => theme.fonts.body3};
  color: ${({ theme }) => theme.colors.gray3};
`;

const TimeEtc = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.2rem;
  margin-top: 0.2rem;
`;

const NumWrapper = styled.span`
  display: flex;
  align-items: center;
  padding-top: 0.3rem;
  height: 1.8rem;
`;

const CurrentNum = styled.p`
  ${({ theme }) => theme.fonts.body3};
  color: ${({ theme }) => theme.colors.sub_mint};
`;

const TotalNum = styled.p`
  ${({ theme }) => theme.fonts.body3};
  color: ${({ theme }) => theme.colors.gray3};
`;

const MovieEtc = styled.p`
  ${({ theme }) => theme.fonts.body3};
  color: ${({ theme }) => theme.colors.gray3};
`;

const Special = styled.img`
  position: absolute;
  top: 6px;
  right: 6px;
  width: 0.6rem;
`;

const TimeSelectExplain = styled.p`
  ${({ theme }) => theme.fonts.body1};
  color: ${({ theme }) => theme.colors.gray3};
  text-align: center;
`;
