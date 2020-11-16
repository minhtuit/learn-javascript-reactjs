import React from 'react';
import image1 from './image/image1.png';
import image2 from './image/image2.png';
import image3 from './image/image3.png';
import image4 from './image/image4.png';
import image5 from './image/image5.png';
import pwdCommand from './image/pwd_command.png';
import clearCommand from './image/clear_command.png';
import lsCommand from './image/ls_command.png';
import mkdirCommand from './image/mkdir_command.png';


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
                    <li>Hiển thị đường dẫn tới thư mục hiện tại trong terminal</li>
                    <img src={pwdCommand} alt="pwdCommand" />
                    <li>Xoá hết chữ trên terminal</li>
                    <img src={clearCommand} alt="clearCommand" />
                    <li>Hiển thị danh sách các file và thư mục trong thư mục hiện tại</li>
                    <img src={lsCommand} alt="Ls Command" />
                    <li>Tạo 1 thư mục mới</li>
                    <img src={mkdirCommand} alt="mkdir" />
                </ul>
            </h2>
        </div>
    )
}

export default CacCauLenh;