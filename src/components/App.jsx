import React from 'react';
import styled from 'styled-components';

const AppWrapper = styled.div`
    height: 100%;
    font-family: sans-serif;
`;

export class App extends React.Component {
    componentDidUpdate() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <AppWrapper>
                {this.props.children}
            </AppWrapper>
        )
    }
}

export default App;
