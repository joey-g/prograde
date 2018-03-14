import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Contact from './Contact';

class Portfolio extends Component {

    render() {
        return (
            <div className="homepage">
                <div id="page-wrapper">
                    {/* Header */}
                    <div id="header-wrapper" className="wrapper">
                        <div id="header">

                            {/* Nav */}
                            <nav id="nav">
                                <ul>
                                    <li className="current"><Link to="/">Home</Link></li>
                                    <li><Link to="/portfolio">Portfolio</Link></li>
                                    <li><a href="#footer">Contact</a></li>
                                </ul>
                            </nav>

                            {/* Logo */}
                            <div id="logo">
                                <h1><a href="index.html">Joey Gryder</a></h1>
                            </div>
                        </div>
                    </div>
                    {/* End Header */}

                    {/* Footer */}
                    <div id="footer-wrapper" className="wrapper">
                        <div className="title">The Rest Of It</div>
                        <div id="footer" className="container">
                            <header className="style1">
                                <h2>Get In Touch</h2>
                                <p>
                                    Sed turpis tortor, tincidunt sed ornare in metus porttitor mollis nunc in aliquet.<br /> Nam pharetra laoreet imperdiet volutpat etiam consequat feugiat.
                                </p>
                            </header>
                            <hr />
                            <Contact/>
                            <hr />
                        </div>
                        <div id="copyright">
                            <ul>
                                <li>Joey Gryder &copy; {(new Date()).getFullYear()}</li>
                                <li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
                            </ul>
                        </div>
                    </div>
                    {/* End Footer */}

                </div>
            </div >
        );
    }
}

export default Portfolio;
