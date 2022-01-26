import { FunctionComponent } from "react";
import styled from "styled-components";
import { PcIcon } from "../../gui/icons/icons";

const Anchor = styled.a`
  color: #58a6ff;
  text-decoration: none;
  background-color: transparent;
`;

const Heading = styled.h1`
  line-height: 1.25;
  font-weight: 600!important;
  font-size: 18px;
  margin-bottom: 0;
  margin-top: 0;
  @media (min-width: 768px) {
    font-size: 20px!important;
  }
`;

const TextNormal = styled.span`
  font-weight: 400!important;
`;

export const RepositoryLink: FunctionComponent<{ 
  repositoryName: string,
  userName: string,
  url: string
 }> = ({
   userName,
   repositoryName,
   url
 }) => {



  return (
    <Heading>
      <Anchor href={url}>
        <PcIcon withMargin={true}/>
        <TextNormal>
          { userName } / 
        </TextNormal>
        { ' ' + repositoryName }
      </Anchor>
    </Heading>
  )
}