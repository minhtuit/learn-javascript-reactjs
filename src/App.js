import React from 'react';
import CacCauLenh from './CacCauLenh';
import Taophantujsx from './Taophantujsx';
import Jsxlongnhau from './Jsxlongnhau';
import Commentjsx from './Commentjsx';
import Sukhacnhau from './Sukhacnhau';
import Caulenhimport from './Caulenhimport';
import Cautruccomponent from './Cautruccomponent';
import Styles from './Styles';
import Props from './Props';
import State from './State';
import KhaiBaoBien from './KhaiBaoBien';
import CacKieuDuLieu from './CacKieuDuLieu';
import CacToanTu from './CacToanTu';
import FunctionJS from './FunctionJS';
import ArrayJs from './ArrayJs';
import ToanTuSoSanh from './ToanTuSoSanh';
import IfEles from './IfElse';
import VongLap from './VongLap';
import Obj from './Obj';
import Str from './Str';
import ChuoiTrongJs from './ChuoiTrongJs';
import HtmlVsJs from './HtmlVsJS';
import BlockScropes from './BlockScopes';
import Ham from './Ham';
import Cackyhieuchu from './Cackyhieuchu';

function App () {
    return (
        <div id="top">
            <a 
                style={{ position: 'fixed', right: '2%', bottom: '2%'}} 
                href="#top"
            >
                <button>
                    Scroll to top
                </button>
            </a>

            <h1>Mục lục ôn tập các câu lệnh trên terminal</h1>
            <h2>
                <li>
                    <a href="#JSX1">Các câu lệnh trên terminal</a>
                </li>
            </h2>

            <h1>Mục lục ôn tập JavaScript:</h1>
            <h2>
                <li>
                    <a href="#JS1">Khai báo biến trong JavaScript</a>
                </li>
                <li>
                    <a href="#JS2">Các kiểu dữ liệu tring JavaScript</a>
                </li>
                <li>
                    <a href="#JS3">Các toán tử trong JavaScript</a>
                </li>
                <li>
                    <a href="#JS4">Liệt kê các toán tử so sánh trong JavaScript</a>
                </li>
                <li>
                    <a href="#JS5">Function (hàm) trong JavaScript</a>
                </li>
                <li>
                    <a href="#JS6">Array Method</a>
                </li>
                <li>
                    <a href="#JS7">If else trong JavaScript</a>
                </li>
                <li>
                    <a href="#JS8">Vòng lặp (for, while) trong JavaScript</a>
                </li>
                <li>
                    <a href="#JS9">Object trong JavaScript</a>
                </li>
                <li>
                    <a href="#JS10">String</a>
                </li>
                <li>
                    <a href="#JS11">Phương thức chuỗi trong JavaScript</a>
                </li>
                <li>
                    <a href="#JS12">HTML vs JAVASCRIPT</a>
                </li>
            </h2>

            <h1>Mục lục ôn tập JavaScript-ReactJs:</h1>
            <h2>
                <li>
                    <a href="#All1">Block scopes and the var/let/const keywords</a>
                </li>
                <li>
                    <a href="#All2">Arrow functions and closures</a>
                </li>
                <li>
                    <a href="#All3">The literal notations</a>
                </li>
            </h2>

            <h1>Mục lục ôn tập ReactJs:</h1>
            <h2>
                
                <li>
                    <a href="#JSX2">Tạo 1 phần tử JSX đơn giản</a>
                </li>
                <li>
                    <a href="#JSX3">JSX lồng nhau phải trả về 1 phần tử duy nhất</a>
                </li>
                <li>
                    <a href="#JSX4">Comment trong JSX</a>
                </li>
                <li>
                    <a href="#JSX5">Sự khác nhau giữa HTML vs JSX</a>
                </li>
                <li>
                    <a href="#JSX6">Câu lệnh import trong ReactJS</a>
                </li>
                <li>
                    <a href="#JSX7">Các cấu trúc của 1 compoment trong ReactJs</a>
                </li>
                <li>
                    <a href="#JSX8">Style compoment trong ReactJs</a>
                </li>
                <li>
                    <a href="#JSX9">Props trong react</a>
                </li>
                <li>
                    <a href="#JSX10">State trong ReactJS</a>
                </li>
                <li>
                    <a href="#JSX11">Lifecyle Component trong ReactJS</a>
                </li>
                <li>
                    <a href="#JSX12">State trong ReactJS</a>
                </li>
            </h2>
            <KhaiBaoBien id="JS1"/>
            <CacKieuDuLieu id="JS2" />
            <CacToanTu id="JS3" />
            <ToanTuSoSanh id="JS4" />
            <FunctionJS id="JS5" />
            <ArrayJs id="JS6"/>
            <IfEles id="JS7" />
            <VongLap id="JS8" />
            <Obj id="JS9" />
            <Str id="JS10" />
            <ChuoiTrongJs id="JS11" />
            <HtmlVsJs id="JS12" />

            <BlockScropes id="All1" />
            <Ham id="All2" />
            <Cackyhieuchu id="All3" />

            <CacCauLenh id="JSX1" />
            <Taophantujsx id="JSX2" />
            <Jsxlongnhau id="JSX3" />
            <Commentjsx id="JSX4" />
            <Sukhacnhau id="JSX5" />
            <Caulenhimport id="JSX6" />
            <Cautruccomponent id="JSX7" />
            <Styles id="JSX8" />
            <Props id="JSX9" />
            <State id="JSX10" />
        </div>
    )
}

export default App;