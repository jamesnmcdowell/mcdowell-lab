import React from 'react'
import { withSiteData } from 'react-static'
import logoImg from '../logo.png'
import Shell from './Shell';
import Hero from './Hero';
import { Link } from 'react-static';
import styled from 'styled-components';
import TitleBackgroundImage from './TitleBackgroundImage';
import BlockNavigation from './BlockNavigation';
import GradientHr from './GradientHr';
import backgroundSpheres from '../assets/spherecropoverlayfinal.png';
import Waypoint from 'react-waypoint';
import { withState } from 'recompose';


let Home = () =>
<Shell>
  <Hero/>
		<Waypoint onLeave={({ previousPosition, currentPosition, event }) => {
			console.log('you entered');
			document.querySelector('#header')
		}}
		/>
	<section className="homepage-one">
		<SubTitle className="intro"> 
			We research new materials and work to understand their properties for 
			next-generation energy storage and conversion systems.
		</SubTitle >
		<GradientHr/>
		<BlockNavigation/>
	</section>
	<TitleBackgroundImage title={"Vision"} background={backgroundSpheres} />
	<SubTitle className="intro">
			Our research goal is to understand how materials behave and transform in real-life environments 
			within energy devices, which will enable us to engineer improved materials for new energy technologies.
	</SubTitle >
</Shell>


let SubTitle = styled.h4`
	padding-top: 20px;
	font-weight: 200;
	text-align: center;
	font-size: 3rem;
	`;

let HomeLocalState = withState(
	"HeaderActive",
	"toggleHeader",
	false
)(withSiteData(Home));

export default HomeLocalState;






