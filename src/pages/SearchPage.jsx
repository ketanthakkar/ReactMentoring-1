import React from 'react';

import App from '../components/App';
import Header from '../components/Header';
import SearchField from '../components/SearchField';
import Items from '../components/Items';
import EmptyState from '../components/EmptyState';
import Footer from '../components/Footer';

class EmptyPage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <App>
                <Header>
                    <SearchField {...this.props}/>
                </Header>
                <Items>
                    <EmptyState/>
                </Items>
                <Footer/>
            </App>
        )
    }
}

export default EmptyPage;
