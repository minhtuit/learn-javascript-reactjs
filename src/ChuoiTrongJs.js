import React from 'react';

function ChuoiTrongJs(props) {
    return(
        <div id={props.id}>
            <h1>Phương thức chuỗi trong JavaScript</h1>
            <h2>
                <ol>
                    <li>length: Trả về độ dài của chuỗi</li>
                    <li>prototype: Cho phép bạn thêm thuộc tính hay phương thức.</li>
                    <li>charAt(): Nó cung cấp giá trị char hiện tại chỉ mục được chỉ định.</li>
                    <li>charCodeAt(): Nó cung cấp giá trị Unicode của 1 kí tự có trong chỉ mục được chỉ định.</li>
                    <li>concat(): Nó cung cấp 1 sự kết hợp của hai hoặc nhiều chuỗi.</li>
                    <li>indexOf(): Nó cung cấp vị trí cuả 1 giá trị char có trong chuỗi đã cho.</li>
                    <li>laaltndexOf(): Nó cung cấp vị trí cuả 1 giá trị char có trong chuỗi đã cho bằng cách tìm kiếm một kí tự từ vị trí cuối cùng.</li>
                    <li>search(): Nó tìm kiếm một biểu thức chính quy trong một chuỗi đã cho trả về vị trí của nó nếu xảy ra khớp.</li>
                    <li>match(): Nó tìm kiếm một biểu thức chính quy trong một chuỗi đã cho trả về biểu thức chính quy nếu xảy ra khớp.</li>
                    <li>replace(): Nó thay thế 1 chuỗi nhất định với sự thay thế được chỉ định.</li>
                    <li>substr(): Nó được sủ dụng để tìm nạp 1 phần tử của chuỗi đã cho trên cơ sở vị trí và độ dài bắt đầu được chỉ định.</li>
                    <li>substring(): Nó được sử dụng để tìm nạp 1 phần của chuỗi đã cho trên cơ sở chỉ mục đã chỉ định.</li>
                    <li>slice(): Nó được sử dụng để tìm nạp 1 phần tử của chuỗi đã cho. Nó cho phép chúng ta gán chỉ số tích cực cũng như tiêu cực.</li>
                    <li>toLowerCase(): Nó chuyển đổi chuỗi đã cho thành chữ thường.</li>
                    <li>toLocaleLowerCase(): Nó chuyển đổi chuỗi đã cho thành chữ thường trên cơ sở ngôn ngữ hiện tại của máy chủ.</li>
                    <li>toUpperCase(): Nó chuyển đổi chuỗi đã cho thành chữ in hoa.</li>
                    <li>toLocaleUpperCase(): Nó chuyển đổi chuỗi đã cho thành chữ in hoa trên cơ sở ngôn ngữ hiện tại cuả máy chủ.</li>
                    <li>toString(): Nó cung cấp 1 chuỗi đại diện cho đối tượng cụ thể</li>
                    <li>valueOf(): Nó cung cấp giá trị nguyên thuỷ đã cho đối tượng chuỗi.</li>
                    <li>split(): split() biến 1 chuỗi thành 1 mảng các chuỗi bằng cách tách chuỗi theo kí tự được chỉ định.</li>
                    <li>includes(): includes() xác định xem 1 chuỗi có thể được tìm thấy trong một chuỗi khác hay không, trả về true hoặc false khi thích hợp.</li>

                </ol>
            </h2>
        </div>
    );
}

export default ChuoiTrongJs;