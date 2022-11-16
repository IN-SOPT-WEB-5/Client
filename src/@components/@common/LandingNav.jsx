import React from 'react';
import styled from 'styled-components';

export default function LandingNav() {
  return (
    <Wrapper>
      <TopMiniNav>
        <TopMiniNavText1>VIP LOUNGE</TopMiniNavText1>
        <TopMiniNavText2>멤버십</TopMiniNavText2>
        <TopMiniNavText3>고객센터</TopMiniNavText3>
        <TopMiniNavText4>로그인</TopMiniNavText4>
        <TopMiniNavText5>회원가입</TopMiniNavText5>
      </TopMiniNav>
      {/*로그인 회원가입 있는 nav*/}
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const TopMiniNav = styled.div`
  display: flex;
  background-color: #222222;
  width: 1280px;
`;

const TopMiniNavText1 = styled.p`
  font-family: 'NanumBarunGothicOTF';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  width: 74px;
  color: #aaaaaa;
  margin: 14px 20px 0px 90px;
`;

const TopMiniNavText2 = styled.p`
  font-family: 'NanumBarunGothicOTF';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  width: 35px;
  color: #aaaaaa;
  margin: 14px 20px 0px 0px;
`;

const TopMiniNavText3 = styled.p`
  font-family: 'NanumBarunGothicOTF';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  width: 47px;
  color: #aaaaaa;
  margin: 14px 793px 0px 0px;
`;

const TopMiniNavText4 = styled.p`
  font-family: 'NanumBarunGothicOTF';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  width: 35px;
  color: #aaaaaa;
  margin: 14px 20px 0px 0px;
`;

const TopMiniNavText5 = styled.p`
  font-family: 'NanumBarunGothicOTF';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  width: 47px;
  color: #aaaaaa;
  margin: 14px 99px 0px 0px;
`;
