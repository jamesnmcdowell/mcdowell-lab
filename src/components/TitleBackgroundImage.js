import React from 'react'
import styled from 'styled-components';
import { media } from './Media';

let TitleBackgroundImage = ({ title, background, large}) =>
    <SectionHero large={large} style={{ backgroundImage: `url(${background})` }} class = "mobile-height-fix">
        <SectionTitle> {title} </SectionTitle>
    </SectionHero>

let SectionHero = styled.section`
    background-color: rgba(0, 0, 0, 1);
    text-align: center;
    color: white;
    background-repeat: no-repeat;
    background-size: cover;
    height: ${ props => props.large ? "60vh" : "40vh"};
    position: relative;
    background-position: 10% 30%;
    padding: 0;
    margin: 0;
    width: 100%;
    display: block;
    display: flex;
    justify-content: center;
    align-items: center;
`;

let SectionTitle = styled.h1`
    font-weight: 200;
    font-size: 4rem;
    letter-spacing: .1rem;
    ${media.tablet`
    font-size: 5rem;
    `}  
`;

export default TitleBackgroundImage;