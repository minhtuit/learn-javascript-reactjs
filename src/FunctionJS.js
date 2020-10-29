import React from 'react';

function FunctionJS(props) {
    return(
        <div id={props.id}>
            <h1>Function (hàm) trong JavaScript</h1>
                <p>Khởi tạo 1 function bắt đầu với từ khoá function, tiếp theo đó là tên mà function mà bạn muốn tạo, 
                tiếp theo là ngoặc đơn () và cuối cùng là nơi các câu lệnh của function  giữa các dấu ngoặc nhọn {'{}'}.
            </p>
            <h3>- Cách 1:</h3>
            <p>
                function tenHam(thamSo1, thamSo2,...) {'{ return giaTri; }'} 
            </p>
            <h3>- Cách 2:</h3>
            <p>
                const tenHam = function(thamSo1, thamSo2, ...) {'{ return giaTri; }'}
            </p>
            <h3>- Cách 3:</h3>
            <p>
                const tenHam = (thamSo1,thamSo2) => {'{ return giaTri; }'}
            </p>
            <h3>1 lần gọi hàm : tenHam(thamSo1, thamSo2,...)</h3>

        </div>
    );
}

export default FunctionJS;