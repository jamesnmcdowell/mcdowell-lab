import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-static';
import profilePicture from '../assets/McDowell_2015final.jpg';
import publications from '../assets/PapersFigurefinal.png';
import twitterOverlay from '../assets/twitterOverlay.svg';
import { Timeline } from 'react-twitter-widgets'
import { withState } from 'recompose';


let BlockNavigation = ({ toggleOverlay, twitterOverlayActive }) =>
    <BlockNav>
        <Link to="/bio">
            <img src={profilePicture} id="relative-height" />
            <h4>Prof. McDowell</h4>
        </Link>
        <Link to="/publications">
            <img src={publications} />
            <h4>Publications</h4>
        </Link>
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
                        height: '400'
                    }}
                    onLoad={() => console.log('Timeline is loaded!')}
                />
            </EmbedContainer>
            <h4 className="tweet-title">Latest Tweets</h4>
        </TwitterBlock>
    </BlockNav> 

let BlockNav = styled.div`
	display: grid;
	grid-gap: 1em;
	grid-template-columns: 1fr 1fr 1fr;
	img {
		width: 100%;
	}
`;

let TwitterBlock = styled.div`
	position: relative;
`;

let TwitterOverlay = styled.div`
	color:white;
	display:block;
	position:absolute;
	right:0;
	left: 0;
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
	
	.twitter-timeline {
    position:relative;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    height: auto;
    display: block;    
}
`;


let BlockNavigationLocalState = withState(
    "twitterOverlayActive",
    "toggleOverlay",
    true
)(BlockNavigation);

export default BlockNavigationLocalState;