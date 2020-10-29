import React from 'react';

function Sukhacnhau(props) {
    return (
        <div id={props.id}>
            <h1>SỰ KHÁC NHAU GIỮA HTML VS JSX:</h1>
            <table>
                <tbody>
                    <tr>
                        <th>JSX</th>
                        <th>HTML</th>
                    </tr>
                    <tr>
                        <td>className</td>
                        <td>class</td>
                    </tr>
                    <tr>
                        <td>onClick</td>
                        <td>onclick</td>
                    </tr>
                    <tr>
                        <td>onChange</td>
                        <td>onchange</td>
                    </tr>
                    <tr>
                        <td>{'<br />'}</td>
                        <td>{'<br>'}</td>
                    </tr>
                    <tr>
                        <td>{'<hr />'}</td>
                        <td>{'<hr>'}</td>
                    </tr>
                    <tr>
                        <td>{'<input />'}</td>
                        <td>{'<input>'}</td>
                    </tr>
                    <tr>
                        <td>{'<div />'}</td>
                        <td>{'<div></div>'}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Sukhacnhau;