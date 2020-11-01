import React from 'react';
import arr_1 from './image/arr_1.png';
import arr_2 from './image/arr_2.png';
import arr_3 from './image/arr_3.png';
import arr_4 from './image/arr_4.png';
import arr_5 from './image/arr_5.png';
import arr_6 from './image/arr_6.png';
import arr_7 from './image/arr_7.png';
import arr_8 from './image/arr_8.png';
import arr_9 from './image/arr_9.png';
import arr_10 from './image/arr_10.png';
import map_1 from './image/map_1.png';

function ArrayJs(props) {
    return(
        <div id={props.id}>
            <h1>Array Method</h1>
            <h3>
                <ol>
                    <li>tenMang(index): Tham chiếu 1 phần tử Array: </li>
                    <img src={arr_1} alt="TMT" />
                    <li>arr.length: Trả về số phần tử tron mảng đó:</li>
                    <img src={arr_2} alt="TMT" />
                    <li>arr.concat(arr2): Dùng để kết nối 2 hay nhiều mảng với nhau. Phương thức này sẽ không làm thay đổi các mảng đã có mà thay vào đó sẽ trả về mảng mới:</li>
                    <img src={arr_3} alt="TMT" />
                    <li>arr.push(x): Thêm phần tử x vào cuối mảng arr:</li>
                    <img src={arr_4} alt="TMT" />
                    <li>arr.pop(): Xoá phần tử vị trí cuối cùng và trả về mảng đó:</li>
                    <img src={arr_5} alt="TMT" />
                    <li>arr.shift(): Xoá phần tử đầu mảng:</li>
                    <img src={arr_6} alt="TMT" />
                    <li>arr.unshift(x): Thêm phần tử x vào đầu mảng:</li>
                    <img src={arr_7} alt="TMT" />
                    <li>arr.splice(index): Xoá phần tử chỉ mục của nó:</li>
                    <img src={arr_8} alt="TMT" />
                    <li>arr.slice(): Sao chép 1 mảng arr và trả về mảng sau khi sao chép:</li>
                    <img src={arr_9} alt="TMT" />
                    <li>arr.forEach(callback): Khi thực thi 1 hàm khi duyệt qua từng phần tử của mảng:</li>
                    <img src={arr_10} alt="TMT" />
                    <li>arr.map(callback):</li>
                    <p>Ghi chú:</p>
                    <p>- callback là 1 hàm (function) để map mỗi phần tử cuả arr thành 1 phần tử mới</p>
                    <p>- callback có thể nhận  từ 0 đến 3 tham số: </p>
                    <p>+, value: tương ứng với từng phần tử của mảng </p>
                    <p>+, index: tương ứng với chỉ số index (từ 0 đến arr.lenght - 1)</p>
                    <p>+, arr: tương ứng với arr(mảng gọi đến hàm map)</p>
                    <p>VD:</p>
                    <img src={map_1} alt="TMT" />

                </ol>
            </h3>
        </div>
    );
}

export default ArrayJs;