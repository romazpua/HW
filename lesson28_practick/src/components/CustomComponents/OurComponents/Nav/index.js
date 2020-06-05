import React, {Component} from 'react';
import "./index.scss"

class Nav extends Component {

    state = {
        isOpen: false,
    };

    toggleNav = () => {
        // console.log(555)
        this.setState ({
            isOpen: !this.state.isOpen,
        });
    };

    render() {
        return (
            <div className="Nav">
                <div className="btn" onClick={this.toggleNav}>MENU</div>
                <div className={`list ${this.state.isOpen ? ' active': ''}`}>
                    <p>HOME</p>
                    <p>ABOUT</p>
                    <p>CONTACT</p>
                </div>
            </div> 
        );
    }
}

export default Nav;