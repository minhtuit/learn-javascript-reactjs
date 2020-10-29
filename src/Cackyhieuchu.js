import React from 'react';
import literal1 from './image/literal1.png';
import literal2 from './image/literal2.png';
import literal3 from './image/literal3.png';
import literal4 from './image/literal4.png';
import literal5 from './image/literal5.png';

function Cackyhieuchu(props) {
    return(
        <div id={props.id}>
            <h2>The literal notations</h2>
            <br />
            <p>
            Bạn có thể tạo một đối tượng JavaScript theo một vài cách khác nhau nhưng 
            cách phổ biến nhất là với một đối tượng theo nghĩa đen (sử dụng dấu ngoặc nhọn):
            </p>
            <br />
            <p>
                Đối tượng theo nghĩa đen:
            </p>
            <img src={literal1} slt="TMT" /> 
            <p>Ký hiệu chữ này (ký hiệu bộ khởi tạo AKA) rất phổ biến. Chúng tôi sử dụng nó cho các đối tượng, mảng, chuỗi, số và thậm chí những thứ như biểu thức chính quy!</p>
            <br />
            <p>Đối với mảng, cú pháp chữ là sử dụng một tập hợp các dấu ngoặc vuông []:</p>
            <br />
            <p>Mảng chữ:</p>
            <img src={literal2} slt="TMT" /> 
            <br />
            <p>Đối với chuỗi, bạn có thể sử dụng dấu nháy đơn hoặc dấu nháy kép:</p>
            <img src={literal3} slt="TMT" /> 
            <p>2 cách này để xác định chuỗi ký tự trong JavaScript là tương đương nhau. JavaScript hiện đại có cách thứ ba để xác định chuỗi và đó là sử dụng ký tự backtick .</p>
            <img src={literal4} slt="TMT" /> 
            <p>Dán nó vào bảng điều khiển của trình duyệt của bạn và xem cách nó tạo thành một chuỗi nhiều dòng có giá trị ngẫu nhiên:</p>
            <img src={literal5} slt="TMT" /> 

        </div>
    );
}

export default Cackyhieuchu;