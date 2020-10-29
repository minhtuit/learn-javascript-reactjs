import React from 'react';
import image12 from './image/image12.png';
import image13 from './image/image13.png';


function Cautruccomponent(props) {
    return(
        <div id={props.id}>
            <h1>Có 2 CẤU TRÚC CỦA 1 COMPONENT TRONG REACTJS:</h1>
            <h2>
                <ul>
                    <li>Function component:</li>
                    <img src={image12} alt="Tran Minh Tu" />
                    <li>Class component:</li>
                    <img src={image13} alt="Tran Minh Tu" />

                </ul>
            </h2>
        </div>
    );
}

export default Cautruccomponent;