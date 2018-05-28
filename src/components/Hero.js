import React from 'react';
import styled from 'styled-components';
import HeroImage from '../assets/cubessmallfinal.png';

let Hero = () =>
    <HeroStyled className="hero mobile-height-fix" >
        <HeroContainer>
        <PrimaryTitle className='hero-title' id="logo">Prof. Matthew McDowell's Lab</PrimaryTitle>
        <SecondaryTitle>Georgia Institute of Technology</SecondaryTitle>
        </HeroContainer>  
        <Arrows className="arrows" id="homepage-scroll">
            <path className="a1" d="M0 0 L30 32 L60 0"></path>
            <path className="a2" d="M0 20 L30 52 L60 20"></path>
        </Arrows>
    </HeroStyled>

let HeroStyled = styled.div`
    width: 100%;
    position: relative;
    background-image: url(${HeroImage});
    background-repeat: no-repeat;
    background-size:cover;
    background-position: 40% 54%;
    min-height: 400px;
    height: 100vh;  
`;
let HeroContainer = styled.div`
    padding: 0 5%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
   
`;

let Arrows = styled.svg`
    width: 60px;
	height: 60px;
	position:absolute;
	left: 50%;  
	margin-left: -30px;
    bottom: 10px;
    path {
        stroke: #f5f5f5;
        fill: transparent;
        stroke-width: 3px;
    }
`;

let PrimaryTitle  = styled.h1`
    font-size: 3.2em; 
    font-weight: 200; 
    margin: 0;
    color: #ffffff;
    margin-bottom: 2rem;
`;
let SecondaryTitle = styled.h2`
    font-size: 1.5em; 
    font-weight: 200;
    margin: 0;
    color: #ffffff;
`;

export default Hero;