import React from 'react';
import gitCommand from './image/git-command.png';

function GitCommand(props) {
    return(
        <div id={props.id}>
            <h1>Thao tác với git</h1>
            <h2>git add . // Để thêm tất cả các file đã sửa để chuẩn bị commit </h2>
            <h2>git commit -m "Nội dung commit" //Để commit các file đã được add</h2>
            <h2>git push -u origin main //Đẩy các file đã commit lên origin main (git hub)</h2>
            <img src={gitCommand} alt="GitCommand" />
        </div>
    );
}

export default GitCommand;