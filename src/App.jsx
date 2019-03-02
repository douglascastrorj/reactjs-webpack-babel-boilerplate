import React, {Component} from 'react';

import Container from './components/atoms/Container';
import Header from './components/molecules/Header';
class App extends Component {
    render() {
        return (
            <Container margin="0" padding="0" width="100%" >
                <Header 
                    title='React js App'
                />
            </Container>
        )
    }
}

export default App;