import React from 'react'
import Shell from './Shell';
import { Link } from 'react-static';
import styled from 'styled-components';
// import employment from '../assets/employment.svg';
import db from '../db.json';
import ResumeBlock from './ResumeBlock';

let BioScreen = () => 
    <div>
        <br/>
        <h1>Bio </h1>
        {/* <img src={require('../assets/employment.svg')}/> */}
        {
            db.resume.map((info) => <ResumeBlock info={info}/>)
        }
        
       
    </div>

export default BioScreen;

let ResumeTitle = styled.h4`
    text-transform: uppercase;
    font-size: 1.4em;
    font-weight: 200;
`;

let FlexDiv = styled.div`
    display: flex;
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