import React, { Component } from 'react';
import "./text_style.scss"

class Text extends Component {
    render() {
        const { text } = this.props
        return (
        <div className="Text">{text}</div>
        )
    }
}

export default Text;