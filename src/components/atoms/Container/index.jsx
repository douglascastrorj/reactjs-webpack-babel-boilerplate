import React, {Component} from 'react';;
import styled from 'styled-components';

const Container = styled.div`
    margin: ${props => props.margin};
    padding: ${props => props.padding};
    font-family: ${props => props.margin || 'sans-serif'};

    display: ${ props => props.display || 'flex'};
    justify-content: ${ props => props.justifyContent || 'flex-start'};
    justify-self: ${ props => props.justifySelf || 'flex-start'};

    align-self: ${ props => props.alignSelf || 'flex-start'};
    align-items: ${ props => props.alignItems || 'flex-start'};
    flex-direction: ${ props => props.direction || 'flex-start'};
    flex-wrap: ${ props => props.wrap || 'wrap'};
    flex-grow: ${ props => props.grow || 'auto'};


    position: ${ props => props.position};
    
    width: ${ props => props.width || 'auto'};
    min-width: ${ props => props.minWidth || 'auto'};
    max-width: ${ props => props.maxWidth || 'auto'};

    height: ${ props => props.height || 'auto'};
    min-height: ${ props => props.minHeight || 'auto'};
    max-height: ${ props => props.maxHeight || 'auto'};

    color: ${ props => props.color || '#333'};
    background-color: ${ props => props.backgroundColor || '#fff'};
`;

export default Container;