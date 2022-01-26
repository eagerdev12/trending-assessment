import { FunctionComponent } from "react"
import styled from "styled-components"
import { IPopularRepository } from "../../../app/model/developer.model";
import { Flame, PcIcon } from "../../gui/icons/icons";

const Column = styled.div`
@media (min-width: 768px) {
    width: 50%;
}
`;

const Wrapper = styled.div`
@media (min-width: 768px) {
  margin-bottom: 0;
  margin-top: 0;
}
`;

const PopularRepo = styled.div`
  text-transform: uppercase;
  font-size: 12px;
  margin-bottom: 4px;
  color: #8b949e;
`;

const RepoTitle = styled.h1`
  line-height: 1.25;
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 0;
  margin-top: 0;
`;

const TitleLink = styled.a`
  display: flex;
  align-items: center;
  vertical-align: top;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #58a6ff;
  text-decoration: none;
  background-color: transparent;
`;

const Description = styled.div`
  font-size: 12px;
  margin-top: 4px;
  color: #8b949e;
`;

export const DeveloperRepoInfo: 
FunctionComponent<{ popularRepo: IPopularRepository }> = ({ popularRepo }) => {
   return(
     <Column> 
      <Wrapper>
        <PopularRepo>
          <Flame/>
          Popular repo
        </PopularRepo>
        <TitleLink href={ popularRepo.url }><PcIcon withMargin={ true } />
          <RepoTitle>
            { popularRepo.repositoryName }
          </RepoTitle>
        </TitleLink>
        <Description>{ popularRepo.description }</Description>
      </Wrapper>
     </Column>
   )
 }