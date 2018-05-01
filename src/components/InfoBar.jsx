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
    constructor(props) {
        super(props);
        this.state = {
            sortBy: SORT_BY.RELEASE_DATE
        }
    }

    onSortByReleaseDateClick() {
        this.setState({
            sortBy: SORT_BY.RELEASE_DATE
        }, function() {
            this.props.onSearch(this.state)
        });
    }

    onSortByRatingClick() {
        this.setState({
            sortBy: SORT_BY.RATING
        }, function() {
            this.props.onSearch(this.state)
        });
    }

    render() {
        let output = {};
        const {
            appState,
            items,
            selectedItem
        } = this.props;

        switch (appState) {
            case APP_STATES.SEARCH_PAGE:
                output = (
                    <InfoBarSection>
                        {items && items.length > 0 &&
                        <InfoBarWrapper>
                            <InfoBarLabel>
                                {items.length} movies found
                            </InfoBarLabel>
                            <div>
                                <InfoBarLabel>
                                    Sort by
                                </InfoBarLabel>
                                <InfoBarSortByLink
                                    className={this.state.sortBy === SORT_BY.RELEASE_DATE && 'active'}
                                    onClick={this.onSortByReleaseDateClick.bind(this)}
                                >
                                    release date
                                </InfoBarSortByLink>
                                <InfoBarSortByLink
                                    className={this.state.sortBy === SORT_BY.RATING && 'active'}
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
                                Films by {items.find((item) => item.id === selectedItem).genres[0]}
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
    selectedItem: PropTypes.number
};

InfoBar.defaultProps = {
    appState: APP_STATES.SEARCH_PAGE,
    items: [],
    selectedItem: null
};

export default InfoBar;