import React from 'react';
import Container from '../../atoms/Container';

const Header = props => (
    <Container 
        backgroundColor="#333"
        color="#fff"
        width="100%"
        height="100px"
        justifyContent="center"
        alignItems="center"
    >
        <h1>
            {props.title}
        </h1>
    </Container>
)

export default Header;