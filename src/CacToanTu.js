import React from 'react';
import toan_tu from './image/toan_tu.png';

function CacToanTu(props) {
    return(
        <div id={props.id}>
            <h1>Các toán tử trong JavaScript</h1>
            <h2>
                <ol>
                    <li>Cộng: +</li>
                    <li>Trừ: -</li>
                    <li>Nhân: *</li>
                    <li>Chia: /</li>
                    <li>Chia lấy dư: %</li>
                    <li>Cộng a thêm 1 đơn vị: ++a ; a++ {'<=>'} a = a + 1</li>
                    <li>Trừ a đi 1 đơn vị: --a ; a-- {'<=>'} a = a - 1</li>
                    <li>Cộng a thêm n đơn vị: a += n {'<=>'} a = a + n</li>
                    <li>Trừ a đi n đơn vị: a -= n {'<=>'} a = a - n</li>
                    <li>Nhân a lên n lần: a *= n {'<=>'} a = a * n</li>
                    <li>Chia a đi n lần: a /= n {'<=>'} a = a / n</li>
                </ol>
            </h2>
            <img src={toan_tu} alt="TMT" />
        </div>
    );
}

export default CacToanTu;