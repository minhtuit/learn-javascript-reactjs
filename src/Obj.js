import React from 'react';
import obj_1 from './image/obj_1.png';

function Obj(props) {
    return(
        <div id={props.id}>
            <h1>Object trong Javascript</h1>
            <h2>Tham chiếu đến thuộc tính cuả 1 Object</h2>
            <p>- tenObject.tenThuocTinh hoặc tenObject['tenThuocTinh']</p>
            <h4>VD:</h4>
            <img src={obj_1} alt="TMT" />
            <h3>
                <ol>
                    <li>Object.assign(): Được sử dụng để sao chép các giá trị cuả tất cả thuộc tính có thể liệt kê từ một hoặc nhiều đối tượng </li>
                    <li>Object.create(): Tạo 1 đối tượng mới , sử dụng 1 đối tượng có làm nguyên mẫu của đối tượng mới được tạo.</li>
                </ol>
            </h3>
        </div>
    );
}

export default Obj;