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
                        <div className="title">Introduction</div>
                        <section id="intro" className="container">
                            <p className="style3" style={{marginBottom: "2em"}}>
                                I'm a Senior Software Engineer in Test and Technical Lead.
                                I have over 6 years of experience in building testing frameworks and utilities,
                                ranging from dashboards built with React, to containerized distributed
                                systems running in AWS.
                            </p>
                            <p className="style3" style={{marginBottom: "2em"}}>
                                While I'm proficient as a full-stack engineer, I'm most experienced in building
                                back-end services in object oriented languages and relational databases.
                                My latest passion has been in learning as much as possible about cloud technologies,
                                with a focus on serverless architectures.
                            </p>
                            <p className="style3" style={{marginBottom: "2em"}}>
                                When I'm not in front of the keyboard, I enjoy the gym,
                                keeping up with the latest in hip-hop music, reading about personal finance, gaming,
                                and spending time at the beach.
                            </p>
                            <ul class="actions">
                                <li><Link to="/resume" className="button style3 big">View Resumé</Link></li>
                            </ul>
                        </section>
                    </div>
                    {/* End Intro */}

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
