import React from 'react';
import styled from 'styled-components';
import HeroImage from '../assets/cubessmallfinal.png';
import ArrowDown from './ArrowDown';
import { media, Container, responsiveFontSize } from './Media';

let Hero = () => 
    <HeroStyled id="hero" className="hero mobile-height-fix" >
        <HeroContainer>
        <PrimaryTitle className='hero-title' id="logo">Prof. Matthew McDowell's Lab</PrimaryTitle>
        <SecondaryTitle>Georgia Institute of Technology</SecondaryTitle>
        </HeroContainer>  
        <ArrowDown/>
    </HeroStyled>

export default Hero;

let HeroStyled = styled.div`
    width: 100%;
    position: relative;
    background-image: url(${HeroImage});
    background-repeat: no-repeat;
    background-size:cover;
    background-position: 10% 54%;
    min-height: 400px;
    height: calc(100vh - 45px);  
`;
let HeroContainer = styled.div`
    padding: 0 5%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    ${media.tablet`
    width: 70%;
    margin: 0 auto;
    `}   
`;

let PrimaryTitle = styled.h1`
    font-size: ${responsiveFontSize({ minFont: 70, maxFont: 200 }) };
    letter-spacing: .1rem;
    font-size: 4rem;
    ${media.tablet`
    font-size: 6.5rem;
    `}     
    font-weight: 200; 
    margin: 0;
    color: #ffffff;
    margin-bottom: 2rem;
`;
let SecondaryTitle = styled.h2`
    font-size: 1.5em;
    letter-spacing: .1rem;
    ${media.tablet`
    font-size: 3.5rem;
    `}    
    font-weight: 200;
    margin: 0;
    color: #ffffff;
`;