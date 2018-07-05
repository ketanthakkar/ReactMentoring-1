import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

import SEARCH_BY from '../constants/SEARCH_BY';
import {
    getItems,
    setSearchValue,
    setSearchBy,
} from '../actions/appActions';

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

export class SearchField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value,
        }
    }

    componentDidMount() {
        const params = new URLSearchParams(this.props.location.search);
        this._getItems(params);
    }

    componentDidUpdate(prevProps) {
        const params = new URLSearchParams(this.props.location.search);
        if (prevProps.location.search !== this.props.location.search) {
            this._getItems(params);
        }
    }

    _getItems(params) {
        const value = params.get('search');
        const searchBy = params.get('searchBy');
        const sortBy = params.get('sortBy');
        this.props.getItems(value, searchBy, sortBy);
    }

    onChange(event) {
        this.setState({
            value: event.target.value
        })
    }

    onBlur() {
        this.props.setSearchValue(this.state.value);
    }

    onEnter(event) {
        const isEnterPressed = event.which === ENTER_KEY || event.keyCode === ENTER_KEY;
        if (isEnterPressed) {
            const {
                searchBy,
                sortBy,
            } = this.props;

            this.props.setSearchValue(this.state.value);
            this.props.history.push(`/search?search=${this.state.value}&searchBy=${searchBy}&sortBy=${sortBy}`);
        }
    }

    onSearchByTitleClick() {
        this.props.setSearchBy(SEARCH_BY.TITLE);
    }

    onSearchByGenreClick() {
        this.props.setSearchBy(SEARCH_BY.GENRE);
    }

    render() {
        const {
            searchBy,
            sortBy,
        } = this.props;

        return (
            <SearchFieldWrapper>
                <SearchFiledLabel>find your movie</SearchFiledLabel>
                <SearchFieldInput
                    onChange={this.onChange.bind(this)}
                    onBlur={this.onBlur.bind(this)}
                    onKeyPress={this.onEnter.bind(this)}
                    type="text"
                    value={this.state.value}
                />
                <div>
                    <SearchFilterLabel>search by</SearchFilterLabel>
                    <SearchFilterButton
                        className={searchBy === SEARCH_BY.TITLE && 'active'}
                        onClick={this.onSearchByTitleClick.bind(this)}
                    >
                        title
                    </SearchFilterButton>
                    <SearchFilterButton
                        className={searchBy === SEARCH_BY.GENRE && 'active'}
                        onClick={this.onSearchByGenreClick.bind(this)}
                    >
                        genre
                    </SearchFilterButton>
                    <Link to={`/search?search=${this.state.value}&searchBy=${searchBy}&sortBy=${sortBy}`}>
                        <SearchButton>
                            search
                        </SearchButton>
                    </Link>
                </div>
            </SearchFieldWrapper>
        )
    }
}

SearchField.propTypes = {
    value: PropTypes.string,
    searchBy: PropTypes.string,
    sortBy: PropTypes.string,
    getItems: PropTypes.func,
    setSearchBy: PropTypes.func,
    setSearchValue: PropTypes.func,
    location: PropTypes.object,
};

SearchField.defaultProps = {
    value: '',
    searchBy: SEARCH_BY.TITLE,
    sortBy: '',
    getItems: function () {},
    setSearchBy: null,
    setSearchValue: null,
    location: {},
};

const mapStateToProps = (state) => {
    const {
        value,
        searchBy,
        sortBy,
    } = state.appReducer;

    return {
        value,
        searchBy,
        sortBy,
    };
};

export default connect(mapStateToProps, {
    getItems,
    setSearchValue,
    setSearchBy,
})(SearchField);
