import React from 'react';
import styled from 'styled-components';

import Header from './Header';
import Items from './Items';
import Footer from './Footer';
import ErrorBoundary from './ErrorBoundary';

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
                <ErrorBoundary>
                    <Header/>
                </ErrorBoundary>
                <ErrorBoundary>
                    <Items/>
                </ErrorBoundary>
                <ErrorBoundary>
                    <Footer/>
                </ErrorBoundary>
            </AppWrapper>
        )
    }
}

export default App;
