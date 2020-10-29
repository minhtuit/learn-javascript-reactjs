import React from 'react';
import image6 from './image/image6.png';
import image7 from './image/image7.png';
import image8 from './image/image8.png';


function Taophantujsx (props) {
    return (
        <div id={props.id}>
            <h1>TẠO 1 PHẦN TỬ JSX ĐƠN GIẢN:</h1>
            <img src={image6} alt="Tran Minh Tu" />
            <h2>
                <ul>
                    <li>render JSX vào DOM</li>
                </ul>
            </h2>
            <img src={image7} alt="Tran Minh Tu" />
            <h2>VD:</h2>
            <img src={image8} alt="Tran Minh Tu" />
        </div>
    )
}

export default Taophantujsx;