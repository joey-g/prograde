import React, { Component } from 'react';

import Contact from './Contact';

class Footer extends Component {

    render() {
        return (
            <div id="footer-wrapper" className="wrapper">
                <div className="title">Contact</div>
                <div id="footer" className="container">
                    {this.props.header}
                    <Contact />
                    <hr />
                </div>
                <div id="copyright">
                    <ul>
                        <li>Joey Gryder &copy; {(new Date()).getFullYear()}</li>
                        <li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Footer;
