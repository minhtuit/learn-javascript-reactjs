import React from 'react';
import Block_and_function_scopes from './image/Block_and_function_scopes.png';
import logo1 from './image/logo1.png';
import logo2 from './image/logo2.png';
import logo3 from './image/logo3.png';
import logo4 from './image/logo4.png';
import logo5 from './image/logo5.png';
import logo6 from './image/logo6.png';
import logo7 from './image/logo7.png';
import logo8 from './image/logo8.png';



function BlockScopes(props) {
    return(
        <div id={props.id}>
            <h2>Block Scopes và từ khoá var/let/const</h2>
            <p>
                <font>Phạm vi khối được tạo bằng một cặp dấu ngoặc nhọn.</font>
                <font> Điều này xảy ra mỗi khi bạn tạo câu lệnh if, câu lệnh for, câu lệnh while,... Ngoại lệ duy nhất là dấu ngoặc nhọn mà bạn sử dụng vơí các hàm.</font>
                <font>Chúng tạo ra một phạm vi chức năng, không phải là một phạm vi khối</font>
            </p>
            <br />
            <div> Block and function scopes</div>
            <div>
                <img src={Block_and_function_scopes} alt="TMT" />
                <p>
                    Function scopes được tạo cho mỗi function(như <strong>doSomething</strong> trên). Một sự khác biệt mà họ có so với phạm bi khối rõ ràng khi sử dụng <strong>var</strong> từ khoá.Các biến
                    được định nghĩa <strong>var</strong> bên trong một phạm vi hàm là được; họ không bị rò rỉ ra khỏi phạm vi đó. Nếu bạn cố gắng truy cập chúng ngoài phạm vi, bạn không thể:
                </p>
                <img src={logo1} alt="TMT" /> 
                <div>
                    <p>
                    Tuy nhiên, khi bạn xác định các biến <strong>var</strong> trong phạm vi khối, bạn hoàn toàn có thể truy cập chúng bên ngoài phạm vi đó sau đó, 
                    điều này có một chút vấn đề. Ví dụ, trong một câu lệnh vòng lặp for chuẩn, nếu biến vòng lặp được xác định,
                    <strong>var</strong> bạn có thể truy cập vào biến đó <strong> sau khi vòng lặp hoàn tất</strong> .
                    </p>
                    <img src={logo2} alt="TMT" /> 
                    <p>Đây là lý do tại sao cách được khuyến nghị hơn để khai báo các biến trong JavaScript hiện đại là sử dụng <strong>let</strong> từ khóa thay vì <strong>var</strong> từ khóa.
                     Khi xác định biến với <strong>let</strong>, chúng ta sẽ không gặp phải vấn đề truy cập ngoài phạm vi kỳ lạ này.
                    </p>
                </div>
                <img src={logo3} alt="TMT" /> 
                <br />
                <p>
                    Tuy nhiên, bạn chỉ nên sử dụng <strong>let</strong> từ khóa khi giá trị của biến cần được thay đổi. 
                    Đây không phải là một điều phổ biến trong mã của bạn. Đối với hầu hết các trường hợp khác,
                    bạn nên sử dụng <strong>const</strong> từ khóa thay thế, vì vậy hãy để tôi cho bạn biết về nó.
                </p>
                <br />
                <img src={logo4} alt="TMT" /> 
                <br />
                <p>
                    Khi bạn thay đổi giá trị của biến, <strong>V</strong> bạn không thực sự thay đổi nội dung của không gian bộ nhớ được liên kết ban đầu <strong>V</strong>.
                    Thay vào đó, bạn đang tạo một không gian bộ nhớ mới và thay đổi <strong>V</strong> nhãn được liên kết với không gian mới đó.
                </p>
                <br />
                <img src={logo5} alt="TMT" /> 
                <br />
                <p>
                    Khi bạn sử dụng <strong>const</strong> để xác định một biến, bạn đang hướng dẫn máy tính không chỉ gắn nhãn một khoảng trống trong bộ nhớ mà 
                    <strong>còn không bao giờ thay đổi</strong> nhãn đó. Nhãn sẽ được liên kết vĩnh viễn với cùng một không gian của nó trong bộ nhớ.
                </p>
                <br />
                <img src={logo6} alt="TMT" /> 
                <br />
                <p>
                    Lưu ý rằng phần hằng ở đây chỉ là nhãn. Giá trị của những gì trong không gian bộ nhớ vẫn có thể thay đổi (nếu nó có thể thay đổi). 
                    Ví dụ: các đối tượng trong JavaScript có thể thay đổi, vì vậy đối với những điều <strong>V</strong> trên:
                </p>
                <br />
                <img src={logo7} alt="TMT" /> 
                <br />
                <p>
                    Điều này cũng áp dụng cho các mảng (vì chúng cũng có thể thay đổi).
                </p>
                <br />
                <p>
                    Chuỗi và Số nguyên là bất biến trong JavaScript nên cách duy nhất để thay đổi giá trị chuỗi hoặc số nguyên trong JavaScript 
                    là loại bỏ không gian bộ nhớ hiện tại và gắn nhãn lại cho một chuỗi khác. Đó là lý do tại sao nếu bạn có một bộ đếm số mà
                    bạn cần tăng lên trong chương trình của mình, bạn sẽ cần sử dụng <strong>let</strong>:
                </p>
                <br />
                <img src={logo8} alt="TMT" /> 


            </div>
        </div>
    )
}

export default BlockScopes;