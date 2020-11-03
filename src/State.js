import React from 'react';
import state_3 from './image/state_3.png';
import state_4 from './image/state_4.png';
import state_2 from './image/state_2.png';

function State(props) {
    return(
        <div id={props.id}>
            <h1>State trong ReactJS</h1>
            <h2>
                <ul>
                    <li>State in class compoment</li>
                    <h3>VD:</h3>
                    <img src={state_2} alt="TMT" />
                    <li>State trong function compoment</li>
                    <h3>VD:</h3>
                    <img src={state_3} alt="TMT" />
                    <img src={state_4} alt="TMT" />
                </ul>
            </h2>
        </div>
    );
}

export default State;