import React from 'react'
import Shell from './Shell';
import { Link } from 'react-static';
import styled from 'styled-components';
import { media, Container } from './Media';
import square from '../assets/square.svg';
import heroImage from '../assets/wiregood2_cropwideoverlayfinal.png';
import TitleBackgroundImage from './TitleBackgroundImage';
import { news } from '../db.json';

let NewsScreen = () => {
    let items = news.items.slice(0).reverse();
    return (
        <section>
            <TitleBackgroundImage title={news.title} background={heroImage} />
            <Container vert>
            <Timeline className="timeline">
                {
                    items.map((item, i) => {
                        let {month, year} = item;
                            if ((i > 0) && (month === items[i - 1].month) && (year === items[i - 1].year)) {
                                month = '';
                                year = '';
                            }
                        return (
                            <Item>
                                <Time className="timeline-date" datetime=""><span>{year}</span> <span>{month}</span></Time>
                                <Icon className="icon icon-inner"></Icon>
                                <Content className="timeline-content">
                                    <Title>{item.title}</Title>
                                    <Body> 
                                    {item.body} 
                                    {item.url &&
                                        <LinkStyled to={item.url} target="_blank">&#128279;</LinkStyled>
                                    }
                                    </Body>
                                    <ImgContainer>
                                    { item.image && 
                                        <img src={require(`../assets/${item.image}`)} />
                                    }
                                    </ImgContainer>
                                </Content>
                            </Item>
                        );
                    })
                }
            </Timeline>
            </Container>      
        </section>
    );
}

export default NewsScreen;

let LinkStyled = styled(Link) `
    text-decoration: none;
    margin-left: 5px;
`;

let Timeline = styled.ul`
    margin: 0;
    padding: 0;
    margin-top: 1em;
    list-style: none;
    position: relative;  
    img {
        width: 70%;
        padding-top: 1em;
    } 
    &:before {
        ${media.tablet`
            content: '';
            position: absolute;
            top: 0;
            bottom: 0;
            width: 10px;
            background-color: #eeb211;
            left: 20%;
            margin-left: -10px;
            border-radius: 2em;   
        `}   
    }
`;

let Title = styled.h2`
    font-weight: 400;
    margin-top: 0px;
    padding: 0 0 10px 0;
    border-bottom: 1px solid rgba(255,255,255,0.4); 
    font-size: 2rem;
    ${media.tablet`
    font-weight: 300;
    font-size: 3rem;
    `}   
`;

let Body = styled.p`
`;
let ImgContainer = styled.div`
display: flex;
justify-content: center;
align-items:center;
`;
let Item = styled.li`
    position: relative;
    &:nth-child(odd) .timeline-content {
        background-color: #e5e5e5;
    }
`;

let Time = styled.time`
    width: 100%;
    left:0;
    position: relative;
    padding: 0 0 20px 0;
    display: block;
    ${media.tablet`
        width: 25%;
        left: -6em;
        position: absolute;
    `}  
    span {
        display: block;
        text-align: left;
        ${media.tablet`
            text-align: right;
        `}  
        
        &:first-child {
            font-size: 1.4em;
            color: rgb(84, 84, 84);
            font-weight: 200;
        }
        &:last-child {
            font-size: 1.5em;
            color: rgb(84, 84, 84);
            font-weight: 200; 
            ${media.tablet`
                font-size: 2.2em;
            `}  
        }
    } 
`;

let Content = styled.div`
    background-color: rgba(245, 211, 118,.6);
    margin: 0 0 30px 0;
    padding: 1em;
    font-weight: 400;
    font-weight: 300;
	line-height: 1.4;
	position: relative;
    border-radius: 5px;
    ${media.tablet`
        margin: 0 0 15px 25%;
        padding: 2em;
        font-size: 1.1em; 
    `}  
    &:after {
        border: solid transparent;
        content: " ";
        height: 0;
        width: 0;
        position: absolute;
        pointer-events: none;
        border-width: 10px;
        right: auto;
        left: 20px;
        border-right-color: transparent;
        border-bottom-color: rgb(84, 84, 84);
        top: -20px;
        ${media.tablet`
            right: 100%;
            border: solid transparent;
            content: " ";
            position: absolute;
            pointer-events: none;
            border-right-color: rgb(84, 84, 84);
            border-width: 10px;
            top: 10px;
            left: auto;
        `} 
        }
   
`;
let Icon = styled.div`
    display:none;
    ${media.tablet`
        width: 40px;
        height: 40px;
        speak: none;
        text-transform: none;
        font-style: normal;
        font-weight: normal;
        font-variant: normal;
        font-size: 1.4em;
        line-height: 40px;
        position: absolute;
        color: white;
        background: #f5d376;
        border-radius: 50%;
        box-shadow: 0 0 0 8px #eeb211;
        text-align: center;
        left: 20%;
        top: 0;
        margin: 0 0 0 -25px;
        display: flex;
        justify-content: center;
        align-items: center;
        &:before {
            display: block;
            content: ' ';
            background-image: url(${square});
            background-size: 28px 28px;
            height: 28px;
            width: 28px;
        }
    `} 
`;
