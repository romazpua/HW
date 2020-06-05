import React from 'react';
import "./index.scss"

function FuncEl({number, text}){

    return (
    <div className="customComponent">FuncEl #{number} <br/> {text}</div>
    )
}

export default FuncEl;