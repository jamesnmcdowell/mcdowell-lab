import React from 'react'
import styled from 'styled-components';

let TitleBackgroundImage = ({ title, background}) =>
    <SectionHero style={{ backgroundImage: `url(${background})` }} class = "mobile-height-fix">
        <SectionTitle> {title} </SectionTitle>
    </SectionHero>

let SectionHero = styled.section`
    background-color: rgba(0, 0, 0, 1);
    text-align: center;
    color: white;
    background-repeat: no-repeat;
    background-size: cover;
    height: 40vh;
    position: relative;
    padding: 0;
    margin: 0;
    width: 100%;
    display: block;
    display: flex;
    justify-content: center;
    align-items: center;
}
`;

let SectionTitle = styled.h1`
    font-weight: 100;
    font-size: 5rem;
}
`;

export default TitleBackgroundImage;