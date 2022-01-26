import { FunctionComponent } from "react";
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #0d1117;
  border-bottom: 1px solid #30363d;
`;

const Container = styled.div`
  max-width: 1012px;
  margin-left: auto;
  margin-right: auto;
  padding: 40px 16px;
  text-align: center!important;
`;

const Title = styled.h1`
  font-weight: 600!important;
  font-size: 32px!important;
  margin: 0;
`;

const Paragraph = styled.p`
  font-size: 16px;
  margin: 0 auto 10px auto;
  @media (min-width: 768px) {
    width: 50%;
}
`;

export const Header: FunctionComponent = () => {
  return (
    <Wrapper>
      <Container>
        <Title>Trending</Title>
        <Paragraph>See what the GitHub community is most excited about today.</Paragraph>
      </Container>
    </Wrapper>
  )
}