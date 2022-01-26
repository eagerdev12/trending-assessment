import { FunctionComponent } from 'react'
import styled from 'styled-components'

const Content = styled.div`
background-color: #0d1117;
border: 1px solid #30363d;
border-radius: 6px;
`;

export const BoxContent: FunctionComponent = (props) => {
  return (
    <Content>
      { props.children }
    </Content>
  )
}
