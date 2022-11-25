import styled from 'styled-components';
import boutique from '../../assets/landingPage/guide_boutique.png';
import comfort from '../../assets/landingPage/guide_comfort.png';
import dolby from '../../assets/landingPage/guide_dolby.png';
import kids from '../../assets/landingPage/guide_kids.png';
import mx from '../../assets/landingPage/guide_mx.png';
import puppy from '../../assets/landingPage/guide_puppy.png';
import call from '../../assets/landingPage/btn_call.png';
import help from '../../assets/landingPage/btn_help.png';
import lost from '../../assets/landingPage/btn_lost.png';
import place from '../../assets/landingPage/btn_place.png';
import rent from '../../assets/landingPage/btn_rent.png';
import qa from '../../assets/landingPage/btn_qa.png';

export default function Guide() {
  return (
    <Root>
      <TitleContainer>
        <GuideTitle>메가박스 안내</GuideTitle>
      </TitleContainer>
      <GuideImageContainer>
        <GuideImage src={dolby} alt="dolby" />
        <GuideImage src={boutique} alt="boutique" />
        <GuideImage src={mx} alt="mx" />
        <GuideImage src={comfort} alt="comfort" />
        <GuideImage src={puppy} alt="puppy" />
        <GuideImage src={kids} alt="kids" />
      </GuideImageContainer>
      <TitleContainer>
        <HelpTitle>도움이 필요하신가요?</HelpTitle>
      </TitleContainer>
      <HelpImageContainer>
        <HelpImage src={call} alt="call" />
        <HelpImage src={qa} alt="qa" />
        <HelpImage src={help} alt="help" />
        <HelpImage src={rent} alt="rent" />
        <HelpImage src={lost} alt="lost" />
        <HelpImage src={place} alt="place" />
      </HelpImageContainer>
    </Root>
  );
}

const Root = styled.section`
  height: 90rem;
  padding: 6.2rem 9rem 0 9rem;
`;

const TitleContainer = styled.section`
  display: flex;

  margin-bottom: 3.2rem;
`;

const GuideTitle = styled.h1`
  font: ${({ theme }) => theme.fonts.headline1};
  color: ${({ theme }) => theme.colors.main_darken};
`;

const GuideImageContainer = styled.section`
  display: flex;
  justify-content: space-around;

  margin-bottom: 20rem;
`;

const GuideImage = styled.img`
  height: 20rem;
  width: 16.7rem;
`;

const HelpTitle = styled.h1`
  font: ${({ theme }) => theme.fonts.headline1};
  color: ${({ theme }) => theme.colors.main_darken};
`;

const HelpImageContainer = styled.section`
  display: flex;
  justify-content: space-around;
`;

const HelpImage = styled.img``;
