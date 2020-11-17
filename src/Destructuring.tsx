import React from 'react';
import destructuring from './image/Destructuring.png';

type TProps = {
    id: string,
};

const Destructuring: React.FC<TProps> = ({ id }) => {
    return(
        <div id={id}>
            <h1>Destructuring in ES6</h1>
            <img src={destructuring} alt="Destructuring" />
        </div>
    )
}

export default Destructuring;