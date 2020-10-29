import React from 'react';

function State(props) {
    return(
        <div id={props.id}>
            <h1>State trong ReactJS</h1>
            <h2>
                <ul>
                    <li>State in class compoment</li>
                    <p></p>
                    <li>State trong function compoment</li>
                </ul>
            </h2>
        </div>
    );
}

export default State;