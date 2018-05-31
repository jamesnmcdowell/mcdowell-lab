import React from 'react';
import { Link } from 'react-static';
import styled from 'styled-components';
import { media, Container } from './Media';
import twitter from '../assets/twitterlogo.svg';
import gScholar from '../assets/googlescholar.svg';
import email from '../assets/mail.svg';


let Footer = () =>
    <FooterStyled >
        <Container>
            <FlexContainer>
                <div>
                    <h4>The McDowell Laboratory</h4>
                    <hr/>
                    <p>Georgia Institute of Technology</p>
                    <p>MRDC Building</p>
                    <p>801 Ferst Drive</p>
                    <p>Atlanta, GA 30332-0405</p>
                </div>
                <Contact>
                    <p>Copyright &copy; <time dateTime="2017">2017</time> Matthew McDowell</p>
                    <p>mattmcdowell@gatech.edu</p>
                    <p>404-894-8341</p>
                    <FlexIcons>
                        <a href="https://twitter.com/mcdowell_lab" target="_blank">
                            <img src={twitter}/> 
                        </a>
                        <a href="https://scholar.google.com/citations?user=VRZVDH8AAAAJ&hl=en" target="_blank">
                            <img src={gScholar}/>
                        </a>
                        <a href="mailto:mattmcdowell@gatech.edu" target="_blank">
                            <img src={email}/>
                        </a>
                    </FlexIcons>
                </Contact>
            </FlexContainer>
        </Container>
    </FooterStyled>

export default Footer;

let FooterStyled = styled.footer`
    background-color: rgb(84, 84, 84);
    width:100%;
    padding: 1.5em 0;
    color: #ffffff;   
`;
let FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    ${media.tablet`
    text-align: left;
    justify-content:space-between;
    flex-direction: row;
    align-items: center;
    `}     
`;
let Contact = styled.div`
    text-align:center;
`;  

let FlexIcons = styled.div` 
    justify-content: center;
    display: flex;
    align-items: center;
    img {
        width: 35px;
        margin-right: 15px;
    }
`;


{/* 
    // <div class="footer-contact">
    //     <p>Copyright &copy; <time datetime="2017">2017</time> Matthew McDowell</p>
    //     <p>mattmcdowell@gatech.edu</p>
    //     <p>404-894-8341</p>
    //     <div class="row">
    //         <div class="four columns">
    //             <a href="https://twitter.com/mcdowell_lab" target="_blank"><img src="img/twitterlogo.svg"></a>
    //         </div>
    //             <div class="four columns">
    //                 <a href="https://scholar.google.com/citations?user=VRZVDH8AAAAJ&hl=en" target="_blank"><img src="img/googlescholar.svg"></a>
    //          </div>
    //                 <div class="four columns">
    //                     <a href="mailto:mattmcdowell@gatech.edu" target="_blank"><img src="img/mail.svg"></a>
    //         </div>
    //                 </div> */}
