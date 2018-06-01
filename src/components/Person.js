import React from 'react'
import Shell from './Shell';
import { Link } from 'react-static';
import styled from 'styled-components';
// import * as images from '../assets/students/';

let Person = ({student}) =>

<div class="profile-container">
    {/* <img src={require(`../assets/students/{NehaKondekar_croptransp.png}`)} /> */}
    <Img src={require(`../assets/students/${student.avatar}`)} />
    <div class="profile-info">
        <h5>{student.name}</h5>
        <p>{student.type}</p>
        <p>{student.department}</p>
    </div>
</div>

export default Person;

let Img = styled.img`
    width: 100%;
`;