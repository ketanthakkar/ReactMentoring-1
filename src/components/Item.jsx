import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const ItemWrapper = styled.div`
    width: 250px;
    margin: 20px 75px 20px 0;
    
    :nth-child(3n) {
        margin: 20px 0 20px 0;
    }
`;

const ItemImage = styled.img`
    width: 250px;
    cursor: pointer;
`;

const ItemInfo = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-top: 5px;
`;

const ItemTitle = styled.span`
    flex-basis: 70%;
`;

const ItemDate = styled.span`
    border: 1px solid gray;
    border-radius: 3px;
    padding: 1px 3px;
`;

const ItemGenres = styled.div`
    color: gray;
    margin-top: 5px;
    font-size: 14px;
`;

class Item extends React.Component {
    render() {
        const {
            item,
        } = this.props;

        const {
            poster_path,
            title,
            release_date,
            genres,
        } = item;

        return (
            <ItemWrapper>
                <Link to={`/film/${item.id}`}>
                    <ItemImage
                        src={poster_path}
                    />
                </Link>
                <ItemInfo>
                    <ItemTitle>{title}</ItemTitle>
                    <ItemDate>{release_date && release_date.slice(0, release_date.indexOf('-'))}</ItemDate>
                </ItemInfo>
                <ItemGenres>{genres && genres.join(' & ')}</ItemGenres>
            </ItemWrapper>
        )
    }
}

Item.propTypes = {
    item: PropTypes.object,
};

Item.defaultProps = {
    item: {},
};

export default Item;
