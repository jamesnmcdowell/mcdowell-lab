import React from 'react'
import { withSiteData, Head } from 'react-static'
import logoImg from '../logo.png'
import Shell from './Shell';
import Hero from './Hero';
import { Link } from 'react-static';
import styled from 'styled-components';
import TitleBackgroundImage from './TitleBackgroundImage';
import BlockNavigation from './BlockNavigation';
import GradientHr from './GradientHr';
import backgroundSpheres from '../assets/spherecropoverlayfinal.png';
import backgroundWire from '../assets/wiregood5overlayfinal.png';
import Waypoint from 'react-waypoint';
import { withState, withStateHandlers } from 'recompose';
import { media, Container } from './Media';
import battery from '../assets/battery_cropfinal.png';
import batteryDiagram from '../assets/research_good_transparent_v4final.png';
import phaseTransform1 from '../assets/Image1a_cropfinal.png';
import phaseTransform2 from '../assets/electrode_v4_finalcrop2.png';
import interface1 from '../assets/xps.png';
import interface2 from '../assets/Image2a_cropfinal.png';
import controlling from '../assets/SEM.png';
import { research } from '../db.json';

let HomeScreen = ({ }) =>
<div>
  <Hero/>
	<section className="homepage-one">
		<Container vert >
			<SubTitle> {research.intro} </SubTitle >
			<GradientHr/>
			<BlockNavigation/>
		</Container>
	</section>
	<TitleBackgroundImage title={"Vision"} background={backgroundSpheres} />
	<Container vert>
		<SubTitle> {research.goal} </SubTitle >
		<ImageGrid>
			<img src={battery}/>
			<img src={batteryDiagram}/>
		</ImageGrid>
		<SectionTitle> The importance of observing dynamic processes</SectionTitle>
		<GradientHr />
		<P>
			In energy devices (for example, batteries, fuel cells, photocatalytic systems, 
			and electrolyzers), mass transport, high temperatures, reactive environments, and 
			mechanical stresses are the norm. Materials in these systems are not static; instead, 
			they often change, transform, or degrade in response to these operating conditions.
		</P>
		<P>
			Our research group focuses on using in situ experimental techniques to probe materials 
			transformations under realistic conditions, and we seek to understand how such changes 
			influence properties. These fundamental scientific advances guide the engineering of materials 
			for breakthrough new energy devices.
		</P>
		<P>
			Students and other researchers in the group synthesize materials, analyze their properties, and 
			utilize a variety of in situ characterization methods to understand dynamic structure and chemistry. 
			This information is then understood in the context of the material’s behavior within devices.
		</P>
	</Container>

	<TitleBackgroundImage title={"Current Projects"} background={backgroundWire} />
	<Container vert>
		{
			research.projects.map((project, i) => 
				<div>            
					<SectionTitle> {project.title} </SectionTitle>
					{
						project.body.map((item) =>
							<p> {item} </p> 
						)
					}
					<ImageGrid>
						{
							project.images.map((item) =>
								<img src={require(`../assets/${item}`)} />
							)
						}
					</ImageGrid>
					{ 
						(i !== research.projects.length - 1) ? <GradientHr /> : null
					}
				</div>
			)
		}			
	</Container>
</div>


let HomeScreenLocalState = withStateHandlers(
	() => ({
		headerActive: true,
		hasLeft: false
	}),
	{
		triggerHeader: ({ headerActive }) => (
			() => ({ headerActive: !headerActive })
		),
		triggerLeft: () => (
			() => ({ hasLeft: false })
		),
	}
)(HomeScreen);

export default HomeScreenLocalState;


let ImageGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit,minmax(170px,1fr));
	grid-gap: 1rem;
	padding: 4rem 20%;
	img {
		width: 100%;
		max-width: 300px;
		margin: 0 auto;
	}        
`;
let P = styled.p`
	text-align: center;
	line-height: 1.7;
	padding: .8rem;
	`;

let SubTitle = styled.h4`
	margin-top: 0;
	font-weight: 200;
	text-align: center;
	font-size: 2.5rem;
	letter-spacing: .1rem;
    ${media.tablet`
    font-size: 3.5rem;
    `}  
	`;
let SectionTitle = styled.h5`
	margin-top: 0;
	text-transform: uppercase;
  	font-weight: 200;
	text-align: center;
	line-height: 1.5;
	
	font-size: 2.5rem;
    ${media.tablet`
    font-size: 3rem;
    `}  
	`;

// let HomeScreenLocalState = withState(
// 	"HeaderActive",
// 	"triggerHeader",
// 	false
// )(withSiteData(HomeScreen));