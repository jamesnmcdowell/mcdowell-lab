import React from 'react'
import Shell from './Shell';
import { Link } from 'react-static';
import styled from 'styled-components';
import { media, Container } from './Media';
import { publications, profile } from '../db.json';

let PublicationsScreen = () =>
    <Container>
        <Center>
        <Title>Publications </Title>
        <Link to={profile.social[0].url}> 
            <span> View Google Scholar Profile:  </span> 
            {/* <img src={require(`../assets/${profile.social[0].icon}`)} /> */}
        </Link>
        
        </Center>
        <ol reversed>
        {
            publications.papers.slice(0).reverse().map((paper) =>
                <Item>
                    <span>
                        {paper.authors
                            .map((t, i) => ((t === "M. T. McDowell") ? <Bold> {t} </Bold> : <span>{t}</span>))
                            .reduce((prev, curr) => [prev, ', ', curr])}
                    </span>    
                    <span> "{paper.title}" </span>
                    <span> <i>{paper.journal},</i></span>   
                    <span> {paper.year}, </span>
                    <span> {paper.pages}. </span>
                    {paper.url && 
                        <Link to={paper.url} target="_blank">&#128279;</Link>
                    }
                </Item>
            )
        }
        </ol>
    </Container>

export default PublicationsScreen;

let Center = styled.div`
    text-align: center;
`;
let Bold = styled.span`
    font-weight: 600;
`;
let Title = styled.h1`
    font-weight: 200;
    font-size: 4.5rem;
`;
let Item = styled.li`
    padding-bottom: 2.2rem;
    line-height: 1.5;
`;

