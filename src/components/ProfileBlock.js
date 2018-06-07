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
            <TitleMain> {profile.name} </TitleMain>
            <TitleMinor> {profile.position} </TitleMinor>
            <Avatar src={require(`../assets/${profile.avatar}`)} />
            {
                profile.schools.map((school) => 
                        <SchooLink target="_blank" to={school.url}> <span> {school.name} &#128279; </span> </SchooLink>
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
                            <SocialLink target="_blank" to={item.url} bgColor={item.color}  >
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
    span {
        line-height: 2;
    }
`;
let TitleMain = styled.h1`
    font-weight: 200;
    font-size: 4rem;
    text-align: center;
    margin-bottom: 0;
`;
let TitleMinor = styled.h1`
    font-weight: 200;
    font-size: 3rem;
    text-align: center;
   
`;
let SocialGroup = styled.div`
    display: flex; 
`;
let SchooLink = styled(Link)`
    text-decoration: none;
    color: black;
`;
let SocialLink = styled(Link)`
    background-color: ${ props => props.bgColor};
    padding: 1.5rem;
    margin-left: 10px;
    display: flex;
    div {
        
    }
    img {
        width:35px;
        align-self: center;
        
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
    padding: 3rem 0;
`;