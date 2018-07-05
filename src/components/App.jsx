import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Header from './Header';
import Items from './Items';
import Footer from './Footer';
import ErrorBoundary from './ErrorBoundary';

import {
getItems,
getItem,
getItemsByGenre,
setSearchValue,
setSortBy,
setSearchBy,
} from '../actions/appActions';

const AppWrapper = styled.div`
    height: 100%;
    font-family: sans-serif;
`;

export class App extends React.Component {
    componentWillMount() {
        const {getItems} = this.props;
        getItems();
    }

    render() {
        return (
            <AppWrapper>
                <ErrorBoundary>
                    <Header
                        {...this.props}
                    />
                </ErrorBoundary>
                <ErrorBoundary>
                    <Items {...this.props}/>
                </ErrorBoundary>
                <ErrorBoundary>
                    <Footer/>
                </ErrorBoundary>
            </AppWrapper>
        )
    }
}

Items.propTypes = {
    getItems: PropTypes.func,
};

Items.defaultProps = {
    getItems: null,
};

const mapStateToProps = (state) => {
    const {
        items,
        item,
        appState,
        total,
        value,
        sortBy,
        searchBy
    } = state.appReducer;

    return {
        items,
        item,
        appState,
        total,
        value,
        sortBy,
        searchBy
    };
};

export default connect(mapStateToProps, {
    getItems,
    getItem,
    getItemsByGenre,
    setSearchValue,
    setSortBy,
    setSearchBy,
})(App);
