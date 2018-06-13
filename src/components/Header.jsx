import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Logo from './Logo';
import SearchField from './SearchField';
import InfoBar from './InfoBar';
import Details from './Details';

import background from '../img/background.jpg';

import APP_STATES from '../constants/APP_STATES';

const HeaderSection = styled.div`
    width: 100%;
    height: 100%;
    background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4)), url(${background});
`;

const HeaderWrapper = styled.div`
    width: 900px;
    margin: 0 auto;
    padding-top: 20px;
`;

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            appState,
            selectedItem,
            items,
            goToSearchPage
        } = this.props;

        return (
            <HeaderSection>
                <HeaderWrapper>
                    <Logo/>
                    {appState === APP_STATES.DETAILS_PAGE ?
                        <Details
                            item={items.find(item => item.id === selectedItem)}
                            goToSearchPage={goToSearchPage}
                        />
                        :
                        <SearchField {...this.props}/>
                    }
                </HeaderWrapper>
                <InfoBar {...this.props}/>
            </HeaderSection>
        )
    }
}

Header.propTypes = {
    appState: PropTypes.string,
    selectedItem: PropTypes.number,
    items: PropTypes.array,
    goToSearchPage: PropTypes.func
};

Header.defaultProps = {
    appState: '',
    selectedItem: null,
    items: [],
    goToSearchPage: null
};

export default Header;