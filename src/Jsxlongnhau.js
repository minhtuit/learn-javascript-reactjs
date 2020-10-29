import React from 'react';
import image9 from './image/image9.png';
import image10 from './image/image10.png';

function Jsxlongnhau(props) {
    return (
        <div id={props.id}>
            <h1>JSX LỒNG NHAU PHẢI TRẢ VỀ 1 PHẦN TỬ DUY NHẤT:</h1>
            <h2>
                VD:
                <ul>
                    <li>JSX hợp lệ:</li>
                    <img src={image9} alt="Tran Minh Tu" />
                    <li>JSX không hợp lệ:</li>
                    <img src={image10} alt="Tran Minh Tu" />
                </ul>
            </h2>
        </div>
    )
}

export default Jsxlongnhau;