import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import APP_STATES from '../constants/APP_STATES';
import SORT_BY from '../constants/SORT_BY';

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

class InfoBar extends React.Component {

    onSortByReleaseDateClick() {
        this.props.setSortBy(SORT_BY.RELEASE_DATE);
        this.props.getItems();
    }

    onSortByRatingClick() {
        this.props.setSortBy(SORT_BY.RATING);
        this.props.getItems();
    }

    render() {
        const {
            appState,
            items,
            item,
            total,
            sortBy,
        } = this.props;
        let output = {};

        switch (appState) {
            case APP_STATES.SEARCH_PAGE:
                output = (
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
                                <InfoBarSortByLink
                                    className={sortBy === SORT_BY.RELEASE_DATE && 'active'}
                                    onClick={this.onSortByReleaseDateClick.bind(this)}
                                >
                                    release date
                                </InfoBarSortByLink>
                                <InfoBarSortByLink
                                    className={sortBy === SORT_BY.RATING && 'active'}
                                    onClick={this.onSortByRatingClick.bind(this)}
                                >
                                    rating
                                </InfoBarSortByLink>
                            </div>
                        </InfoBarWrapper>
                        }
                    </InfoBarSection>
                );
                break;
            case APP_STATES.DETAILS_PAGE:
                output = (
                    <InfoBarSection>
                        {items && items.length > 0 &&
                        <InfoBarWrapper>
                            <InfoBarLabel>
                                Films by {item && item.genres && item.genres[0]}
                            </InfoBarLabel>
                        </InfoBarWrapper>
                        }
                    </InfoBarSection>
                );
                break;
            default:
        }
        return (
            output
        )
    }
}

InfoBar.propTypes = {
    appState: PropTypes.string,
    items: PropTypes.array,
    item: PropTypes.object,
    total: PropTypes.number,
    sortBy: PropTypes.string,
    setSortBy: PropTypes.func,
};

InfoBar.defaultProps = {
    appState: APP_STATES.SEARCH_PAGE,
    items: [],
    item: {},
    total: 0,
    setSortBy: null,
};

export default InfoBar;
