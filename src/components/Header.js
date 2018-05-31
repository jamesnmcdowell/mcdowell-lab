import React from 'react';
import { Link } from 'react-static';
import HamburgerMenu from './HamburgerMenu';
import { media, Container } from './Media';
import styled from 'styled-components';
import Headroom from 'react-headroom';

let Header = ({ headerActive, toggleMenu, MenuOpen}) =>
    <Headroom style={{ zIndex: 8 }}>
        <HeaderStyled disable={true} className={(MenuOpen) ? " menu-open" : ""} id="header">
        <Container>
            <HeaderFlex>
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
                <HamburgerMenu toggleMenu={toggleMenu} MenuOpen={MenuOpen}/>
            </HeaderFlex>
        </Container>
    </HeaderStyled>
    </Headroom>

export default Header;

let HeaderStyled = styled.header`
    width: 100%;
    height: 45px;
    z-index: 950;
    color: #ffffff;
    background-color: rgba(84, 84, 84,1);
    text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.83);
    transition: transform 0.25s ease;   
    &.menu-open {
        
        transform: translate(-15.563em, 0);
        transition: transform 0.25s ease;   
    }
`;
let HeaderFlex = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

let Nav = styled.nav`
    display: none;
    color: #ffffff;
    ${media.desktop`display: block;`}
`;

let LinkBase = styled(Link) `
 
`;
let LinkLogo = styled(LinkBase) `
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

let LinkNav = styled(LinkBase) `
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