import React from 'react'
import Shell from './Shell';
import { Link } from 'react-static';
import styled from 'styled-components';
import GoogleMaps from './GoogleMaps';
import heroImage from '../assets/students/McDowell_Group-crop.jpg';
import { team } from '../db.json';
import TitleBackgroundImage from './TitleBackgroundImage';
import Person from './Person';

let PeopleScreen = () =>
    <div>
        <TitleBackgroundImage title={team.title} background={heroImage} />
        <StudentGrid>
        {  
            team.students.map((student) =>
                <Person student={student} />
            )
        }
        </StudentGrid>
        <GoogleMaps />
       
    </div>

export default PeopleScreen;

let StudentGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 1rem;
`;
