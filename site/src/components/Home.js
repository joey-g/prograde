import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import Contact from './Contact';
import Nav from './Nav';

import HeadshotImg from '../images/headshot.png';
import MobilePayImg from '../images/mobile-pay-automation.png';
import SiteArchImg from '../images/joeygryder-com.png';
import ReflexRunDetailsImg from '../images/reflex-run-details.png';

class Home extends Component {

    render() {
        return (
            <div className="homepage">
                <div id="page-wrapper">
                    {/* Header */}
                    <div id="header-wrapper" className="wrapper">
                        <div id="header">

                            <Nav />

                            {/* Logo */}
                            <div id="logo">
                                <img src={HeadshotImg} alt="headshot" />
                                <h1>Joey Gryder</h1>
                                <p>Sr. Software Engineer in Test - Charleston, SC</p>
                            </div>
                        </div>
                    </div>
                    {/* End Header */}

                    {/* Intro */}
                    <div id="intro-wrapper" className="wrapper style1">
                        <div className="title">The Introduction</div>
                        <section id="intro" className="container">
                            <p className="style1">Lorem ipsum dolor sit amet magna egestas morbi bibendum sed malesuada</p>
                            <p className="style2">
                                Escape Velocity is a free responsive<br className="mobile-hide" /> site template by <a href="http://html5up.net" className="nobr">HTML5 UP</a>
                            </p>
                            <p className="style3">
                                It&#39;s <strong>responsive</strong>, built on <strong>HTML5</strong> and <strong>CSS3</strong>&nbsp;
                                and released for free under the <a href="http://html5up.net/license"> Creative Commons Attribution 3.0 license</a>&nbsp;
                                so use it for any of your personal or commercial projects -- just be sure to credit us!
                            </p>
                        </section>
                    </div>
                    {/* End Intro */}

                    {/* Main */}
                    <div className="wrapper style2">
                        <div className="title">The Details</div>
                        <div id="main" className="container">

                            {/* Features */}
                            <section id="features">
                                <header className="style1">
                                    <h2>Dolor consequat feugiat amet veroeros</h2>
                                    <p>Feugiat dolor nullam orci pretium phasellus justo</p>
                                </header>
                                {/* Feature List */}
                                <div className="feature-list">
                                    <div className="row">
                                        <div className="6u 12u(mobile)">
                                            <section>
                                                <h3 className="icon fa-comment">Mattis velit diam vulputate</h3>
                                                <p>Eget mattis at, laoreet vel et velit aliquam diam ante, aliquet sit amet vulputate. Eget mattis at, laoreet vel velit lorem.</p>
                                            </section>
                                        </div>
                                        <div className="6u 12u(mobile)">
                                            <section>
                                                <h3 className="icon fa-refresh">Lorem ipsum dolor sit veroeros</h3>
                                                <p>Eget mattis at, laoreet vel et velit aliquam diam ante, aliquet sit amet vulputate. Eget mattis at, laoreet vel velit lorem.</p>
                                            </section>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="6u 12u(mobile)">
                                            <section>
                                                <h3 className="icon fa-picture-o">Pretium phasellus justo lorem</h3>
                                                <p>Eget mattis at, laoreet vel et velit aliquam diam ante, aliquet sit amet vulputate. Eget mattis at, laoreet vel velit lorem.</p>
                                            </section>
                                        </div>
                                        <div className="6u 12u(mobile)">
                                            <section>
                                                <h3 className="icon fa-cog">Tempus sed pretium orci</h3>
                                                <p>Eget mattis at, laoreet vel et velit aliquam diam ante, aliquet sit amet vulputate. Eget mattis at, laoreet vel velit lorem.</p>
                                            </section>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="6u 12u(mobile)">
                                            <section>
                                                <h3 className="icon fa-wrench">Aliquam consequat et feugiat</h3>
                                                <p>Eget mattis at, laoreet vel et velit aliquam diam ante, aliquet sit amet vulputate. Eget mattis at, laoreet vel velit lorem.</p>
                                            </section>
                                        </div>
                                        <div className="6u 12u(mobile)">
                                            <section>
                                                <h3 className="icon fa-check">Dolore laoreet aliquam mattis</h3>
                                                <p>Eget mattis at, laoreet vel et velit aliquam diam ante, aliquet sit amet vulputate. Eget mattis at, laoreet vel velit lorem.</p>
                                            </section>
                                        </div>
                                    </div>
                                </div>
                                {/* End Feature List */}
                            </section>
                            {/* End Features */}

                        </div>
                    </div>
                    {/* End Main */}

                    {/* Highlights */}
                    <div className="wrapper style3">
                        <div className="title">Projects</div>
                        <div id="highlights" className="container">
                            <div className="row 150%">
                                <div className="4u 12u(mobile)">
                                    <section className="highlight">
                                        <Link to="/personal-site" className="image featured">
                                            <img src={SiteArchImg} alt="joeygryder-com-arch" />
                                        </Link>
                                        <h3><Link to="/personal-site">joeygryder.com</Link></h3>
                                        <p>
                                            The site you're viewing. Built with React, AWS, the Serverless Framework, and theming by
                                            &nbsp;<a href="https://html5up.net/">HTML5 UP</a>.
                                            <br /><br />
                                        </p>
                                        <ul className="actions">
                                            <li><Link to="/personal-site" className="button style1">Learn More</Link></li>
                                        </ul>
                                    </section>
                                </div>
                                <div className="4u 12u(mobile)">
                                    <section className="highlight">
                                        <Link to="/testing-framework" className="image featured">
                                            <img src={ReflexRunDetailsImg} alt="testing-framework-details" />
                                        </Link>
                                        <h3><Link to="/testing-framework">Automation Framework</Link></h3>
                                        <p>
                                            Testing framework powering all automated testing for
                                            &nbsp;<a href="https://boomtownroi.com/">BoomTown ROI</a>. Built on Cucumber,
                                            &nbsp;<a href="https://saucelabs.com/">Sauce Labs</a>, Sinatra, React and Docker.
                                            <br />
                                        </p>
                                        <ul className="actions">
                                            <li><Link to="/testing-framework" className="button style1">Learn More</Link></li>
                                        </ul>
                                    </section>
                                </div>
                                <div className="4u 12u(mobile)">
                                    <section className="highlight">
                                        <Link to="/mobile-automation" className="image featured">
                                            <img src={MobilePayImg} alt="mobile-automation" />
                                        </Link>
                                        <h3><Link to="/mobile-automation">Mobile Automation</Link></h3>
                                        <p>
                                            Hybrid app automation for&nbsp;<a href="https://www.blackbaud.com/">Blackbaud</a>'s
                                            Mobile Payments platform. Built with &nbsp;<a href="http://appium.io/">Appium</a>,
                                            &nbsp;Selenium Grid, and NodeJS.
                                            <br /><br />
                                        </p>
                                        <ul className="actions">
                                            <li><Link to="/mobile-automation" className="button style1">Learn More</Link></li>
                                        </ul>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Highlights */}

                    {/* Footer */}
                    <div id="footer-wrapper" className="wrapper">
                        <div className="title">Contact</div>
                        <div id="footer" className="container">
                            <header className="style1">
                                <h2>Get in touch</h2>
                                <p>
                                    Interested in working together? Hit me up in the form below or shoot me
                                    an e-mail with more information about your project and I'll get back to
                                    you as soon as I can!
                                </p>
                            </header>
                            <hr />
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
                    {/* End Footer */}

                </div>
            </div >
        );
    }
}

export default Home;
