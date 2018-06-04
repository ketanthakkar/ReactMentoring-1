import React from 'react';
import styled from 'styled-components';

import Logo from './Logo';

const FooterSection = styled.div`
    background-color: #414141;
    height: 50px;
`;

const FooterWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 900px;
    height: 100%;
    margin: 0 auto;
`;

class Footer extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <FooterSection>
                <FooterWrapper>
                    <Logo/>
                </FooterWrapper>
            </FooterSection>
        )
    }
}

export default Footer;