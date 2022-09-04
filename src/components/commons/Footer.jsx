import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Footer() {
  return (
    <Container>
      <AboutContainer>
        <AboutTitle>About Fruitte</AboutTitle>
        <AboutDescription>
          프루떼는 안전한 먹거리의 신념을 지키는 좋은 농장을 발굴하고 소개하는 팜큐레이터입니다.
          건강한 자연을 가까이에서 만날 수 있는 팜큐레이션 서비스를 통하여 농장을 알고 누리고 맛보는
          기쁨을 전합니다. 프루떼를 경험하는 사람들의 일상에 풍요로움을 더하는 것이 우리가 지향하는
          가치입니다.
        </AboutDescription>
      </AboutContainer>
      <InfoContainer>
        <Infotitle>문의안내</Infotitle>
        <KakaoInfo>카카오톡채널: 프루떼</KakaoInfo>
        <KakaoInfo style={{ marginBottom: '30px' }}>(주중 9시~18시 채팅 상담 가능) </KakaoInfo>
        <Infotitle>무통장 입금 계좌안내</Infotitle>
        <PaymentInfo>국민은행 527837-01-004676, 주식회사 로컬앤라이프</PaymentInfo>
      </InfoContainer>
      <MenuContainer>
        <MenuItem to="/fruitstore">FRUITSTORE</MenuItem>
        <MenuItem to="/admin/management">관리</MenuItem>
        <MenuItem to="/admin/register">등록</MenuItem>
        <GithubLink
          href="https://github.com/wanted-pre-onboarding-4/Fruitte"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </GithubLink>
      </MenuContainer>
    </Container>
  );
}

const Container = styled.footer`
  height: 300px;
  background-color: #eeeeee;
  padding: 0px 10px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const AboutContainer = styled.div`
  width: 25%;
  margin-top: 50px;
  margin-left: 100px;
`;

const AboutTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 24px;
  text-decoration: underline;
  text-underline-position: under;
  color: #7e7e7e;
`;

const AboutDescription = styled.span`
  line-height: 1.3;
  color: #7e7e7e;
`;

const InfoContainer = styled.div`
  width: 25%;
  margin-top: 50px;
`;

const Infotitle = styled.h2`
  margin-bottom: 20px;
  text-decoration: underline;
  text-underline-position: under;
  color: #7e7e7e;
`;

const KakaoInfo = styled.div`
  line-height: 1.3;
  color: #7e7e7e;
`;

const PaymentInfo = styled.div`
  line-height: 1.3;
  color: #7e7e7e;
`;

const MenuContainer = styled.div`
  width: 25%;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
`;

const MenuItem = styled(Link)`
  margin-top: 20px;
  color: #7e7e7e;
`;

const GithubLink = styled.a`
  margin-top: 20px;
  color: #7e7e7e;
`;

export default Footer;
