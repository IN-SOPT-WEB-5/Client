import React from 'react';
import styled from 'styled-components';
import Hamburger from '../../assets/header/navhamburger.svg';
import SearchIcon from '../../assets/header/navsearchicon.svg';
import Logo from '../../assets/header/navlogo.svg';
import MypageIcon from '../../assets/header/navmypage.svg';

export default function LandingNav() {
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
      </Wrapper>
    </WrapperWrapper>
  );
}

const WrapperWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: #222222;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background-color: #222222;
  width: 128rem;
  border-bottom: 0.1rem solid #444;
`;

const VipMenu = styled.p`
  font-family: 'NanumBarunGothicOTF';
  font-style: normal;
  font-weight: 400;
  font-size: 1.3rem;
  line-height: 2rem;
  width: 7.4rem;
  color: #aaaaaa;
  margin: 1.4rem 2rem 0rem 9rem;
`;

const MembershipMenu = styled.p`
  font-family: 'NanumBarunGothicOTF';
  font-style: normal;
  font-weight: 400;
  font-size: 1.3rem;
  line-height: 2rem;
  width: 3.5rem;
  color: #aaaaaa;
  margin: 1.4rem 2rem 0rem 0rem;
`;

const CustomerCenterMenu = styled.p`
  font-family: 'NanumBarunGothicOTF';
  font-style: normal;
  font-weight: 400;
  font-size: 1.3rem;
  line-height: 2rem;
  width: 4.7rem;
  color: #aaaaaa;
  margin: 1.4rem 0rem 0rem 0rem;
`;

const Login = styled.p`
  font-family: 'NanumBarunGothicOTF';
  font-style: normal;
  font-weight: 400;
  font-size: 1.3rem;
  line-height: 2rem;
  width: 3.5rem;
  color: #aaaaaa;
  margin: 1.4rem 2rem 0rem 0rem;
`;

const Signup = styled.p`
  font-family: 'NanumBarunGothicOTF';
  font-style: normal;
  font-weight: 400;
  font-size: 1.3rem;
  line-height: 2rem;
  width: 4.7rem;
  color: #aaaaaa;
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
  font-family: 'NanumBarunGothicOTF';
  font-style: normal;
  font-weight: 400;
  font-size: 2rem;
  line-height: 2.2rem;
  width: 3.6rem;
  /* identical to box height, or 110% */

  /* MEGABOX/white */
  margin-left: 8.6rem;
  margin-top: 1.7rem;
  color: #ffffff;
`;

const Ticketing = styled.p`
  font-family: 'NanumBarunGothicOTF';
  font-style: normal;
  font-weight: 400;
  font-size: 2rem;
  line-height: 2.2rem;
  width: 3.6rem;

  /* identical to box height, or 110% */

  /* MEGABOX/white */
  margin-left: 5.4rem;

  margin-top: 1.7rem;
  color: #ffffff;
`;

const Theater = styled.p`
  font-family: 'NanumBarunGothicOTF';
  font-style: normal;
  font-weight: 400;
  font-size: 2rem;
  line-height: 2.2rem;
  width: 3.6rem;

  /* identical to box height, or 110% */

  /* MEGABOX/white */
  margin-left: 5.4rem;
  margin-right: 9.7rem;
  margin-top: 1.7rem;
  color: #ffffff;
`;

const Event = styled.p`
  font-family: 'NanumBarunGothicOTF';
  font-style: normal;
  font-weight: 400;
  font-size: 2rem;
  line-height: 2.2rem;
  width: 5.4rem;

  /* identical to box height, or 110% */

  /* MEGABOX/white */
  margin-left: 8.6rem;
  margin-top: 1.7rem;
  color: #ffffff;
`;

const Store = styled.p`
  font-family: 'NanumBarunGothicOTF';
  font-style: normal;
  font-weight: 400;
  font-size: 2rem;
  line-height: 2.2rem;
  width: 5.4rem;

  /* identical to box height, or 110% */

  /* MEGABOX/white */
  margin-left: 5.4rem;

  margin-top: 1.7rem;
  color: #ffffff;
`;

const Benefit = styled.p`
  font-family: 'NanumBarunGothicOTF';
  font-style: normal;
  font-weight: 400;
  font-size: 2rem;
  line-height: 2.2rem;
  width: 3.6rem;

  /* identical to box height, or 110% */

  /* MEGABOX/white */
  margin-left: 5.4rem;
  margin-right: 10.2rem;
  margin-top: 1.7rem;
  color: #ffffff;
`;

const MypageWrapper = styled.div``;
