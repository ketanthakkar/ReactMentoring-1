import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import SEARCH_BY from "../constants/SEARCH_BY";

const ENTER_KEY = 13;

const SearchFieldWrapper = styled.div`
    padding-top: 40px;
    padding-bottom: 40px;
`;

const SearchFiledLabel = styled.label`
    text-transform: uppercase;
    color: #fff;
    font-size: 20px;
`;

const SearchFieldInput = styled.input`
    width: 100%;
    margin: 10px 0;
    padding: 20px 25px;
    background-color: rgba(0, 0, 0, 0.9);
    color: #fff;
    border: none;
    border-bottom: 2px solid #f55263;
    outline: none;
    font-size: 16px;
    box-sizing: border-box;
`;

const SearchFilterLabel = styled.label`
    text-transform: uppercase;
    color: #fff;
    font-size: 16px;
`;

const SearchFilterButton = styled.button`
    border: none;
    border-radius: 3px;
    text-transform: uppercase;
    background-color: #3c3c3c;
    padding: 5px 20px;
    margin: 20px 0 0 10px;
    cursor: pointer;
    color: #fff;
    
    &:hover,
    &.active {
        background-color: #f55263;
    }
`;

const SearchButton = styled.button`
    float: right;
    border: none;
    border-radius: 3px;
    text-transform: uppercase;
    font-weight: bold;
    background-color: #f55263;
    padding: 10px 60px;
    margin-top: 20px;
    cursor: pointer;
    color: #fff;
    
    &:hover {
        background-color: #fff;
        color: #f55263;
    }
`;

class SearchField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            searchBy: SEARCH_BY.TITLE
        }
    }

    onChange(event) {
        this.setState({
            value: event.target.value
        })
    }

    onEnter(event) {
        const isEnterPressed = event.which === ENTER_KEY || event.keyCode === ENTER_KEY;
        if (isEnterPressed) {
            this.props.onSearch(this.state);
        }
    }

    onSearchByTitleClick() {
        this.setState({
            searchBy: SEARCH_BY.TITLE
        })
    }

    onSearchByGenreClick() {
        this.setState({
            searchBy: SEARCH_BY.GENRE
        })
    }

    onSearchClick() {
        this.props.onSearch(this.state);
    }

    render() {
        return (
            <SearchFieldWrapper>
                <SearchFiledLabel>find your movie</SearchFiledLabel>
                <SearchFieldInput
                    onChange={this.onChange.bind(this)}
                    onKeyPress={this.onEnter.bind(this)}
                    type="text"
                    value={this.state.value}
                />
                <div>
                    <SearchFilterLabel>search by</SearchFilterLabel>
                    <SearchFilterButton
                        className={this.state.searchBy === SEARCH_BY.TITLE && 'active'}
                        onClick={this.onSearchByTitleClick.bind(this)}
                    >
                        title
                    </SearchFilterButton>
                    <SearchFilterButton
                        className={this.state.searchBy === SEARCH_BY.GENRE && 'active'}
                        onClick={this.onSearchByGenreClick.bind(this)}
                    >
                        genre
                    </SearchFilterButton>
                    <SearchButton
                        type="button"
                        onClick={this.onSearchClick.bind(this)}
                    >
                        search
                    </SearchButton>
                </div>
            </SearchFieldWrapper>
        )
    }
}

SearchField.propTypes = {
    onSearch: PropTypes.func
};

SearchField.defaultProps = {
    onSearch: null
};

export default SearchField;