import React from 'react';
import styled from 'styled-components';

import Logo from './Logo';
import InfoBar from './InfoBar';

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
                    {this.props.children}
                </HeaderWrapper>
                <InfoBar/>
            </HeaderSection>
        )
    }
}

export default Header;
