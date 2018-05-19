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
    render() {
        const {
            items,
            getItem,
            getItemsByGenre
        } = this.props;

        return (
            <ItemsSection>
                <ItemsWrapper>
                    {items && items.length ? (
                        items.map(
                            item => (
                                <Item
                                    key={item.id}
                                    item={item}
                                    getItem={getItem}
                                    getItemsByGenre={getItemsByGenre}
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
    getItem: PropTypes.func,
    getItemsByGenre: PropTypes.func,
};

Items.defaultProps = {
    items: [],
    getItem: null,
    getItemsByGenre: null,
};

export default Items;
