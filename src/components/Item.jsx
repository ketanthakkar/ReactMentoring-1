import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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
    constructor(props) {
        super(props);
    }

    _onItemClick() {
        const {
            item,
            onItemClick
        } = this.props;
        onItemClick(item.id);
    }

    render() {
        const {
            item
        } = this.props;

        const {
            poster_path,
            title,
            release_date,
            genres
        } = item;

        return (
            <ItemWrapper>
                <ItemImage
                    src={poster_path}
                    onClick={this._onItemClick.bind(this)}
                />
                <ItemInfo>
                    <ItemTitle>{title}</ItemTitle>
                    <ItemDate>{release_date.slice(0, release_date.indexOf('-'))}</ItemDate>
                </ItemInfo>
                <ItemGenres>{genres.join(' & ')}</ItemGenres>
            </ItemWrapper>
        )
    }
}

Item.propTypes = {
    item: PropTypes.object,
    poster_path: PropTypes.string,
    title: PropTypes.string,
    release_date: PropTypes.string,
    genres: PropTypes.array
};

Item.defaultProps = {
    item: {},
    poster_path: '',
    title: '',
    release_date: '',
    genres: []
};

export default Item;