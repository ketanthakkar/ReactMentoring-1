import React from 'react';
import {Route, Switch} from 'react-router-dom';
import styled from 'styled-components';

import Logo from './Logo';
import SearchField from './SearchField';
import InfoBar from './InfoBar';
import Details from './Details';

import background from '../img/background.jpg';

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

export class Header extends React.Component {
    render() {
        return (
            <HeaderSection>
                <HeaderWrapper>
                    <Logo/>
                    <Switch>
                        <Route path="/film/:id" component={Details}/>
                        <Route path="/" component={SearchField}/>
                    </Switch>
                </HeaderWrapper>
                <InfoBar/>
            </HeaderSection>
        )
    }
}

export default Header;
