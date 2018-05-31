import React from 'react';
import { Link as LinkOrg } from 'react-static';
import styled from 'styled-components';
import ClickOutside from 'react-click-outside';
import { media, Container } from './Media';
import HamburgerMenu from './HamburgerMenu';

let MobileMenu = ({ MenuOpen, toggleMenu }) =>
    <ClickOutside onClickOutside={() => { if (MenuOpen) {toggleMenu(!MenuOpen);} }}>
    <CanvasMenu className={(MenuOpen) ? " menu-open" : ""}>
    <Container>
        <HamburgerWrapper>
            <HamburgerMenu burgerClosed={true} toggleMenu={toggleMenu} MenuOpen={MenuOpen}/>
        </HamburgerWrapper>
        <MenuList className="mobile-menu-list">
            <li>
                <Link to="/" onClick={() => { toggleMobileMenu(); }}>
                    <div>
                        <span>Research</span>
                    </div>
                </Link>
            </li>
            <li>
                <Link to="/bio" onClick={() => { toggleMobileMenu(); }}>
                    <div>
                        <span>Bio</span>
                    </div>
                </Link>
            </li>
            <li>
                <Link to="/people" onClick={() => { toggleMobileMenu(); }}>
                    <div>
                        <span>People</span>
                    </div>
                </Link>
            </li>
            <li>
            <Link to="/publications" onClick={() => { toggleMobileMenu(); }}>
                    <div>
                        <span>Publications</span>
                    </div>
                </Link>
            </li>
            <li>
            <Link to="/news" onClick={() => { toggleMobileMenu(); }}>
                    <div>
                        <span>News</span>
                    </div>
                </Link>
            </li>
        </MenuList>
    </Container>    
    </CanvasMenu>
    </ClickOutside>

export default MobileMenu;

let CanvasMenu = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    width: 15.625em;
    right: -15.625em;
    height: 100%;
    background:dimgrey;
    transform: translate(0, 0);
    transition: transform 0.25s ease;
    z-index: 10;
    
    &.menu-open {
        transform: translate(-15.563em, 0);
        transition: transform 0.25s ease;
        border: 0px dimgrey solid;   
    }
`;
let MenuList = styled.ul`
    list-style: none;
    padding: 0 ;
    margin: 0;
`;
let HamburgerWrapper = styled.div`
    height:45px;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    li {
        padding: 0 1rem;
    }
`;
let Link= styled(LinkOrg)`
    line-height: 3em;
    font-weight: 300;
    font-size: 1.1em;
    font-size: 1.8rem;
    text-decoration: none;
    
    span {
        color: white;
        height: 20px;
    }
`;


// <div id="off-canvas-menu">
//     <nav >
//         <ul>
//             <li><a href="index.html">Research</a></li>
//             <li><a class="page-selected" href="bio.html">Bio</a></li>
//             <li><a href="People.html">People</a></li>
//             <li><a href="publications.html">Publications</a></li>
//             <li><a href="news.html">News</a></li>
//         </ul>
//     </nav>
// </div>