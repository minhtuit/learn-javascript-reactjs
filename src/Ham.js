import React from 'react';
import Arrow_function_and_closures from './image/Arrow_function_and_closures.png';
import function2 from './image/function2.png';
import function3 from './image/function3.png';
import function4 from './image/function4.png';
import function5 from './image/function5.png';
import function6 from './image/function6.png';
import function7 from './image/function7.png';



function Ham(props) {
    return(
        <div id={props.id}>
            <h2>Arrow function and closures</h2>
            <p>Hàm mũi tên có lẽ là tính năng được sử dụng nhiều nhất trong JavaScript hiện đại.</p>
            <br />
            <img src={Arrow_function_and_closures} alt="logo" />
            <p>
                Cú pháp "ngắn hơn" mới này để xác định các hàm phổ biến không chỉ vì nó ngắn hơn mà còn vì nó hoạt động dễ đoán hơn với các bao <strong>đóng</strong> . 
                Các hàm mũi tên cung cấp quyền truy cập vào môi trường <strong>xác định</strong> của chúng trong khi các hàm thông thường cấp quyền truy cập vào môi trường 
                <strong>gọi</strong> của chúng . Có thể truy cập này thông qua <strong>this</strong> từ khóa đặc biệt trong phạm vi của hàm:
            </p>
            <ul>
                <li>
                    Giá trị của <strong>this</strong> từ khóa bên trong một hàm thông thường phụ thuộc vào <strong>cách</strong> hàm được <strong>gọi</strong>.
                </li>
                <li>
                    Giá trị của <strong>this</strong>từ khóa bên trong hàm mũi tên phụ thuộc vào vị trí hàm được <strong>định nghĩa</strong>.
                </li>
            </ul>
            <p>
                Đây là một ví dụ mã để mở rộng giải thích. Cố gắng tìm ra những gì sẽ được in trong Đầu ra # 1 đến # 4 (4 dòng cuối cùng):
            </p>
            <br />
            <img src={function2} alt="TMT" />
            <br />
            <p>
                Ví dụ này có một hàm thông thường <strong>(regularF)</strong> và một hàm mũi tên <strong>(arrowF)</strong> 
                được định nghĩa trong cùng một môi trường và được gọi bởi cùng một người gọi. Đây là giải thích về kết quả đầu ra trong 4 dòng cuối cùng:
            </p>
            <ol>
                <li>
                    Hàm thông thường sẽ luôn sử dụng nó <strong>this</strong> để đại diện cho ai đã gọi nó. Trong ví dụ trên, trình gọi của cả hai hàm là <strong>fancyObj</strong> chính nó.
                    Đó là lý do tại sao Đầu ra số 1 là "TÀI CHÍNH".
                </li>
                <li>
                    Hàm mũi tên sẽ luôn in <strong>this</strong> phạm vi có sẵn tại thời điểm nó được xác định. Đó là lý do tại sao Đầu ra # 2 là "TOP".
                </li>
                <li>
                    Các chức năng <strong>.call</strong>, <strong>.apply</strong> và <strong>.bind</strong> có thể được sử dụng để thay đổi môi trường gọi.
                    Đối số đầu tiên của họ trở thành "người gọi" mới. Đó là lý do tại sao Đầu ra # 3 là "FAKE".
                </li>
                <li>
                    Hàm mũi tên không quan tâm đến sự <strong>.call</strong> thay đổi của người gọi. Đó là lý do tại sao Đầu ra # 4 là "TOP" chứ không phải là "FAKE" mới.
                </li>
            </ol>
            <br />
            <p>
                Một điều thú vị khác về các hàm mũi tên là nếu hàm chỉ có một dòng trả về:
            </p>
            <br />
            <img src={function3} alt="TMT" />
            <br />
            <p>
                Bạn có thể làm cho nó ngắn gọn hơn nữa bằng cách loại bỏ hoàn toàn các dấu ngoặc nhọn và từ khóa return.
            </p>
            <br />
            <img src={function4} alt="TMT" /> 
            <br />
            <p>
                Bạn cũng có thể xóa dấu ngoặc đơn xung quanh đối số nếu hàm nhận được một đối số:
            </p>
            <br />
            <img src={function5} alt="TMT" /> 
            <br />
            <p>
                Cú pháp ngắn hơn nhiều này thường phổ biến cho các chức năng mà có được truyền cho phương pháp mảng như <strong>map</strong>, <strong>reduce</strong>, <strong>filter</strong>, 
                và các phương pháp lập trình chức năng khác:
            </p>
            <img src={function6} alt="TMT" /> 
            <br />
            <p>
            Lưu ý rằng nếu bạn muốn sử dụng phiên bản một hàm mũi tên để tạo một hàm trả về một đối tượng, bạn sẽ phải đặt đối tượng đó trong dấu ngoặc đơn vì nếu không thì các dấu ngoặc nhọn
            sẽ thực sự dành cho phạm vi của hàm.
            </p>
            <img src={function7} alt="TMT" /> 


        </div>
    );
}

export default Ham;