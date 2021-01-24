import React from 'react';
import {connect} from "react-redux";
import {handleSortChange} from "../../store/actions/app";
import {useState} from 'react';

const MoviesSorting = (props) => {
    const {app} = props;
    const {filterType} = app;
    console.log('MoviesSorting filterType', filterType);

    const [checked, setChecked] = useState(filterType);

    const handleToggle = (e) => {
        console.log('HANDLE TOGGLE', e.target.id);
        const currentCheckbox = e.target.id;
        const currentIndex = checked.indexOf(currentCheckbox);
        const newChecked = [...checked];

        console.log('newChecked =', newChecked);

        if (currentIndex === -1) {
            newChecked.push(currentCheckbox);
            console.log('newChecked 2 =', newChecked);
        } else {
            newChecked.splice(currentIndex, 1)
            console.log('newChecked 3 =', newChecked);
        }

        setChecked(newChecked);
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