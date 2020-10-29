import React from 'react'

function Props(props) {
    return(
        <div id={props.id}>
            <h1>PROPS TRONG REACT</h1>
            <p>- props dùng để truyền dữ liệu từ component cha sang compoment con</p>
            <p>- Các kiểu dữ liệu truyền qua props:</p>
            <p>+, String</p>
            <p>+, Number</p>
            <p>+, Object</p>
            <p>+, Array</p>
            <p>+, Callback</p>
            <h2>VD:</h2>
        </div>
    );
}

export default Props;