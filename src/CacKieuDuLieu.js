import React from 'react';
import dataType from './image/data-type.png';

function CacKieuDuLieu(props) {
    return(
        <div id={props.id}>
            <h1>Các kiểu dữ liêụ trong JavaScript</h1>
            <h2>
                <ol>
                    <li>Kiểu String</li>
                    <li>Kiểu Number</li>
                    <li>Kiểu Boolean</li>
                    <li>Kiểu Undefined</li>
                    <li>Kiểu Null</li>
                </ol>
            </h2>
            <img src={dataType} alt="data type" />
        </div>
    );
}

export default CacKieuDuLieu;