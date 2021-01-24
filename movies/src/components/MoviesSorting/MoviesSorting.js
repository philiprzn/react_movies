import React from 'react';
import {connect} from "react-redux";
import {handleSortChange} from "../../store/actions/app";

const MoviesSorting = (props) => {
    const {app} = props;

    return (
        <>
            <div className="sorting-block">
                <h3>SORT BY</h3>
                <select onChange={e => props.handleSortChange(e.target.value)}>
                    <option value='none'>None</option>
                    <option value='releaseDate'>Release Date</option>
                    <option value='rating'>Rating</option>
                </select>
            </div>
        </>
    )
};

function mapStateToProps(state) {
    const {movies, app} = state;

    return {movies, app};
};

const mapDispatchToProps = dispatch => {
    return {
        handleSortChange: (value) => dispatch(handleSortChange(value)),
    }
};

export default React.memo(connect(mapStateToProps, mapDispatchToProps)(MoviesSorting));