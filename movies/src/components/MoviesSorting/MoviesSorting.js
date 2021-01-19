import React from 'react';

const MoviesSorting = (props) => {
    return (
        <>
            <div className="sorting-block">
                <h3>SORT BY</h3>
                <select onChange={e => props.hanldeMovieSort(e)}>
                    <option value='none'>None</option>
                    <option value='releaseDate'>Release Date</option>
                    <option value='rating'>Rating</option>
                </select>
            </div>
        </>
    )
};

export default React.memo(MoviesSorting);