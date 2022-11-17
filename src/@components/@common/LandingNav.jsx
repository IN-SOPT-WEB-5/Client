import React from 'react';
import styled from 'styled-components';

export default function LandingNav() {
  return (
    <Wrapper>
      {/*로그인 회원가입 있는 nav*/}
      <VipMenu>VIP LOUNGE</VipMenu>
      <MembershipMenu>멤버십</MembershipMenu>
      <CustomerCenterMenu>고객센터</CustomerCenterMenu>
      <TopMiniNavBlank></TopMiniNavBlank>
      <Login>로그인</Login>
      <Signup>회원가입</Signup>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background-color: #222222;
`;

const TopMiniNav = styled.div`
  display: flex;
  background-color: #222222;
  width: 1280px;
`;

const VipMenu = styled.p`
  font-family: 'NanumBarunGothicOTF';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  width: 74px;
  color: #aaaaaa;
  margin: 14px 20px 0px 90px;
`;

const MembershipMenu = styled.p`
  font-family: 'NanumBarunGothicOTF';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  width: 35px;
  color: #aaaaaa;
  margin: 14px 20px 0px 0px;
`;

const CustomerCenterMenu = styled.p`
  font-family: 'NanumBarunGothicOTF';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  width: 47px;
  color: #aaaaaa;
  margin: 14px 0px 0px 0px;
`;

const Login = styled.p`
  font-family: 'NanumBarunGothicOTF';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  width: 35px;
  color: #aaaaaa;
  margin: 14px 20px 0px 0px;
`;

const Signup = styled.p`
  font-family: 'NanumBarunGothicOTF';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  width: 47px;
  color: #aaaaaa;
  margin: 14px 99px 0px 0px;
`;

const TopMiniNavBlank = styled.div`
  width: 793px;
  height: 24px;
`;
