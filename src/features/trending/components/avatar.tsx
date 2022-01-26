import { FunctionComponent } from "react";
import styled from "styled-components";
import { IBiltBy } from "../../../app/model/repository.model";

const AvatarAnchor = styled.a`
  display: inline-block
`;

const Image = styled.img`
  border-radius: 50%;
  background-color: rgba(240, 246, 252, .1);
  box-shadow: 0 0 0 1px rgba(240, 246, 252, .1);
  display: inline-block;
  flex-shrink: 0;
  line-height: 1;
  overflow: hidden;
  vertical-align: middle;
  margin-bottom: 4px!important;
  margin-right: 3px;
  border-style: none;
  height: 20px;
  aspect-ratio: auto 20 / 20;
  width: 20px;
`;

export const Avatar: FunctionComponent<{ builtBy: IBiltBy }> = ({ builtBy }) => {
  return (
    <AvatarAnchor href={ builtBy.url }>
      <Image src={ builtBy.avatar }></Image>
    </AvatarAnchor>
  )
}