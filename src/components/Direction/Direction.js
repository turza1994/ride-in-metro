import React from 'react';
import './Direction.css'

const Direction = ({handleDirectionRoute}) => {
    return (
        <div className="col-sm-4">
            <form onSubmit={handleDirectionRoute} className="d-flex flex-column justify-content-between lead">
                <label>Pick From</label>
                <input required type="text" name="origin" placeholder="From where"/>
                <label>Pick To</label>
                <input required type="text" name="destination" placeholder="Going to"/>
                <input type="submit" value="Search" className="mt-3 w-75 mx-auto btn btn-danger"/>
            </form>
        </div>
    );
};

export default Direction;