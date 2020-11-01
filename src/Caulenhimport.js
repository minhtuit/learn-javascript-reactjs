import React from 'react';
import  cau_lenh_import from './image/cau_lenh_import.png'
import  cau_lenh_import_1 from './image/cau_lenh_import_1.png'
import  cau_lenh_import_2 from './image/cau_lenh_import_2.png'
import  cau_lenh_import_3 from './image/cau_lenh_import_3.png'


function Caulenhimport (props) {
    return (
        <div id={props.id}>
            <h1>CÂU LỆNH IMPORT TRONG REACTJS:</h1>
            <p>- import default export:</p>
            <img src={cau_lenh_import_2} alt="TMT" />
            <br />
            <img src={cau_lenh_import_3} alt="TMT" />
            <br />
            <p>- import named values:</p>
            <img src={cau_lenh_import} alt="TMT" />
            <br />
            <img src={cau_lenh_import_1} alt="TMT" />
        </div>
    )
}

export default Caulenhimport;