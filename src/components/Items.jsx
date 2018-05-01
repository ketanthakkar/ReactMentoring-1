import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Item from './Item';

const ItemsSection = styled.div`
    background-color: #fff;
`;

const ItemsWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    width: 900px;
    margin: 0 auto;
`;

const EmptyResults = styled.div`
    font-size: 50px;
    height: 400px;
    padding-top: 100px;
    width: 100%;
    text-align: center;
`;

class Items extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            items,
            onItemClick
        } = this.props;

        return (
            <ItemsSection>
                <ItemsWrapper>
                    {items.length ? (
                        items.map(
                            item => (
                                <Item
                                    key={item.id}
                                    item={item}
                                    onItemClick={onItemClick}
                                />
                            )
                        )
                    ) : (
                        <EmptyResults>No films found</EmptyResults>
                    )}
                </ItemsWrapper>
            </ItemsSection>
        )
    }
}

Items.propTypes = {
    items: PropTypes.array,
    onItemClick: PropTypes.func
};

Items.defaultProps = {
    items: [],
    onItemClick: null
};

export default Items;