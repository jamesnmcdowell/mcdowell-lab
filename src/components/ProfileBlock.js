import React from 'react'
import Shell from './Shell';
import { Link } from 'react-static';
import styled from 'styled-components';
import avatar from '../assets/McDowell_smallfinal.jpg';
import gScholar from '../assets/googlescholar.svg';
import twitter from '../assets/twitterlogo.svg';
import email from '../assets/mail.svg';
import { media, Container } from './Media';

let ProfileBlock = ({ profile }) =>
    <ProfileWrapper>
        <Container>
        <FlexContainer>
            <h1> {profile.name} </h1>
            <h3> {profile.position} </h3>
            <Avatar src={require(`../assets/${profile.avatar}`)} />
            {
                profile.schools.map((school) => 
                        <Link target="_blank" href={school.url}> <span> {school.name} &#128279; </span> </Link>
                )
            }
            <span>{profile.university}</span>
            <span>{profile.email}</span>
            <span>{profile.building}</span>
            <span>{profile.phone}</span>
            <UniLogo src={require(`../assets/${profile.universityLogo}`)} />
            <SocialGroup>
            {
                profile.social.map((item) =>
                    <SocialLink  to={item.url} bgColor={item.color}  >
            
                            <img src={require(`../assets/${item.icon}`)} />
                
                    </SocialLink>
                )
            }
            </SocialGroup>
        </FlexContainer>
        </Container>
    </ProfileWrapper>
export default ProfileBlock;

let ProfileWrapper = styled.div`
    
    ${media.tablet`
        background-color: #F6D685;
        background: linear-gradient(to bottom, #1e5799 0%,#ffffff 0%,#f5d376 89%,#f5d376 91%,#f5d376 91%,#eeb211 100%,#d6d6d6 100%);
        align-self: start;
        padding: 2rem 0;
    `}   
`;
let FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
let SocialGroup = styled.div`
    display: flex; 
`;
let SocialLink = styled(Link)`
    background-color: ${ props => props.bgColor};
    padding: 2rem;
    flex: 1 1 200px;
    div {
        
    }
    img {
        width:40px;
        align-self: flex-end;
        
    }
`;
let GScholar = styled(SocialLink)`
    
`;
let Twitter = styled(SocialLink)`
    width:50px;
`;
let Email = styled(SocialLink)`
    width:50px;
`;
let Avatar = styled.img`
    width: 100%;
    border-radius: 1em;
    margin-bottom: 1em;
`;
let UniLogo = styled.img`
    width: 100%;
`;