import React from 'react';

function KhaiBaoBien(props) {
    return(
        <div id={props.id}>
            <h1>Khai báo biến trong JavaScript</h1>
            <h2>Khai báo biến ta sử dụng từ khoá:</h2>
            <h4>
                <p>- var tenBien; (Cách sử dụng từ giờ trở đi không dùng nữa, là phiên bản kết hợp cả let và const)</p>
                <p>- const tenBien = giaTri; (Dùng để khai báo 1 biến cố định, không dùng thay đổi giá trị, phải có giá trị ban đầu)</p>
                <p>- let tenBien; (let tương tự var)</p>
                <p>Gán giá trị cho biến: tenBien = giaTri;</p>
            </h4>
        </div>
    );
}

export default KhaiBaoBien;