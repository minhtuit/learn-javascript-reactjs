import React from 'react';

function HtmlVsJs(props) {
    return(
        <div id={props.id}>
            <h1>HTML với JavaScript</h1>
            <h2>- Lấy ra 1 element trong HTML:</h2>
            <h3>
                <p>+, document.querySelector('.tenClass'),</p>
                <p>+, document.querySelector('#tenID'),</p>
                <p>+, document.quetySelector('tenTag')</p>
            </h3>
            <h2>- Các sự kiện element trong HTML:</h2>
            <h3>
                <p>+, click: Sự kiện click vào</p>
                <p>+, change: Sự kiện thay đổi</p>
                <p>+, input: Sự kiện khi thay đổi giá trị</p>
            </h3>
            <h2>- 2 cách bắt sự kiện element trong JavaScript</h2>
            <h3>
                <p>+, element.onclick = function() {'{}'}</p>
                <p>+, element.addEventListener('tên sự kiện', callback );</p>
            </h3>
        </div>
    );
}

export default HtmlVsJs;