import React from 'react';
import image11 from './image/image11.png';

function Commentjsx(props) {
    return (
        <div id={props.id}>
            <h1>COMMENT TRONG JSX</h1>
            <div>{'{/*Đây là nội dung comment trong render sẽ không hiện ra trang web */}'}</div>
            <h2>VD:</h2>
            <img src={image11} alt="Tran Minh Tu" />
        </div>
    )
}

export default Commentjsx;