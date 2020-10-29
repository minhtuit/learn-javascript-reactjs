import React from 'react';
 
function VongLap(props) {
    return(
        <div id={props.id}>
            <h1>Vòng lặp (for, while) trong JavaScript</h1>
            <h2>
                <ol>
                    <li>for: Vòng lặp lại các phần tử cho số lần cố định:</li>
                    <p>for (initalization; condition; increment) {'{'}</p>
                    <p>code to be executed  {'}'}</p>
                    <li>while: Xử lí 1 biểu thức điều kiện và 1 khối lệnh được lặp laị cho đến khi giá trị của biểu thức cho ra giá trị false: </li>
                    <p>Chú Ý:</p>
                    <p>- Dấu {'{}'} là không cần thiết khi chỉ có một câu lệnh cần được xử lí lặp lại, tuy nhiên việc sử dụng nó được cân nhắc hơn cho tính đồng nhất và tốt hơn cho việc hiểu mã lệnh. </p>
                    <p>-  Lệnh có thể không được xử lí bất kỳ lần nào (khi biểu thức điều kiện trả về false ngay từ ban đầu)</p>
                    <li>for...in: Dùng để lặp qua các thuộc tính của đối tượng:</li>
                    <p>for (variable in object) {'{'}</p>
                    <p>statement {'}'}</p>
                    <li>for...of: Để chạy vòng lặp trên String. Hoặc các đối tượng tương tự như Array</li>
                    <p>for (variable of iterable) {'{'}</p>
                    <p>statement {'}'}</p>
                    <p>variable: Tên biến đại diện cho 1 phần tử được loop.</p>
                    <p>iterable: Array,String,... các đối tượng để chạy vòng lặp.</p>
                </ol>
            </h2>
        </div>
    );
}

export default VongLap;