import { FunctionComponent } from "react";
import styled from "styled-components";
import { IDeveloper } from "../../../app/model/developer.model";
import { PrimaryButton } from "../../gui/components/button";
import { DeveloperNameInfo } from "./developerNameInfo";
import { DeveloperRepoInfo } from "./developerRepoInfo";

const BoxRow = styled.article`
  display: flex;
  border-top: 1px solid #21262d;
  list-style-type: none;
  margin-top: -1px;
  padding: 16px;
`;

const Rank = styled.a`
  width: 16px;
  text-align: center;
  font-size: 12px;
  color: #8b949e;
  text-decoration: none;
  background-color: transparent;
`;

const Avatar = styled.div`
  margin-left: 16px;
  margin-right: 16px;
`;

const Image = styled.img`
  border-radius: 50%;
  width: 48px;
  aspect-ratio: auto 48 / 48;
  height: 48px;
`;

const Developer = styled.div`
@media (min-width: 544px) {
  display: flex;
  flex: auto;
}
`;

const Info = styled.div`
@media (min-width: 768px) {
  display: flex!important;
}
@media (min-width: 544px) {
  width: 66.66667%;
}
`;

const Follow = styled.div`
display: flex!important;
@media (min-width: 544px) {
  margin-left: 16px!important;
}
@media (min-width: 544px) {
  justify-content: flex-end!important;
}
@media (min-width: 544px) {
    width: 33.33333%;
}
`;


export const DeveloperBoxRow: FunctionComponent<{developer: IDeveloper}> = ({ developer }) => {
  return(
    <BoxRow>
      <Rank>{ developer.rank }</Rank>
      <Avatar>
        <Image src={ developer.avatar } />
      </Avatar>
      <Developer>
        <Info>
         <DeveloperNameInfo name={ developer.name } url={ developer.url} username={ developer.username }/>
         <DeveloperRepoInfo popularRepo={ developer.popularRepository } />
        </Info>
        <Follow>
          <div>
            <PrimaryButton>Follow</PrimaryButton>
          </div>
          </Follow>
      </Developer>
    </BoxRow>
  )
}