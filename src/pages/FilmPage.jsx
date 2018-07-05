import React from 'react';

import App from '../components/App';
import Header from '../components/Header';
import Details from '../components/Details';
import Items from '../components/Items';
import EmptyState from '../components/EmptyState';
import Footer from '../components/Footer';

class FilmPage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <App>
                <Header>
                    <Details {...this.props}/>
                </Header>
                <Items>
                    <EmptyState/>
                </Items>
                <Footer/>
            </App>
        )
    }
}

export default FilmPage;
