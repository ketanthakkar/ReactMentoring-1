import React from 'react';
import {connect} from 'react-redux';
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

export class Items extends React.Component {
    render() {
        const {
            items,
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
                                />
                            )
                        )
                    ) : this.props.children }
                </ItemsWrapper>
            </ItemsSection>
        )
    }
}

Items.propTypes = {
    items: PropTypes.array,
};

Items.defaultProps = {
    items: [],
};

const mapStateToProps = (state) => {
    const {
        items,
    } = state.appReducer;

    return {
        items,
    };
};

export default connect(mapStateToProps)(Items);
