import React from 'react';
import styled from 'styled-components';

import Header from './Header';
import Items from './Items';
import Footer from './Footer';
import ErrorBoundary from './ErrorBoundary';

import items from '../mock-data/items.json';

import APP_STATES from '../constants/APP_STATES';
import SEARCH_BY from '../constants/SEARCH_BY';
import SORT_BY from '../constants/SORT_BY';

const AppWrapper = styled.div`
    height: 100%;
    font-family: sans-serif;
`;

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            value: '',
            searchBy: SEARCH_BY.TITLE,
            sortBy: SORT_BY.RELEASE_DATE,
            appState: APP_STATES.SEARCH_PAGE,
            selectedItem: null,
            items: items.data,
            // items: []
        }
    }

    goToSearchPage() {
        this.setState({
            appState: APP_STATES.SEARCH_PAGE
        })
    }

    onSearch(options) {
        const {
            value = this.state.value,
            searchBy = this.state.searchBy,
            sortBy = this.state.sortBy
        } = {...options};
        this.setState({
            value,
            searchBy,
            sortBy,
            selectedItem: null,
            appState: APP_STATES.SEARCH_PAGE
        });
        console.log(`value:${value} searchBy:${searchBy} sortBy:${sortBy}`);
    }

    onItemClick(id) {
        this.setState({
            selectedItem: id,
            appState: APP_STATES.DETAILS_PAGE
        });
        console.log(id);
    }

    render() {
        return (
            <AppWrapper>
                <ErrorBoundary>
                    <Header
                        {...this.state}
                        onSearch={this.onSearch.bind(this)}
                        goToSearchPage={this.goToSearchPage.bind(this)}
                    />
                    <Items
                        {...this.state}
                        onItemClick={this.onItemClick.bind(this)}
                    />
                    <Footer/>
                </ErrorBoundary>
            </AppWrapper>
        )
    }
}

export default App;
