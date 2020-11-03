import React from 'react';
import Lifecycle_1 from './image/Lifecycle_1.png';
import Lifecycle_2 from './image/Lifecycle_2.png';


function Lifecyle(props) {
    return(
        <div id={props.id}>
            <h1>Vòng đời component trong ReactJS</h1>
            <h2>
                Lifecycle có 3 phần chính:
                <ol>
                    <li>Mounting </li>
                    <li>Updation</li>
                    <li>Unmounting</li>
                </ol>
            </h2>
            <img src={Lifecycle_1} alt="TMT" />
            <h1>1. Mounting</h1>
            <h2> Mounting có 3 phương thức lifecycle đó là
                <ul>
                    <li>componentWillMount()</li>
                    <li>render()</li>
                    <li>componentDidMount()</li>
                </ul>
            </h2>
            <h1>2. Updation</h1>
            <h2>
                Props && State
                <img src={Lifecycle_2} alt="TMT" />
                <ul>
                    <li>componentWillReceiveProps(): Chạy khi component con nhận props từ component cha. Sau khi nhận được props mới từ component cha rồi có thì component con có thể set lại State.</li>
                    <li>shouldComponentUpdate(): Hàm này có thể nói là nó tăng hiệu năng của React lên. Nếu như return False thì các phương thức <strong>componentWillMount,render, componentDidUpdate</strong> sẽ không chạy nữa.</li>
                    <li>componentWillUpdate(): Hàm này cũng giống như hàm componentWillMount()</li>
                    <li>componentDidUpdate(): hàm này được gọi đến sau khi đã re-render lại hay React đã cập nhật lại UI, nếu mà chúng ta muốn chạy animation thì đây chính là lúc chúng ta nên gọi trong hàm này.</li>
                </ul>
            </h2>
            <h1>3. Unmount</h1>
            <h2>Quá trình unmounting xảy ra khi component bị remove khỏi DOM, hay nói một cách khác là hàm componentWillUnmount sẽ được gọi khi render không có component nào hoặc người dùng chuyển hướng trang web.

</h2>
        </div>
    );
}

export default Lifecyle;
