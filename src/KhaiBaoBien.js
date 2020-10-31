import React from 'react';
import khai_bao_bien from './image/khai_bao_bien.png'

function KhaiBaoBien(props) {
    return(
        <div id={props.id}>
            <h1>Khai báo biến trong JavaScript</h1>
            <h2>Khai báo biến ta sử dụng từ khoá:</h2>
            <h4>
                <p>var khai báo biến có thể truy cập ở phạm vi hàm số hoặc bên ngoài hàm số, toàn cục.</p>
                <p>const được sử dụng để khai báo 1 hằng số, và giá trị của nó không thay đổi trong suốt chương trình.</p>
                <p>let khai báo biến chỉ có thể truy cập được trong block bao quanh nó được xác định bằng cặp {'{}'}</p>
                <img src={khai_bao_bien} alt="TMT" />
                <p>Gán giá trị cho biến: tenBien = giaTri;</p>
            </h4>
        </div>
    );
}

export default KhaiBaoBien;