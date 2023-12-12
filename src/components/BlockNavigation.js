import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-static';
import profilePicture from '../assets/McDowell_Crop2.jpg';
import publications from '../assets/PapersFigurefinal.png';
import { media } from './Media';
import TwitterFeed from './TwitterFeed';

let BlockNavigation = () =>
    <BlockNav>
        <Bio id="relative-height" to="/bio">
            <img src={profilePicture}/>
        </Bio>
        <Publications to="/publications">
            <img src={publications} />
        </Publications>
        <TwitterFeedStyled/>
        <BlockTitle1>Prof. McDowell</BlockTitle1>
        <BlockTitle2>Publications</BlockTitle2>
        <BlockTitle3>Latest Tweets</BlockTitle3>
    </BlockNav> 
  
let BlockTitle = styled.h4`
    font-weight: 200;
    font-size: 3.0rem;
    text-align: center;
`;
let BlockTitle1 = styled(BlockTitle)`
    grid-area: bio-title;
`;
let BlockTitle2 = styled(BlockTitle)`
    grid-area: pub-title;                    
`;
let BlockTitle3 = styled(BlockTitle)`
    grid-area: twitter-title;
`;
let BlockNav = styled.div`
	display: grid;
	grid-gap: 1em;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto 1fr auto 1fr auto;
    img {
		width: 100%;
    }
    grid-template-areas: 
            "bio"
            "bio-title"
            "pub"
            "pub-title"
            "twitter"
            "twitter-title";
    ${media.tablet`
    grid-template-columns: 1fr 1fr 1fr ;
    grid-template-rows: 1fr;
    grid-template-areas: 
            "bio pub twitter"
            "bio-title pub-title twitter-title"; 
    `}         
`;
let Bio = styled(Link) `
    grid-area: bio;
`;
let Publications = styled(Link) `
    grid-area: pub;
`;
let TwitterFeedStyled = styled(TwitterFeed)`
    grid-area: twitter;
`;

export default BlockNavigation;