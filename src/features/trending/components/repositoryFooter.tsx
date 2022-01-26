import { FunctionComponent } from "react";
import styled from "styled-components";
import { IBiltBy } from "../../../app/model/repository.model";
import { Fork, Star } from "../../gui/icons/icons";
import { Avatar } from "./avatar";

const Wrapper = styled.div`
  font-size: 12px;
  margin-top: 8px;
  color: #8b949e;
`;

const InlineItem = styled.span`
  display: inline-block!important;
  margin-right: 16px!important;
  margin-left: 0!important;
`;

const FloatItem = styled.span`
  display: inline-block!important;
  @media (min-width: 544px) {
    float: right;
  }
`;

export const RepositoryFooter: FunctionComponent <{
  language: string,
  stars: number,
  forks: number,
  starsSince: number,
  since: string
  bultBy: IBiltBy[]
}> = ({
  language,
  stars,
  forks,
  bultBy,
  starsSince,
  since
}) => {
  return (
    <Wrapper>
      <InlineItem>{ language }</InlineItem>
      <InlineItem> <Star withMargin={ false }/> { stars.toLocaleString() }</InlineItem>
      <InlineItem> <Fork /> { forks.toLocaleString() }</InlineItem>
      <InlineItem> Built by { bultBy.map((builtBy, index) => <Avatar builtBy={ builtBy } key={ index }/>) }</InlineItem>
      <FloatItem> <Star withMargin={ false }/> { starsSince.toLocaleString() + ' ' + since }</FloatItem>
    </Wrapper>
  )
}