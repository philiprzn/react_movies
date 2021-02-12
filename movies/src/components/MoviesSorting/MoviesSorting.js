import React, {useState} from 'react';
import {connect} from "react-redux";
import { handleSortChange, handleFilterChange } from "../../store/actions/app";

const Checkbox = (props) => {

};

const MoviesSorting = (props) => {
    const {app, movies} = props;
    const {filterTypeArray} = app;
    // console.log('MoviesSorting filterType', filterType);

    const [checked, setChecked] = useState(filterTypeArray);
    const [localMovies, setLocalMovies] = useState(movies);

    const handleToggle = (e) => {
        const currentCheckboxValue = e.target.id;
        const currentIndex = filterTypeArray.indexOf(currentCheckboxValue);
        const checkedArray = [...filterTypeArray];

        if (currentIndex === -1) {
            checkedArray.push(currentCheckboxValue);
        } else {
            checkedArray.splice(currentIndex, 1)
        }

        props.handleFilterChange(checkedArray);
    };

    return (
        <>
            <div className="sorting-filtering-block">
                <div className="filtering-block">
                    <h3>FILTER BY</h3>
                    {/*<div>
                        <label htmlFor='all'>ALL</label>
                        <input type="checkbox" id='all' onChange={handleToggle}/>
                    </div>*/}
                    <div>
                        <label htmlFor='documentary'>DOCUMENTARY</label>
                        <input type="checkbox" id='documentary' onChange={handleToggle}/>
                    </div>
                    <div>
                        <label htmlFor='comedy'>COMEDY</label>
                        <input type="checkbox" id='comedy' onChange={handleToggle}/>
                    </div>
                    <div>
                        <label htmlFor='horror'>HORROR</label>
                        <input type="checkbox" id='horror' onChange={handleToggle}/>
                    </div><div>
                        <label htmlFor='crime'>CRIME</label>
                        <input type="checkbox" id='crime' onChange={handleToggle}/>
                    </div>
                </div>
                <div className="sorting-block">
                    <h3>SORT BY</h3>
                    <select onChange={e => props.handleSortChange(e.target.value)}>
                        <option value='none'>None</option>
                        <option value='releaseDate'>Release Date</option>
                        <option value='rating'>Rating</option>
                    </select>
                </div>
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
        handleFilterChange: (value) => dispatch(handleFilterChange(value)),
    }
};

export default React.memo(connect(mapStateToProps, mapDispatchToProps)(MoviesSorting));