import React from 'react';
import styled from 'styled-components';
import Hamburger from '../../assets/header/ic_menu_black.svg';
import SearchIcon from '../../assets/header/ic_search_black.svg';
import Logo from '../../assets/header/purplelogo.svg';
import MypageIcon from '../../assets/header/ic_my_black.svg';
import HouseIcon from '../../assets/header/ic_home.svg';
import GrayCramp from '../../assets/header/icn_cramp_gray.svg';

export default function GeneralNav() {
  return (
    <WrapperWrapper>
      <Wrapper>
        {/*로그인 회원가입 있는 nav*/}
        <VipMenu>VIP LOUNGE</VipMenu>
        <MembershipMenu>멤버십</MembershipMenu>
        <CustomerCenterMenu>고객센터</CustomerCenterMenu>
        <TopMiniNavBlank></TopMiniNavBlank>
        <Login>로그인</Login>
        <Signup>회원가입</Signup>
        <HamburgerWrapper>
          <img src={Hamburger} />
        </HamburgerWrapper>
        <SearchIconWrapper>
          <img src={SearchIcon} />
        </SearchIconWrapper>
        <Movie>영화</Movie>
        <Ticketing>예매</Ticketing>
        <Theater>극장</Theater>
        <LogoWrapper>
          <img src={Logo} />
        </LogoWrapper>
        <Event>이벤트</Event>
        <Store>스토어</Store>
        <Benefit>혜택</Benefit>
        <MypageWrapper>
          <img src={MypageIcon} />
        </MypageWrapper>
        <MiniNav>
          <HouseIconWrapper></HouseIconWrapper>
          <GrayCrampWrapper></GrayCrampWrapper>
        </MiniNav>
      </Wrapper>
    </WrapperWrapper>
  );
}

const WrapperWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: #fff;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background-color: #fff;
  width: 128rem;
`;

const VipMenu = styled.p`
  color: ${({ theme }) => theme.colors.gray5};
  font: ${({ theme }) => theme.fonts.body2};
  width: 7.4rem;
  margin: 1.4rem 2rem 0rem 9rem;
`;

const MembershipMenu = styled.p`
  color: ${({ theme }) => theme.colors.gray5};
  font: ${({ theme }) => theme.fonts.body2};
  width: 3.5rem;
  margin: 1.4rem 2rem 0rem 0rem;
`;

const CustomerCenterMenu = styled.p`
  color: ${({ theme }) => theme.colors.gray5};
  font: ${({ theme }) => theme.fonts.body2};
  width: 4.7rem;
  margin: 1.4rem 0rem 0rem 0rem;
`;

const Login = styled.p`
  color: ${({ theme }) => theme.colors.gray5};
  font: ${({ theme }) => theme.fonts.body2};
  width: 3.5rem;
  margin: 1.4rem 2rem 0rem 0rem;
`;

const Signup = styled.p`
  color: ${({ theme }) => theme.colors.gray5};
  font: ${({ theme }) => theme.fonts.body2};
  width: 4.7rem;
  margin: 1.4rem 9.9rem 0rem 0rem;
`;

const TopMiniNavBlank = styled.div`
  width: 79.3rem;
  height: 2.4rem;
`;

////////////////// from here nav

const LogoWrapper = styled.div`
  position: relative;
  bottom: 1rem;
`;

const HamburgerWrapper = styled.div`
  margin-bottom: 0.6rem;
`;

const SearchIconWrapper = styled.div`
  position: relative;
  right: 0.9rem;
`;

const Movie = styled.p`
  color: ${({ theme }) => theme.colors.gray2};
  font: ${({ theme }) => theme.fonts.headline3};
  width: 3.6rem;
  margin-left: 8.6rem;
  margin-top: 1.7rem;
`;

const Ticketing = styled.p`
  color: ${({ theme }) => theme.colors.gray2};
  font: ${({ theme }) => theme.fonts.headline3};
  width: 3.6rem;
  margin-left: 5.4rem;
  margin-top: 1.7rem;
`;

const Theater = styled.p`
  color: ${({ theme }) => theme.colors.gray2};
  font: ${({ theme }) => theme.fonts.headline3};
  width: 3.6rem;
  margin-left: 5.4rem;
  margin-right: 9.7rem;
  margin-top: 1.7rem;
`;

const Event = styled.p`
  color: ${({ theme }) => theme.colors.gray2};
  font: ${({ theme }) => theme.fonts.headline3};
  width: 5.4rem;
  margin-left: 8.6rem;
  margin-top: 1.7rem;
`;

const Store = styled.p`
  color: ${({ theme }) => theme.colors.gray2};
  font: ${({ theme }) => theme.fonts.headline3};
  width: 5.4rem;
  margin-left: 5.4rem;
  margin-top: 1.7rem;
`;

const Benefit = styled.p`
  color: ${({ theme }) => theme.colors.gray2};
  font: ${({ theme }) => theme.fonts.headline3};
  width: 3.6rem;
  margin-left: 5.4rem;
  margin-right: 10.2rem;
  margin-top: 1.7rem;
`;

const MypageWrapper = styled.div``;

////////////////////////////////////// from here mini nav

const MiniNav = styled.div`
  display: flex;
  justify-content: flex-start;
  top: 9rem;
  width: 128rem;
  height: 3.5rem;
  background-color: ${({ theme }) => theme.colors.footer};
  border-top: 0.1rem solid #351f66;
`;

//////////////////// 시간 남으면 하기
const MiniMovie = styled.p`
  color: ${({ theme }) => theme.colors.gray3};
`;

const MiniWholeMovie = styled.p`
  color: ${({ theme }) => theme.colors.gray3};
`;

////////////////

const HouseIconWrapper = styled.div`
  margin: 1.3rem 1rem 1.25rem 9.6rem;
  background-image: url(${HouseIcon});
  background-size: cover;
  width: 1.1rem;
  height: 0.95rem;
`;

const GrayCrampWrapper = styled.div`
  margin: 1.4rem 1rem 1.3rem 0rem;
  background-image: url(${GrayCramp});
  background-size: cover;
  width: 0.4rem;
  height: 0.8rem;
`;
