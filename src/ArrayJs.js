import React from 'react';

function ArrayJs(props) {
    return(
        <div id={props.id}>
            <h1>Array Method</h1>
            <h3>
                <ol>
                    <li>tenMang(index): Tham chiếu 1 phần tử Array: </li>
                    <p>var mang = [1, 5, 8, 9, 0]</p>
                    <p>console.log(mang[2]) // 8</p>
                    <li>arr.length: Trả về số phần tử tron mảng đó:</li>
                    <p>var a = [1 , 3, 5, 7, 8, 9];</p>
                    <p>console.log(a.length); // 6</p>
                    <li>arr.concat(arr2): Dùng để kết nối 2 hay nhiều mảng với nhau. Phương thức này sẽ không làm thay đổi các mảng đã có mà thay vào đó sẽ trả về mảng mới:</li>
                    <p>var a = [1 , 3, 5, 7, 8, 9];</p>
                    <p>var b = [2, 4, 6, 7];</p>
                    <p>console.log(a.concat(b)); // [1, 3, 5, 7, 8, 9, 2, 4, 6, 7]</p>
                    <li>arr.push(x): Thêm phần tử x vào cuối mảng arr:</li>
                    <p>var a = [1 , 3, 5, 7, 8, 9];</p>
                    <p>var b = [2, 4, 6, 7];</p>
                    <p>console.log(a.push(b)); // [1, 3, 5, 7, 8, 9,[2, 4, 6, 7]]</p>
                    <li>arr.pop(): Xoá phần tử vị trí cuối cùng và trả về mảng đó:</li>
                    <p>var a = [1 , 3, 5, 7, 8, 9];</p>
                    <p>console.log(a.pop()); // 9</p>
                    <p>console.log(a); // [1, 3, 5, 7, 8]</p>
                    <li>arr.shift(): Xoá phần tử đầu mảng:</li>
                    <p>var a = [1 , 3, 5, 7, 8, 9];</p>
                    <p>console.log(a.shift());</p>
                    <p>console.log(a); // [3, 5, 7, 8, 9]</p>
                    <li>arr.unshift(x): Thêm phần tử x vào đầu mảng:</li>
                    <p>var a = [1 , 3, 5, 7, 8, 9];</p>
                    <p>var b = [2, 4, 6, 7];</p>
                    <p>a.unshift(b);</p>
                    <p>console.log(a); // [[2, 4, 6, 7], 1, 3, 5, 7, 8, 9]</p>
                    <li>arr.splice(index): Xoá phần tử chỉ mục của nó:</li>
                    <p>var a = [1 , 3, 5, 7, 8, 9];</p>
                    <p>a.splice(3);</p>
                    <p>console.log(a); // [1, 3, 5, 8, 9]</p>
                    <li>arr.slice(): Sao chép 1 mảng arr và trả về mảng sau khi sao chép:</li>
                    <p>var a = [1 , 3, 5, 7, 8, 9];</p>
                    <p>var b = a;</p>
                    <p>console.log(b); //[1 , 3, 5, 7, 8, 9]</p>
                    <p>b[0] = 2;</p>
                    <p>console.log(b); // [2 , 3, 5, 7, 8, 9]</p>
                    <p>console.log(a); // [2 , 3, 5, 7, 8, 9]</p>
                    <p>var c = a.slice()</p>
                    <p>console.log(c); // [2 , 3, 5, 7, 8, 9]</p>
                    <p>c[0] = 5;</p>
                    <p>console.log(c); // [5 , 3, 5, 7, 8, 9];</p>
                    <p>console.log(c); // [5 , 3, 5, 7, 8, 9];</p>
                    <li>arr.forEach(callback): Khi thực thi 1 hàm khi duyệt qua từng phần tử của mảng:</li>
                    <p>const array1 = ['a', 'b', 'c'];</p>
                    <p>array1.forEach(element => console.log(element));</p>
                    <p>// callback là 1 hàm đươc truyền như 1 tham số vào hàm khác</p>
                    <p>// 'a'</p>
                    <p>// 'b'</p>
                    <p>// 'c'</p>
                    <li>arr.map(callback):</li>
                    <p>Ghi chú:</p>
                    <p>- callback là 1 hàm (function) để map mỗi phần tử cuả arr thành 1 phần tử mới</p>
                    <p>- callback có thể nhận  từ 0 đến 3 tham số: </p>
                    <p>+, value: tương ứng với từng phần tử của mảng </p>
                    <p>+, index: tương ứng với chỉ số index (từ 0 đến arr.lenght - 1)</p>
                    <p>+, arr: tương ứng với arr(mảng gọi đến hàm map)</p>
                    <p>VD:</p>
                    <p>const arr1 = [1, 3, 5 ,7];</p>
                    <p>
                        const arr2 = arr1.map(function(x) {'{ return x * 2}'});
                    </p>
                    <p>
                        // [2, 6, 10, 14]
                    </p>
                    <p>const arr3 = arr.map((x) => x + 1); // [2, 4, 6, 8]</p>
                </ol>
            </h3>
        </div>
    );
}

export default ArrayJs;