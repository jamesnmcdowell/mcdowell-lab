import React from 'react';
import styled from 'styled-components';
import { media } from './Media';

let HamburgerMenu = () =>
    <Hamburger className="button_container toggle-animation" id="toggle-button">
        <Line1 className="top"></Line1>
        <Line2 className="middle"></Line2>
        <Line3 className="bottom"></Line3>
    </Hamburger>


let Hamburger = styled.div`
    position: relative;
    height: 20px;
    width: 25px;
    cursor: pointer;
    transition: opacity .25s ease;
    &:hover{
        opacity: .7;
    }
    ${media.desktop`display: none;`}
`;

let Line = styled.span`
    background: #FFF;
    border: none;
    height: 3px;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    -webkit - transition: all .35s ease;
    transition: all .35s ease;
    cursor: pointer;
`;

let Line1 = styled(Line)`
    top: 0;
    &.active {
        transform: translateY(8px) translateX(0) rotate(45deg);
        background: #FFF;
    }
`;

let Line2 = styled(Line)`
    top: 8px;
    &.active {
        opacity: 0;
        background: #FFF;
    }
`;

let Line3 = styled(Line)`
    top: 16px;
    &.active {
        transform: translateY(-8px) translateX(0) rotate(-45deg);
        background: #FFF;
    }
`;


export default HamburgerMenu;

