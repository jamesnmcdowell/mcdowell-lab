import React from 'react'
import Shell from './Shell';
import { Link } from 'react-static';
import styled from 'styled-components';
import db from '../db.json';
import ResumeBlock from './ResumeBlock';
import ProfileBlock from './ProfileBlock';
import { media, Container } from './Media';

let BioScreen = () =>
    <Container>
    <BioWrapper>
        <ProfileBlock profile={db.profile}/>   
        <div>
            {
                db.resume.map((info) => <ResumeBlock info={info}/>)
            }
        </div>
    </BioWrapper>
    </Container>

export default BioScreen;


let ResumeTitle = styled.h4`
    text-transform: uppercase;
    font-size: 1.4em;
    font-weight: 200;
`;
let FlexDiv = styled.div`
    display: flex;
`;
let BioWrapper = styled.div`
    display: grid;
    
    grid-column-gap: 4em;
    ${media.tablet`
        grid-template-columns: 1fr 1fr;
    `} 
    div {
       
    }
`;

let FlexDivImg = styled(FlexDiv)`
    align-items: center;
`;
let FlexLeft = styled.div`
    flex-basis: 100px;
    img {
        width: 40px;
    }
`;
let FlexRight = styled.div`
    display: flex;
    flex-direction: column;
`;