import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-static';
import twitterOverlay from '../assets/twitterOverlay.svg';
import { Timeline } from 'react-twitter-widgets'
import { withState } from 'recompose';
import { media } from './Media';

let TwitterFeed = ({ toggleOverlay, twitterOverlayActive }) =>
    <TwitterBlock id="twitterblock"> 
       {/* {twitterOverlayActive &&
            <TwitterOverlay onClick={() => { toggleOverlay(!twitterOverlayActive); }}>
                <img src={twitterOverlay} />
            </TwitterOverlay>
        } */}
        <TwitterLink to="https://twitter.com/McDowell_Lab">
            <TwitterOverlay>
                <img src={twitterOverlay} />
            </TwitterOverlay>
        </TwitterLink>
        <EmbedContainer>
            <TimelineStyled 
                dataSource={{
                    sourceType: 'profile',
                    screenName: 'McDowell_Lab'
                }}
                options={{
                    username: 'McDowell_Lab',
                    height: 'auto',
                    chrome: "scrollbar"

                }}
                onLoad={() => console.log('Timeline is loaded!')}
            />
        </EmbedContainer>
    </TwitterBlock>


let TwitterFeedLocalState = withState(
    "twitterOverlayActive",
    "toggleOverlay",
    true
)(TwitterFeed);

export default TwitterFeedLocalState;

let TwitterBlock = styled.div`
    position: relative;
    height: 100%;
`;
let TimelineStyled = styled(Timeline)`
    min-height: 300px;
`;
let TwitterOverlay = styled.div`
	color:white;
	display:block;
	position:absolute;
	right:0;
    left: 0;
    top: 0;
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
     div {
        iframe {
            height: auto !important;
           
        
        
        }
        
       }
    }
`;

let TwitterLink = styled(Link) `
`;
