import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import Contact from './Contact';
import Nav from './Nav';

import ReflexHighlight from './ReflexHighlight';
import MobilePayHighlight from './MobilePayHighlight';

import SiteArchImg from '../images/joeygryder-com.png';

class PersonalSite extends Component {

    render() {
        return (
            <div className="details-page">
                <div id="page-wrapper">
                    {/* Header */}
                    <div id="header-wrapper" className="wrapper">
                        <div id="header">

                            <Nav />

                            {/* Logo */}
                            <div id="logo">
                                <h1><a href="index.html">Joey Gryder</a></h1>
                            </div>
                        </div>
                    </div>
                    {/* End Header */}

                    {/* Main */}
                    <div className="wrapper style2">
                        <div className="title">joeygryder.com</div>
                        <div id="main" className="container">

                            {/* Content */}
                            <div id="content">
                                <article className="box post">
                                    <header className="style1">
                                        <h2>Personal Portfolio Site</h2>
                                        <p>The site you're viewing. Built with React, AWS, the Serverless Framework, and theming by
                                            &nbsp;<a href="https://html5up.net/">HTML5 UP</a>.</p>
                                    </header>
                                    <div className="image featured">
                                        <img src={SiteArchImg} alt="joeygryder-com-arch" />
                                    </div>
                                    <p>
                                        When setting out to put together a personal portfolio site, I opted to
                                        build everything from the ground up to get more experience in some of the technologies
                                        I'm interested in. This included React for the front-end of the site, coupled
                                        with various AWS PaaS offerings.
                                    </p>
                                    <p>
                                        As I'm currently fascinated with the serverless architecture movemement, I opted to
                                        implement the site's contact form with the &nbsp;
                                        <a href="https://serverless.com/">Serverless Framework</a>. This provided me with a
                                        quick way to spin up an endpoint on the AWS API Gateway, sitting in front of a single
                                        Lambda function that simply routes POSTed contact form requests to my personal e-mail
                                        through the AWS Simple E-mail Service. For more details, check out the
                                        contact-service portion of this site's repo at:&nbsp;
                                        <a href="https://github.com/joey-g/prograde/tree/master/contact-service">
                                            https://github.com/joey-g/prograde/tree/master/contact-service
                                        </a>
                                    </p>
                                    <p>
                                        For the front-end portion of the project, I decided to convert one of the single-page
                                        HTML5 + CSS3 sites from &nbsp;<a href="https://html5up.net/">HTML5 UP</a> into a
                                        multi-page componentized React application. I started with a blank React foundation from
                                        Facebook's &nbsp;<a href="https://github.com/facebook/create-react-app">create-react-app</a>
                                        &nbsp;and eventually added in react-router-dom, along with packages for Google Analytics
                                        and PDF rendering. The site is hosted out of AWS S3, with a CloudFront CDN distribution
                                        serving files from edge locations and Route 53 handling DNS. For more details, see:&nbsp;
                                        <a href="https://github.com/joey-g/prograde/tree/master/site">
                                            https://github.com/joey-g/prograde/tree/master/site
                                        </a>
                                    </p>
                                </article>
                                <div className="row 150%">
                                    <div className="6u 12u(mobile)">
                                        <ReflexHighlight style="box" />
                                    </div>
                                    <div className="6u 12u(mobile)">
                                        <MobilePayHighlight style="box" />
                                    </div>
                                </div>
                            </div>
                            {/* End Content */}

                        </div>
                    </div>
                    {/* End Main */}

                    {/* Footer */}
                    <div id="footer-wrapper" className="wrapper">
                        <div className="title">Contact</div>
                        <div id="footer" className="container">
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
            </div>
        );
    }
}

export default PersonalSite;
