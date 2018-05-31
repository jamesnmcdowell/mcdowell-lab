import React from 'react';
import Header from './Header';
import Footer from './Footer';
import styled from 'styled-components';
import MobileMenu from './MobileMenu';
import { withState } from 'recompose';
import { OffCanvas, OffCanvasMenu, OffCanvasBody } from 'react-offcanvas';


let Shell = ({ children, headerActive, MenuOpen, toggleMenu }) =>
    <Site className="Site" className={(MenuOpen) ? "mobile-menu-wrapper menu-open" : "mobile-menu-wrapper"}>
        <SiteHeader className="Site-header" headerActive={headerActive} toggleMenu={toggleMenu} MenuOpen={MenuOpen} />
        <SiteContent className={(MenuOpen) ? " Site-content menu-open" : "Site-content"} toggleMenu={toggleMenu} MenuOpen={MenuOpen}> 
            {children}
        </SiteContent>
        <MobileMenu MenuOpen={MenuOpen} toggleMenu={toggleMenu} /> 
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



