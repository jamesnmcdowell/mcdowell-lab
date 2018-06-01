import React from 'react'
import Shell from './Shell';
import { Link } from 'react-static';
import styled from 'styled-components';
import employment from '../assets/employment.svg';
import education from '../assets/education.svg';
import award from '../assets/award.svg';

let ResumeBlock = ({info}) =>
    <div>
        <FlexDivImg>
            <FlexLeft>
                <img src={require(`../assets/${info.icon}`)} />
            </FlexLeft>
            <FlexRight>
                <ResumeTitle> {info.title} </ResumeTitle>
            </FlexRight>
        </FlexDivImg>
        {(info.items && Array.isArray(info.items))?
            info.items.map((item) =>
                <FlexDiv>
                    <FlexLeft>
                        <span>{item.date}</span>
                    </FlexLeft>
                    <FlexRight>
                        {
                            item.text.map((c, i) => ((i === 0 && info.title !== "Awards") ? <Span bold > {c} </Span> : <Span>{c}</Span>))
                        } 
                    </FlexRight>
                </FlexDiv>
            ) : <FlexDiv />
        }
    </div>

export default ResumeBlock;

let ResumeTitle = styled.h4`
    text-transform: uppercase;
    font-size: 1.4em;
    font-weight: 200;
`;
let Span = styled.span`
    font-weight: ${ props => props.bold ? "600" : "inherit"};
`;

let FlexDiv = styled.div`
    display: flex;
`;
let FlexDivImg = styled(FlexDiv) `
    align-items: center;
`;
let FlexLeft = styled.div`
    flex-basis: 100px;
    img {
        width: 40px;
    }
`;
let FlexRight = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: calc(100% - 100px);
`;