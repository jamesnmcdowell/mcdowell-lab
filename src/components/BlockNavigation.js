import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-static';
import profilePicture from '../assets/McDowell_2015final.jpg';
import publications from '../assets/PapersFigurefinal.png';
import twitterOverlay from '../assets/twitterOverlay.svg';
import { Timeline } from 'react-twitter-widgets'
import { withState } from 'recompose';
import { media } from './Media';
import AspectRatio from 'react-aspect-ratio';

let BlockNavigation = ({ toggleOverlay, twitterOverlayActive }) =>
    <BlockNav>
        <Bio to="/bio">
            <img src={profilePicture}/>
        </Bio>
        <Publications to="/publications">
            <img src={publications} />
        </Publications>
       
        <TwitterBlock>
            {twitterOverlayActive &&
                <TwitterOverlay onClick={() => { toggleOverlay(!twitterOverlayActive); }}>
                    <img src={twitterOverlay} />
                </TwitterOverlay>
            }
            <EmbedContainer>
                <Timeline
                    dataSource={{
                        sourceType: 'profile',
                        screenName: 'McDowell_Lab'
                    }}
                    options={{
                        username: 'McDowell_Lab',
                        height: '100%'
                    }}
                    onLoad={() => console.log('Timeline is loaded!')}
                />
            </EmbedContainer>  
        </TwitterBlock>
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
    grid-auto-rows: 1fr auto 1fr auto 1fr auto; 
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
    grid-auto-rows: 1fr auto 1fr auto 1fr auto; 
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
let TwitterBlock = styled.div`
    position: relative;
    grid-area: twitter;
`;
let TwitterOverlay = styled.div`
	color:white;
	display:block;
	position:absolute;
	right:0;
    left: 0;
    bottom: 0;
	z-index:2;
	text-align:center;
	opacity: 0.4;
	transition: opacity .5s ease-in-out; 
	visibility: visible;
	-webkit-overflow-scrolling: touch;
	&:hover {
		opacity: 0.6; 
	}

`;
let EmbedContainer = styled.div`
	display: block;
	box-sizing: border-box;
	position:relative;
    width: 100%;
    height: 100%;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	overflow-y: hidden;
	z-index:1;
	-webkit-perspective: 0;
	margin: 0 0 0 0;
	text-align: center;
    overflow-x: hidden;
	div {
     height: 100%;
     
    }
`;


let BlockNavigationLocalState = withState(
    "twitterOverlayActive",
    "toggleOverlay",
    true
)(BlockNavigation);

export default BlockNavigationLocalState;