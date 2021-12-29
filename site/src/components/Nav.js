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
                            <li><Link to="/testing-framework">Testing Framework</Link></li>
                            <li><Link to="/mobile-automation">Mobile Automation</Link></li>
                        </ul>
                    </li>
                    <li><Link to="/resume">Résumé</Link></li>
                </ul>
            </nav>
        );
    }
}

export default Nav;
