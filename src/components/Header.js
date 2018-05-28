import React from 'react';
import { Link } from 'react-static';
import HamburgerMenu from './HamburgerMenu';
import { largeScreen } from './Media';
import styled from 'styled-components';


let Header = () =>
    <HeaderStyled>
        <div className="container">
        <LinkLogo to="/">
            <h1 className="logo"> McDowell Lab </h1>
        </LinkLogo>
        <Nav>
            <LinkNav to="/" className="page-selected"> Research </LinkNav>
            <LinkNav to="/bio"> Bio </LinkNav>
            <LinkNav to="/people"> People </LinkNav>
            <LinkNav to="/publications"> Publications </LinkNav>
            <LinkNav to="/news"> News </LinkNav>
        </Nav>
       <HamburgerMenu/>
        </div>
    </HeaderStyled>
    
let HeaderStyled = styled.header`
    width: 100%;
    height: 45px;
    position:fixed;
    z-index: 950;
    color: #ffffff;
    background-color: rgba(84, 84, 84,1);
    text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.83);
    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 90%; 
        margin: 0 auto;
    }
`;

let Nav = styled.nav`
    display: none;
    color: #ffffff;
    @media ${largeScreen} {
        display: block;
    }
`;

let LinkBase = styled(Link)`
 
`;
let LinkLogo = styled(LinkBase)`
    width: auto;
    text-decoration: none;
    &:hover{
        opacity: .7;
    }
    &:active{
        
    }
    h1 {
        color: white;
        font-size: 1.5em;
        font-weight: 200;
        line-height: 45px;
        text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.83);
        font-weight: 200;
        padding: 0;
        margin: 0;    
        letter-spacing: .05em;
    }
`;

let LinkNav = styled(LinkBase)`
    text-decoration: none;
    margin-left: 20px;
    color: #ffffff;
    font-weight: 300;
    font-size: 18px;
    transition: all 0.3s; 
    &:hover {
        color: #bababa;      
    }    
`;

export default Header;