import { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
margin-bottom: 0!important;
display: block;

`;

const NavigationLink = styled.div`
display: inline-block;
  a {
    background-color: transparent;
    border: 1px solid #1f6feb;
    color: #c9d1d9;
    z-index: 2;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    padding: 7px 16px;
    position: relative;
    text-decoration: none;
  }
  &:last-child a {
    border-bottom-right-radius: 6px;  
    border-top-right-radius: 6px;
  }
  &:first-child a {
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px; 
  }
`;

const activeStyle = {
  backgroundColor: '#1f6feb',
  borderColor: '#388bfd',
  color: '#f0f6fc'
}

export const Navigation: FunctionComponent = () => {
  return(
    <Nav>
      <NavigationLink>
        <NavLink to='/' exact activeStyle={activeStyle}>Repositories</NavLink>
      </NavigationLink>
      <NavigationLink>
        <NavLink to='/developers' exact activeStyle={activeStyle}>Developers</NavLink>
      </NavigationLink>
    </Nav>
  )
}