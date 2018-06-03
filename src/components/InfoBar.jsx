import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Route, Switch, Link} from 'react-router-dom';

import SORT_BY from '../constants/SORT_BY';
import {setSortBy} from '../actions/appActions';

const InfoBarSection = styled.div`
    display: block;
    width: 100%;
    height: 50px;
    background-color: #f5f5f5;
`;

const InfoBarWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    width: 900px;
    margin: 0 auto;
`;

const InfoBarLabel = styled.label`
    color: #0e0e0e;
`;

const InfoBarSortByLink = styled.span`
    margin: 5px 5px 5px 20px;
    color: #0e0e0e;
    text-transform: none;
    
    &:hover {
        color:#f55263;
        cursor: pointer;
    }
    
    &.active {
        color:#f55263;
    }
`;

export class InfoBar extends React.Component {
    onSortByReleaseDateClick() {
        this.props.setSortBy(SORT_BY.RELEASE_DATE);
    }

    onSortByRatingClick() {
        this.props.setSortBy(SORT_BY.RATING);
    }

    render() {
        const {
            value,
            items,
            item,
            total,
            sortBy,
            searchBy,
        } = this.props;

        return (
            <Switch>
                <Route path='/film'
                       render={() => (
                           <InfoBarSection>
                               {items && items.length > 0 &&
                               <InfoBarWrapper>
                                   <InfoBarLabel>
                                       Films by {item && item.genres && item.genres[0]}
                                   </InfoBarLabel>
                               </InfoBarWrapper>
                               }
                           </InfoBarSection>
                       )}
                />
                <Route
                    path='/'
                    render={() => (
                        <InfoBarSection>
                            {items && items.length > 0 &&
                            <InfoBarWrapper>
                                <InfoBarLabel>
                                    {total} movies found
                                </InfoBarLabel>
                                <div>
                                    <InfoBarLabel>
                                        Sort by
                                    </InfoBarLabel>
                                    <Link
                                        to={`/search?search=${value}&searchBy=${searchBy}&sortBy=${SORT_BY.RELEASE_DATE}`}>
                                        <InfoBarSortByLink
                                            className={sortBy === SORT_BY.RELEASE_DATE && 'active'}
                                            onClick={this.onSortByReleaseDateClick.bind(this)}
                                        >
                                            release date
                                        </InfoBarSortByLink>
                                    </Link>
                                    <Link
                                        to={`/search?search=${value}&searchBy=${searchBy}&sortBy=${SORT_BY.RATING}`}>
                                        <InfoBarSortByLink
                                            className={sortBy === SORT_BY.RATING && 'active'}
                                            onClick={this.onSortByRatingClick.bind(this)}
                                        >
                                            rating
                                        </InfoBarSortByLink>
                                    </Link>
                                </div>
                            </InfoBarWrapper>
                            }
                        </InfoBarSection>)}
                />
            </Switch>
        )
    }
}

InfoBar.propTypes = {
    value: PropTypes.string,
    items: PropTypes.array,
    item: PropTypes.object,
    total: PropTypes.number,
    sortBy: PropTypes.string,
    searchBy: PropTypes.string,
    setSortBy: PropTypes.func,
};

InfoBar.defaultProps = {
    value: '',
    items: [],
    item: {},
    total: 0,
    sortBy: '',
    searchBy: '',
    setSortBy: null,
};

const mapStateToProps = (state) => {
    const {
        value,
        items,
        item,
        total,
        sortBy,
        searchBy,
    } = state.appReducer;

    return {
        value,
        items,
        item,
        total,
        sortBy,
        searchBy,
    };
};

export default connect(mapStateToProps,{
    setSortBy,
})(InfoBar);
