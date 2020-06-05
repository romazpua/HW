import React, { Component } from 'react';
import './index.scss';

class OurComponent extends Component {
    render() {
        const {number, text} = this.props
        return (
        <div className="customeComponent">Component #{number} <br/> {text}</div>
        )
    }
}

export default OurComponent;