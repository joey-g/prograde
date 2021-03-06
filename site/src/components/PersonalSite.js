import React, { Component } from 'react';

import Footer from './Footer';
import Nav from './Nav';

import ReflexHighlight from './ReflexHighlight';
import MobilePayHighlight from './MobilePayHighlight';

import SiteArchImg from '../images/joeygryder-com.png';

class PersonalSite extends Component {

    render() {
        return (
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
                                    <p>
                                        The site you're viewing. Built with React, AWS, the Serverless Framework,
                                        and theming by HTML5 UP.
                                    </p>
                                </header>
                                <div className="image featured">
                                    <img src={SiteArchImg} alt="joeygryder-com-arch" />
                                </div>
                                <p>
                                    When setting out to create a personal portfolio site, I decided to
                                    build everything from the ground up to gain more experience in some of the technologies
                                    I've been interested in. This included React for the front-end of the site, coupled
                                    with various AWS PaaS offerings.
                                </p>
                                <p>
                                    As I'm fascinated with the serverless architecture movemement, I opted to
                                    implement the site's contact form with the &nbsp;
                                    <a href="https://serverless.com/">Serverless Framework</a>. This provided me with a
                                    quick way to spin up an endpoint on the AWS API Gateway, sitting in front of a single
                                    Lambda function that routes POSTed contact form requests to my personal e-mail
                                    through the AWS Simple E-mail Service. For more details, check out the
                                    contact-service portion of this site's repo at:
                                    <br />
                                    <a href="https://github.com/joey-g/prograde/tree/master/contact-service">
                                        https://github.com/joey-g/prograde/tree/master/contact-service
                                    </a>
                                </p>
                                <p>
                                    For the front-end portion of the project, I converted one of the single-page
                                    HTML5 + CSS3 templates from &nbsp;<a href="https://html5up.net/">HTML5 UP</a> into a
                                    multi-page componentized React application. I started with a blank React foundation from
                                    Facebook's &nbsp;<a href="https://github.com/facebook/create-react-app">create-react-app</a>
                                    &nbsp;and eventually added in react-router-dom, along with packages for Google Analytics
                                    and PDF rendering. The site is hosted out of AWS S3, with a CloudFront CDN distribution
                                    serving files from edge locations and Route 53 handling DNS. For more details, see:
                                    <br />
                                    <a href="https://github.com/joey-g/prograde/tree/master/site">
                                        https://github.com/joey-g/prograde/tree/master/site
                                    </a>
                                </p>
                            </article>
                            <hr />
                            <div className="row 150%">
                                <div className="6u 12u(mobile)">
                                    <ReflexHighlight type="box" />
                                </div>
                                <div className="6u 12u(mobile)">
                                    <MobilePayHighlight type="box" />
                                </div>
                            </div>
                        </div>
                        {/* End Content */}

                    </div>
                </div>
                {/* End Main */}

                <Footer />
            </div>
        );
    }
}

export default PersonalSite;
