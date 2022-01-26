import { FunctionComponent } from "react"
import styled from 'styled-components';

const Container = styled.div`
padding-top: 40px!important;
padding-bottom: 60px!important;
position: relative!important;
margin-left: auto;
margin-right: auto;
max-width: 1012px;
@media (min-width: 1012px) {
  padding-left: 16px!important;
  padding-right: 16px!important;
}
@media (min-width: 544px) {
  padding-left: 40px!important;
  padding-right: 40px!important;
}
`;


export const Box: FunctionComponent = (props) => {
  return (
  <Container>
      { props.children }
  </Container>
  )
}