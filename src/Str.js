import React from 'react';
import Obj from './Obj';

function Str(props) {
    return(
        <div id={props.id}>
            <h1>String</h1>
            <h3>
                <p>- cộng string: 'hehe' + 'hoho' = 'hehe hoho'; (Thường không dùng cộng string)</p>
                <p>- templates string: `đây là template string: ${'{1 + 2}'}`</p>
                <p>VD:</p>
            </h3>
            <p>var ten = 'Tran Minh Tu';</p>
            <p>var tuoi = 18;</p>
            <p>var thongTin = `Ten: ${'{ten}'}, tuoi: ${'{tuoi}'}`</p>
            <p>var loiChao = `Xin chao ${'{ten}'}` {'<=>'} 'Xin chao ' + ten = 'Xin chao Tran Minh Tu'</p>
        </div>
    );
}

export default Str;