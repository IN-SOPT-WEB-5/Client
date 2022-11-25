import styled from 'styled-components';
import classicIcon from '../../assets/landingPage/classicIcon.svg';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Slider from 'react-slick';

export default function Curation() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: true,
  };
  const [curations, setCurations] = useState([]);
  const [mainImage, setMainImage] = useState(0);

  useEffect(() => {
    async function getCurationData() {
      try {
        const response = await axios.get('http://107.21.205.44:3000/curation');
        setCurations(response.data.data);
      } catch (e) {
        console.log(e);
      }
    }
    getCurationData();
  }, []);

  function changeMainImage(id) {
    setMainImage(id);
  }

  return (
    curations && (
      <Root>
        <TitleContianer>
          <TextWrapper>
            <CurationTitle>큐레이션</CurationTitle>
            <TitleDiscription>멤버십 회원을 위한 특별한 추천!</TitleDiscription>
          </TextWrapper>
          <MoreBtn>더보기+</MoreBtn>
        </TitleContianer>
        <MainSection>
          {curations.length > 0 && (
            <>
              <MainPoster src={curations[mainImage].image} alt="poster" />
              <MainDiscriptionBox>
                <CategoryWrapper>
                  <CategoryIcon src={classicIcon} alt="classic" />
                  <CategoryTitle>{curations[mainImage].description}</CategoryTitle>
                </CategoryWrapper>
                <DiscriptionTitle>{curations[mainImage].title}</DiscriptionTitle>
                <DiscriptionText>
                  메가박스 클래식 소사이어티의 새로운 프로그램을 소개합니다. <br /> 역대 가장 화려한 시즌을 맞이한 로열
                  오페라 하우스 2022/23 시즌!
                </DiscriptionText>
                <PeriodWrapper>
                  <PeriodTitle>상영 기간</PeriodTitle>
                  <PeriodText>
                    {curations[mainImage].screeningPeriod} <br /> * 발레: 매주 월요일/일요일 상영
                  </PeriodText>
                </PeriodWrapper>
                <BtnWrapper>
                  <DetailBtn>상세보기</DetailBtn>
                  <TicketingBtn>예매하기</TicketingBtn>
                </BtnWrapper>
              </MainDiscriptionBox>
            </>
          )}
        </MainSection>
        <SliderContainer>
          <StyledSlider {...settings}>
            {curations &&
              curations.map((data, index) => (
                <PosterImage src={data.image} alt="poster-img" key={data.id} onClick={() => changeMainImage(index)} />
              ))}
          </StyledSlider>
        </SliderContainer>
      </Root>
    )
  );
}
const Root = styled.section`
  height: 100rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.purple_dark};

  padding: 6.2rem 9rem 0 9rem;
`;

const TitleContianer = styled.section`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 8rem;
`;

const TextWrapper = styled.div`
  display: flex;
`;
const CurationTitle = styled.h1`
  font: ${({ theme }) => theme.fonts.headline1};
  color: ${({ theme }) => theme.colors.white};
`;

const TitleDiscription = styled.strong`
  font: ${({ theme }) => theme.fonts.headline3};
  color: ${({ theme }) => theme.colors.gray5};

  margin-left: 2.4rem;
`;

const MoreBtn = styled.div`
  font: ${({ theme }) => theme.fonts.headline3};
  color: ${({ theme }) => theme.colors.gray5};
`;

const MainSection = styled.section`
  display: flex;

  margin-top: 8rem;
`;

const MainPoster = styled.img`
  height: 40rem;
  width: 30rem;

  border-radius: 0.9rem;
`;

const MainDiscriptionBox = styled.article`
  display: flex;
  flex-direction: column;

  margin-left: 6.7rem;
`;

const CategoryWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const CategoryIcon = styled.img`
  height: 4rem;
  width: 3.4rem;
`;

const CategoryTitle = styled.strong`
  width: 26.4rem;

  font: ${({ theme }) => theme.fonts.headline3};
  color: ${({ theme }) => theme.colors.sub_mint};
`;

const DiscriptionTitle = styled.h2`
  font: ${({ theme }) => theme.fonts.headline1};
  color: ${({ theme }) => theme.colors.white};

  margin-top: 2.4rem;
`;

const DiscriptionText = styled.div`
  height: 14rem;

  font: ${({ theme }) => theme.fonts.body1};
  color: ${({ theme }) => theme.colors.gray5};

  border-bottom: solid 0.1rem ${({ theme }) => theme.colors.sub_blue};

  margin-top: 1.6rem;
`;

const PeriodWrapper = styled.div`
  display: flex;

  margin-top: 2.4rem;
`;

const PeriodTitle = styled.h3`
  font: ${({ theme }) => theme.fonts.body1_bold};
  color: ${({ theme }) => theme.colors.white};
`;

const PeriodText = styled.strong`
  font: ${({ theme }) => theme.fonts.body1};
  color: ${({ theme }) => theme.colors.white};

  margin-left: 1.6rem;
`;

const BtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 2.4rem;
`;

const DetailBtn = styled.button`
  height: 5.6rem;
  width: 29.6rem;

  border: 0.1rem solid ${({ theme }) => theme.colors.white};
  border-radius: 0.3rem;

  margin-right: 0.8rem;

  display: flex;
  justify-content: center;
  align-items: center;

  font: ${({ theme }) => theme.fonts.headline3};
  color: ${({ theme }) => theme.colors.white};
`;

const TicketingBtn = styled.button`
  height: 5.6rem;
  width: 29.6rem;

  background-color: ${({ theme }) => theme.colors.sub_mint};
  border-radius: 0.3rem;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-left: 0.8rem;

  font: ${({ theme }) => theme.fonts.headline3};
  color: ${({ theme }) => theme.colors.white};
`;

const SliderContainer = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;

  margin-top: 9.6rem;

  height: 22rem;

  overflow: hidden;
`;

const PosterImage = styled.img`
  height: 22.2rem;
  width: 16.6rem;

  margin: 0 2.2rem;

  border-radius: 0.8rem;
`;

const StyledSlider = styled(Slider)`
  overflow: hidden;
`;
