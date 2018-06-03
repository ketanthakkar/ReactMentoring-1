import React from 'react';
import styled from 'styled-components';

const EmptyResults = styled.div`
    font-size: 50px;
    height: 400px;
    padding-top: 100px;
    width: 100%;
    text-align: center;
`;

export class EmptyState extends React.Component {
    render() {
        return (
            <EmptyResults>No films found</EmptyResults>
        )
    }
}

export default EmptyState;
