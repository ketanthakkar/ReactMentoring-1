import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

import {getItem} from '../actions/appActions';

const DetailsWrapper = styled.div`
    display: flex;
    position: relative;
    align-items: flex-start;
    justify-content: flex-start;
    font-size: 18px;
`;

const DetailsSearchButton = styled.button`
    position: absolute;
    right: 0;
    top: -20px;
    border: none;
    border-radius: 3px;
    background-color: #fff;
    color: #f55263;
    text-transform: uppercase;
    font-weight: bold;
    padding: 10px 30px;
    cursor: pointer;
    display: block;
    z-index: 1;
    
    &:hover {
        color: #fff;
        background-color: #f55263;
    }
`;

const DetailsImage = styled.img`
    height: 400px;
    padding-top: 30px;
    margin: 0 50px 50px 0;
`;

const DetailsDescription = styled.div`
    color: #ffffff;
`;

const DetailsTitle = styled.div`
    font-size: 40px;
    font-weight: bold;
    color: #f55263;
    margin-top: 40px;
    
    &::after {
        content: '${props => props.vote_average}';
        display: inline-block;
        position: absolute;
        margin-left: 10px;
        font-size: 20px;
        color: #84ba67;
        border: 1px solid #84ba67;
        border-radius: 28px;
        width: 40px;
        height: 40px;
        line-height: 40px;
        text-align: center;
    }
`;

const DetailsTagline = styled.div`
    color: #bdbdbd;
    margin: 15px 0;
`;

const DetailsYear = styled.span`
    font-size: 24px;
    margin-right: 25px;
`;

const DetailsRuntime = styled.span`
    font-size: 24px;
`;

const DetailsOverview = styled.div`
    color: #bdbdbd;
    font-size: 22px;
    margin: 20px 0;
`;

export class Details extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getItem(this.props.match.params.id);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.props.getItem(this.props.match.params.id);
        }
    }

    render() {
        const {
            value,
            searchBy,
            sortBy,
            item,
        } = this.props;

        const {
            poster_path,
            title,
            vote_average,
            tagline,
            release_date,
            runtime,
            overview,
        } = item;

        return (
            <DetailsWrapper>
                <Link to={`/search?search=${value}&searchBy=${searchBy}&sortBy=${sortBy}`}>
                    <DetailsSearchButton>
                        search
                    </DetailsSearchButton>
                </Link>
                <DetailsImage
                    src={poster_path}
                />
                <DetailsDescription>
                    <DetailsTitle vote_average={vote_average}>
                        {title}
                    </DetailsTitle>
                    <DetailsTagline>
                        {tagline}
                    </DetailsTagline>
                    <div>
                        <DetailsYear>
                            {release_date && release_date.slice(0, release_date.indexOf('-'))}
                        </DetailsYear>
                        <DetailsRuntime>
                            {runtime} min
                        </DetailsRuntime>
                    </div>
                    <DetailsOverview>
                        {overview}
                    </DetailsOverview>
                </DetailsDescription>
            </DetailsWrapper>
        )
    }
}

Details.propTypes = {
    value: PropTypes.string,
    searchBy: PropTypes.string,
    sortBy: PropTypes.string,
    item: PropTypes.object,
    getItem: PropTypes.func,
    match: PropTypes.object,
};

Details.defaultProps = {
    value: '',
    searchBy: '',
    sortBy: '',
    item: {},
    getItem: null,
    match: {params: {id: ''}},
};

const mapStateToProps = (state) => {
    const {
        value,
        searchBy,
        sortBy,
        item,
    } = state.appReducer;

    return {
        value,
        searchBy,
        sortBy,
        item,
    };
};

export default connect(mapStateToProps, {
    getItem,
})(Details);
