import React from 'react';
import { Link } from 'react-static';
import styled from 'styled-components';
import { media, Container } from './Media';
import { research } from '../db.json';

let Alert = () =>
   
    <AlertStyled className="homepage-alert" >
        <Container>
            {
                research.alert &&
            <AlertWrap>    
                <p> {research.alert} </p>
                <LinkStyled to="/news">  
                    <button> Learn More </button>
                </LinkStyled>
            </AlertWrap>
            }
        </Container>
    </AlertStyled>

export default Alert;

let AlertStyled = styled.div`
    background-color: rgb(84, 84, 84);
    width:100%;
    color: #ffffff; 
    text-align: center;  
    p {
        font-size:2rem;
        margin-top: 1rem;
    }
    button {
        background-color:#F8E1A6;
        background-color:#ECA913;
        background-color: white;
        border: none;
        padding: 1rem;
        border-radius: 2px;
        margin-bottom: 1.3rem;
        letter-spacing: .05rem;
        color: #4A4A4A;
        
    }
`;

let LinkStyled = styled(Link)`
  
`;
let AlertWrap = styled.div`
    padding: 1.5em 0;
`;
