import styled from 'styled-components';
import mainBanner from '../../assets/landingPage/benefits_main.png';
import payBanner from '../../assets/landingPage/landing_img_event2.png';
import carBanner from '../../assets/landingPage/landing_img_event3.png';
import movieBanner from '../../assets/landingPage/landing_img_event4.png';
import membership from '../../assets/landingPage/membershipIcon.png';
import card from '../../assets/landingPage/cardIcon.png';
import gift from '../../assets/landingPage/giftIcon.png';
import store from '../../assets/landingPage/storeIcon.png';

const Root = styled.section`
  height: 83.2rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 2.8rem 9rem 0 9rem;

  position: relative;
`;

const TitleContainer = styled.section`
  height: 4.9rem;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 9rem;
`;

const BenefitTitle = styled.h1`
  font: ${({ theme }) => theme.fonts.headline1};
  color: ${({ theme }) => theme.colors.main_darken};
`;

const MoreBtn = styled.h2`
  font: ${({ theme }) => theme.fonts.headline3};
  color: ${({ theme }) => theme.colors.main_darken};
`;

const MainBanner = styled.img``;

const SubBannerContainer = styled.section`
  display: flex;

  margin-top: 2rem;

  z-index: 99;
`;

const SubBanner = styled.img`
  margin: 0 1.5rem;
`;

const CategoryBackground = styled.div`
  width: 100%;
  height: 33.2rem;

  background-color: ${({ theme }) => theme.colors.main_purple};

  position: absolute;
  bottom: 0;
`;

const CategoryContainer = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 15.2rem;
`;

const BenefitsCategory = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 0 2rem;
`;

const CategoryText = styled.strong`
  font: ${({ theme }) => theme.fonts.body1};
  color: ${({ theme }) => theme.colors.white};
`;

export default function Benefits() {
  return (
    <Root>
      <TitleContainer>
        <BenefitTitle>혜택</BenefitTitle>
        <MoreBtn>더보기 +</MoreBtn>
      </TitleContainer>
      <MainBanner src={mainBanner} alt="main-banner" />
      <SubBannerContainer>
        <SubBanner src={payBanner} alt="pay-banner" />
        <SubBanner src={carBanner} alt="car-banner" />
        <SubBanner src={movieBanner} alt="movie-banner" />
      </SubBannerContainer>
      <CategoryBackground>
        <CategoryContainer>
          <BenefitsCategory>
            <img src={membership} alt="membership" />
            <CategoryText>멤버십</CategoryText>
          </BenefitsCategory>
          <BenefitsCategory>
            <img src={card} alt="card" />
            <CategoryText>할인카드안내</CategoryText>
          </BenefitsCategory>
          <BenefitsCategory>
            <img src={gift} alt="gift" />
            <CategoryText>이벤트</CategoryText>
          </BenefitsCategory>
          <BenefitsCategory>
            <img src={store} alt="store" />
            <CategoryText>스토어</CategoryText>
          </BenefitsCategory>
        </CategoryContainer>
      </CategoryBackground>
    </Root>
  );
}
