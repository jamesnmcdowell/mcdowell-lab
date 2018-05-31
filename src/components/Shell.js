import React from 'react';
import Header from './Header';
import Footer from './Footer';
import styled from 'styled-components';
import MobileMenu from './MobileMenu';
import { withState } from 'recompose';

let Shell = ({ children, headerActive, MenuOpen, toggleMenu }) =>
    <Site className="Site" className={(MenuOpen) ? "mobile-menu-wrapper menu-open" : "mobile-menu-wrapper"}>
        <SiteHeader className="Site-header" headerActive={headerActive} toggleMenu={toggleMenu} MenuOpen={MenuOpen} />
        <SiteContent className="Site-content">
        {/* <MobileMenu menuOpen={MenuOpen} toggleMenu={toggleMenu} /> */}
        { children } 
        </SiteContent>
        {/* <LoginModal modalOpen={modalOpen} /> */}
        <SiteFooter className="Site-footer" />
    </Site>



let ShellLocalState = withState(
    "MenuOpen",
    "toggleMenu",
    false
)(Shell);

export default ShellLocalState;

let Site = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    transform: translate(0px, 0px);
    transition: transform 0.25s ease; 
    &.menu-open {
        transform: translate(-15.563em, 0px);
        transition: transform 0.25s ease;
    }
`;

let SiteHeader = styled(Header)`
    flex: 0 0 auto;
`;

let SiteContent = styled.div`
    flex: 1 0 auto;
    width: 100%;
`;

let SiteFooter = styled(Footer)`
    flex: 0 0 auto;
`;



