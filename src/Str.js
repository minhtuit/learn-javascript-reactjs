import React from 'react';
import str_1 from './image/str_1.png';

function Str(props) {
    return(
        <div id={props.id}>
            <h1>String</h1>
            <h3>
                <p>- cộng string: 'hehe' + 'hoho' = 'hehe hoho'; (Thường không dùng cộng string)</p>
                <p>- templates string: `đây là template string: ${'{1 + 2}'}`</p>
                <p>VD:</p>
            </h3>
            <img src={str_1} alt="TMT" />
        </div>
    );
}

export default Str;