import React from 'react'
import Shell from './Shell';
import { Link } from 'react-static';
import styled from 'styled-components';
// import * as images from '../assets/students/';

let Person = ({student}) =>

<div class="profile-container">
    {/* <img src={require(`../assets/students/{NehaKondekar_croptransp.png}`)} /> */}
    <Img src={require(`../assets/students/${student.avatar}`)} />
    <Info>
        <Title>{student.name}</Title>
        <Text>{student.type}</Text>
        <Text>{student.department}</Text>
    </Info>
</div>

export default Person;

let Img = styled.img`
    width: 100%;
`;
let Info = styled.div`
    position: relative;
    top:-20px;
    background-color: #eeb211; 
    box-shadow: 0px 7px 29px 2px rgba(0,0,0,0.47);
    text-align: center;
    display: flex;
    flex-direction: column;
    padding: 1rem 1rem;
`;
let Title = styled.h5`
    color: white;
    font-size: 1.7rem;
    font-weight: 300;
    margin: 0;
`;
let Text = styled.span`

`;