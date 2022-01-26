import { FunctionComponent } from "react";
import styled from "styled-components";
import { IRepository } from "../../../app/model/repository.model";
import { PrimaryButton } from "../../gui/components/button";
import { Star } from "../../gui/icons/icons";
import { RepositoryFooter } from "./repositoryFooter";
import { RepositoryLink } from "./repositoryLink";


const BoxRow = styled.article`
  display: block;
  border-top: 1px solid #21262d;
  list-style-type: none;
  margin-top: -1px;
  padding: 16px;
  &:first-of-type {
    border-top-color: transparent;
  }
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ButtonLabel = styled.span`
display: none;
@media (min-width: 768px) {
  display: inline!important;
}
`;

const Description = styled.p`
  padding-right: 24px;
  margin-bottom: 4px;
  margin-top: 4px;
  color: #8b949e;
  width: 75%;
`;

export const RepositoryBoxRow: FunctionComponent<{repository: IRepository, since: 'Today' | 'This week' | 'This month'}> = ({repository, since}) => {
  return (
    <BoxRow>
      <Flex>
        <RepositoryLink repositoryName={ repository.repositoryName }
                        userName={ repository.username }
                        url={repository.url}>    
        </RepositoryLink>
        <PrimaryButton>
          <Star withMargin={ true }></Star>
          <ButtonLabel>Star</ButtonLabel>
        </PrimaryButton>
      </Flex>
      <Description>
        { repository.description }
      </Description>
      <RepositoryFooter bultBy={ repository.builtBy }
                        forks={ repository.forks}
                        language={ repository.language }
                        stars={ repository.starsSince }
                        starsSince={ repository.starsSince }
                        since={ since.toLowerCase() }
                        />
    </BoxRow>

  )
}