import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {

    constructor(props) {
        super(props);
        this.state = { dropdownVisible: false };
    }

    toggleDropdownVisible = (visible) => { this.setState({ dropdownVisible: visible }) }

    render() {
        return (
            <nav id="nav">
                <ul>
                    <li className="current"><Link to="/">Home</Link></li>
                    <li className="opener" 
                        onMouseOver={() => this.toggleDropdownVisible(true)}
                        onMouseLeave={() => this.toggleDropdownVisible(false)}>
                        <a href="javascript:void(0)">Portfolio</a>
                        <ul className={"dropotron level-0 center" + (this.state.dropdownVisible ? ' visible' : '')}>
                            <li><Link to="/personal-site">joeygryder.com</Link></li>
                            <li><Link to="/test-framework">Test Framework</Link></li>
                        </ul>
                    </li>
                    <li><a href="#footer">Contact</a></li>
                </ul>
            </nav>
        );
    }
}

export default Nav;
