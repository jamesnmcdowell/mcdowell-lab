import React from 'react'
import Shell from './Shell';
import { Link } from 'react-static';
import styled from 'styled-components';
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
            <SchoolContainer>
            {
                profile.schools.map((school) => 
                        <SchoolLink target="_blank" to={school.url}> <span> {school.name} &#128279; </span> </SchoolLink>
                )
            }
            </SchoolContainer>
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
    text-align: center;
    span {
        line-height: 2;
    }
`;
let TitleMain = styled.h1`
    font-weight: 200;
    font-size: 3rem;
    ${media.tablet`
    font-size: 3.5rem;
    `}
    ${media.desktop`
    font-size: 4rem;
    `}

    text-align: center;
    margin: 0;
`;
let TitleMinor = styled.h2`
    font-weight: 200;
    font-size: 2.4rem;
    ${media.tablet`
    font-size: 2.8rem;;
    `}
    text-align: center;
    margin-top: 0;
   
`;
let SocialGroup = styled.div`
    display: flex; 
`;
let SchoolLink = styled(Link)`
    text-decoration: none;
    color: black;
`;
let SchoolContainer = styled.div`
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
`;

let SocialLink = styled(Link)`
    background-color: ${ props => props.bgColor};
    padding: 1.5rem;
    margin-left: 10px;
    display: flex;
    opacity: 1;
    transition: opacity .4s ease;
    
    &:hover {
        opacity: .7;
        transition: opacity .4s ease;    
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
    padding: 2rem 0 3rem 0;
`;