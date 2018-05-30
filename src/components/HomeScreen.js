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

let HomeScreen = ({ headerActive, triggerHeader, hasLeft, triggerLeft}) =>
<Shell headerActive={headerActive}>
  <Hero/>
	<Waypoint onLeave={({ previousPosition, currentPosition, event }) => {
			console.log('you exited');
			triggerHeader();
			triggerLeft();
		}}
		onEnter={({ }) => {
			console.log("yoyo");
			if(hasLeft) {
			console.log('you entered');	
			triggerHeader();
			}
		}}
	/>
	<section className="homepage-one">
		<Container>
			<SubTitle> 
				We research new materials and work to understand their properties for 
				next-generation energy storage and conversion systems.
			</SubTitle >
			<GradientHr/>
			<BlockNavigation/>
		</Container>
	</section>
	<TitleBackgroundImage title={"Vision"} background={backgroundSpheres} />
	<Container>
		<SubTitle>
			Our research goal is to understand how materials behave and transform in real-life environments 
			within energy devices, which will enable us to engineer improved materials for new energy technologies.
		</SubTitle >
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
	<Container>	
		<SectionTitle> 1. phase transformation mechanisms in next-generation battery materials</SectionTitle>
		<P>
			Next-generation batteries require materials with higher charge storage capacity, or they require the
		development of new materials for entirely new battery systems beyond lithium-ion (for example, sodium-ion
		or multivalent batteries). The reaction and phase transformation mechanisms of new materials determine how much
		charge they can store and how long they last within batteries.
		</P>
		<P>
			It is critical to understand these reaction mechanisms across multiple length scales (from the atomic scale
		to the mesoscale) within battery electrodes. We use powerful in situ experimental techniques, including
		transmission electron microscopy, x-ray diffraction, and x-ray spectroscopy methods, to reveal structural,
		chemical, and morphological transformations in real time.
		</P>
		<ImageGrid>
			<img src={phaseTransform1} />
			<img src={phaseTransform2} />
		</ImageGrid>
		<GradientHr />
		<SectionTitle> 2. understanding dynamic interfaces</SectionTitle>
		<P>
			It is necessary to understand and control processes at solid-solid and solid-liquid interfaces when using
		nanomaterials in energy applications (as well as many other applications). This is due to the divergent
		structure, chemistry, and properties of interfaces compared to bulk materials.
		</P>
		<P>
			Our group is working on understanding the evolution of interfaces between electrodes and solid electrolyte
		materials in solid-state batteries using a variety of in situ techniques. Such interfaces can be chemically
		unstable, and they can also cause significant impedance in solid-state batteries. In addition, we are studying
		fundamental interfacial interactions in transition metal dichalcogenide materials.
		</P>
		<ImageGrid>
			<img src={interface1} />
			<img src={interface2} />
		</ImageGrid>
		<GradientHr />
		<SectionTitle> 3. controlling interfacial interactions for fabrication of nanoporous metals</SectionTitle>
		<P>
			Our group is developing new methods for the low-temperature fabrication and sintering of nanoporous metals. 
			In particular, we are using alkali metals as sintering promoters for synthesis of new nanomaterials.
		</P>
		<ImageGrid>
			<img src={controlling} />
		</ImageGrid>
	</Container>

</Shell>

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
	}        
`;
let P = styled.p`
	text-align: center;
	line-height: 1.7;
	padding: .8rem;
	`;

let SubTitle = styled.h4`
	padding-top: 20px;
	font-weight: 200;
	text-align: center;
	font-size: 3rem;
	`;
let SectionTitle = styled.h5`
	text-transform: uppercase;
  font-weight: 200;
	text-align: center;
	line-height: 1.5;
	font-size: 2.5rem;
	`;

// let HomeScreenLocalState = withState(
// 	"HeaderActive",
// 	"triggerHeader",
// 	false
// )(withSiteData(HomeScreen));





