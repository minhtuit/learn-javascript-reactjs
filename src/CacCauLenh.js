import React from 'react';
import image1 from './image/image1.png';
import image2 from './image/image2.png';
import image3 from './image/image3.png';
import image4 from './image/image4.png';
import image5 from './image/image5.png';


function CacCauLenh (props) {
    return (
        <div id={props.id}>
            <h1>CÁC CÂU LỆNH TERMINAL:</h1>
            <h2>
                <ul>
                    <li>Tạo 1 project ReactJs:</li>
                    <img src={image1} alt="Tran Minh Tu" />
                    <li>Chạy project ReactJs:</li>
                    <img src={image2} alt="Tran Minh Tu" />
                    <li>Mở Visual Code tại thư mục hiện tại:</li>
                    <img src={image3} alt="Tran Minh Tu" />
                    <li>Di chuyển đến 1 thư mục trong terminal:</li>
                    <img src={image4} alt="Tran Minh Tu" />
                    <li>Di chuyển thư mục cha (thư mục truớc):</li>
                    <img src={image5} alt="Tran Minh Tu" />
                    <li>Đường dẫn tron terminal</li>
                    
                </ul>
            </h2>
        </div>
    )
}

export default CacCauLenh;