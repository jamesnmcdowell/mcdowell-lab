import React from 'react';
import { Link } from 'react-static';
import styled from 'styled-components';
import ClickOutside from 'react-click-outside';

let MobileMenu = ({ menuOpen, toggleMenu }) =>
    <ClickOutside onClickOutside={() => { if (menuOpen) {toggleMenu(!menuOpen);} }}>
    <CanvasMenu className={(menuOpen) ? "mobile-menu-wrapper menu-open" : "mobile-menu-wrapper"}>
        <ul className="mobile-menu-list">
            <li>
                <Link to="/" onClick={() => { toggleMobileMenu(); }}>
                    <div>
                        <span>Home</span>
                    </div>
                </Link>
            </li>
            <li>
                <hr />
            </li>
            <li>
                <Link to="/become-a-vendor" onClick={() => { toggleMobileMenu(); }}>
                    <div>
                        <span>Become a Vendor</span>
                    </div>
                </Link>
            </li>
        </ul>
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
    transform: translate(0px, 0px);
    transition: transform 0.25s ease;

  
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