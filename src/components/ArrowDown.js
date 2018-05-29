import React from 'react';
import styled, { keyframes } from 'styled-components';

let ArrowDown = () =>

<Arrows className="arrows" onClick={() => {
    scrollTo(document.querySelector('.homepage-one'), {
        offset: 1000,
        duration: 1000
    })
}}>
    <Path1 d="M0 0 L30 32 L60 0"></Path1>
    <Path2 d="M0 20 L30 52 L60 20"></Path2>
    <Path3 d="M0 40 L30 72 L60 40"></Path3>
</Arrows>

let Arrows = styled.svg`
    width: 60px;
	height: 80px;
	position:absolute;
	left: 50%;  
	margin-left: -30px;
    bottom: 10px;
    cursor: pointer;
`;

let arrowAnimate = keyframes`
    0% {opacity:0}
    40% {opacity:1}
    80% {opacity:0}
    100% {opacity:0}
`;

let Path = styled.path`
    stroke: #f5f5f5;
    fill: transparent;
    stroke-width: 2px;	
    animation: ${arrowAnimate} 3s infinite;
`;
let Path1 = styled(Path) `
    animation-delay:-1.5s;
`;
let Path2 = styled(Path) `
    animation-delay:-0.75s;
`;
let Path3 = styled(Path) `
    animation-delay:0s;
`;

export default ArrowDown;

