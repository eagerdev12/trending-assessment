import { FunctionComponent } from "react";
import styled from "styled-components";

const Name = styled.div`
@media (min-width: 768px) {
    width: 50%;
}
`;

const NameTitle = styled.h1`
line-height: 1.25;
font-weight: 600;
font-size: 18px;
margin-bottom: 0;
margin-top: 0;
@media (min-width: 768px) {
  font-size: 20px;
}
`;

const NameLink = styled.a`
  color: #58a6ff;
  text-decoration: none;
`;

const UserName = styled.p`
  margin-bottom: 4px;
  margin-top: 0;
  font-size: 16px;
  font-weight: 400;
`;

export const DeveloperNameInfo:
  FunctionComponent<{
    url: string,
    name: string,
    username: string
  }> = ({
    url,
    name,
    username
  }) => {
  return(
    <Name>
    <NameTitle>
      <NameLink href={ url }>{ name }</NameLink>
      <UserName>{ username }</UserName>
    </NameTitle>
  </Name>

  )
}