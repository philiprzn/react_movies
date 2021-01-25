import React from 'react';
import {connect} from "react-redux";
import {handleSortChange} from "../../store/actions/app";
import {useState} from 'react';

const Checkbox = (props) => {

};

const MoviesSorting = (props) => {
    const {app, movies} = props;
    const {filterType} = app;
    console.log('MoviesSorting filterType', filterType);

    const [checked, setChecked] = useState(filterType);
    const [localMovies, setLocalMovies] = useState(movies);

    const handleToggle = (e) => {
        const currentCheckboxValue = e.target.id;
        const currentIndex = checked.indexOf(currentCheckboxValue);
        const checkedArray = [...checked];

        if (currentIndex === -1) {
            checkedArray.push(currentCheckboxValue);

            console.log('newChecked 2 =', checkedArray);
        } else {
            checkedArray.splice(currentIndex, 1)
            console.log('newChecked 3 =', checkedArray);
        }

        const filtredLocalMovies = localMovies.filter(movie => {
            return movie.genre.some(item => {
                return checkedArray.some(R => R === item);
            });
        });

        console.log('filtredLocalMovies ===', filtredLocalMovies);

        setChecked(checkedArray);
    };

    return (
        <>
            <div className="sorting-filtering-block">
                <div className="filtering-block">
                    <h3>FILTER BY</h3>
                    <div>
                        <label htmlFor='all'>ALL</label>
                        <input type="checkbox" id='all' onChange={handleToggle}/>
                    </div>
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
    }
};

export default React.memo(connect(mapStateToProps, mapDispatchToProps)(MoviesSorting));