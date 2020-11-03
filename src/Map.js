import React from 'react';
import map_2 from './image/map_2.png';

function Map(props) {
    return(
        <div id={props.id}>
            <h1>Map 1 array ra các phần tử JSX</h1>
            <img src={map_2} alt="TMT" />
        </div>
    );
}

export default Map;