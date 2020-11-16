import React from 'react';
import typescript_1 from './image/typescript_1.png'
import typescript_2 from './image/typescript_2.png'

type TProps = {
    id: string,
};

const Typescript: React.FC<TProps> = (props) => {
    return (
        <div id={props.id}>
            <h1>Function component trong Typescript</h1>
            <img src={typescript_1} alt="Typescript" />
            <h1>Class component trong Typescript</h1>
            <img src={typescript_2} alt="Typescript" />
        </div>
    )
}

export default Typescript;

