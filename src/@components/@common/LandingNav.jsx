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
  margin: 1.4rem 99px 0rem 0rem;
`;

const TopMiniNavBlank = styled.div`
  width: 79.3rem;
  height: 2.4rem;
`;
