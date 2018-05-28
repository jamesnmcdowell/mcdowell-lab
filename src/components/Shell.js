import React from 'react';
import Header from './Header';
import Footer from './Footer';
import styled from 'styled-components';
// import MobileMenu from './MobileMenu';

let Shell = ({ children, menuOpen, modalOpen }) =>
    <Site className="Site">
        <SiteHeader className="Site-header" />
        <SiteContent className="Site-content">
        {/* <MobileMenu menuOpen={menuOpen} /> */}
            {children}
        </SiteContent>
        {/* <LoginModal modalOpen={modalOpen} /> */}
        <SiteFooter className="Site-footer" />
    </Site>

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

export default Shell;

