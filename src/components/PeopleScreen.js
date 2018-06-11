import React from 'react'
import Shell from './Shell';
import { Link } from 'react-static';
import styled from 'styled-components';
// import GoogleMaps from './GoogleMaps';
import heroImage from '../assets/students/McDowell_Group-crop.jpg';
import { team } from '../db.json';
import TitleBackgroundImage from './TitleBackgroundImage';
import Person from './Person';
import { media, Container } from './Media';

let PeopleScreen = () =>
    <div>
        <TitleBackgroundImage title={team.title} background={heroImage} />
        <Container vert>
        <StudentGrid>
        {  
            team.students.map((student) =>
                <Person student={student} />
            )
        }
        </StudentGrid>
        </Container>
        <TextSection> 
            <Container>
            <Title> {team.ctaTitle} </Title >
            <span> {team.ctaBody} </span>
            </ Container>
        </TextSection>
        {/* <GoogleMaps /> */}
       
    </div>

export default PeopleScreen;

let StudentGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 3.5rem;
`;
let TextSection = styled.section`
    text-align: center;
    background-color: rgba(229, 229, 229,.3);
    padding: 8rem 0;
`;
let Title = styled.h2`
    padding: 0;
    font-weight: 200;
    font-size: 3.5rem;
    margin-top: 0;
`;


