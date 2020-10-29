import React from 'react';
import gitCommand from './image/git-command.png';

function GitCommand(props) {
    return(
        <div id={props.id}>
            <img src={gitCommand} alt="GitCommand" />
        </div>
    );
}

export default GitCommand;