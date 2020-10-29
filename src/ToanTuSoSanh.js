import React from 'react';

function ToanTuSoSanh(props) {
    return(
        <div id={props.id}>
            <h1>Liệt kê các toán tử so sánh trong JavaScript</h1>
            <h3>
                <ol>
                    <li>Lớn hơn: {'>'}</li>
                    <li>Nhỏ hơn: {'<'}</li>
                    <li>Lớn hơn hoặc bằng: {'>='}</li>
                    <li>Nhỏ hơn hoặc bằng: {'<='}</li>
                    <li>Giống nhau: ===</li>
                    <li>Khác nhau: !==</li>
                    <li>Và: &&</li>
                    <li>Hoặc: ||</li>
                    <li>Phủ định: !</li>
                </ol>
            </h3>
        </div>
    );
}

export default ToanTuSoSanh;