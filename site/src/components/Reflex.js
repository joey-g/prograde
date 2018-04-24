import React, { Component } from 'react';

import Footer from './Footer';
import Nav from './Nav';

import PersonalSiteHighlight from './PersonalSiteHighlight';
import MobilePayHighlight from './MobilePayHighlight';

import ReflexRunDetailsImg from '../images/reflex-run-details.png';

class Reflex extends Component {

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
                        <div className="title">Testing Framework</div>
                        <div id="main" className="container">

                            {/* Content */}
                            <div id="content">
                                <article className="box post">
                                    <header className="style1">
                                        <h2>Test Automation Framework</h2>
                                        <p>
                                            Framework powering all automated testing for BoomTown ROI. Built on Cucumber,
                                            Sauce Labs, Sinatra, React and Docker.
                                        </p>
                                    </header>
                                    <div className="image featured">
                                        <img src={ReflexRunDetailsImg} alt="testing-framework-details" />
                                    </div>
                                    <p>
                                        Before I joined &nbsp;<a href="https://boomtownroi.com/">BoomTown ROI</a> as a Sr. SET, 
                                        the team had historically built one-off testing scripts that were executed manually 
                                        before a release. These scripts were often built in disparate languages and testing 
                                        frameworks, with no standardized process for execution, storage, or reporting of 
                                        testing results.
                                    </p>
                                    <p>
                                        After joining the team, I implemented a testing framework that utilizes Cucumber as its
                                        core execution and reporting engine. By standardizing all tests around Cucumber, this 
                                        provided a common language for the team to use when communicating ideas to any stakeholders 
                                        on a given project. This also provided a common, repeatable workflow for testers to use when 
                                        going from building a test locally, through to running their new tests against the full 
                                        framework.
                                    </p>
                                </article>
                                <div className="row 150%">
                                    <div className="6u 12u(mobile)">
                                        <PersonalSiteHighlight type="box" />
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
            </div>
        );
    }
}

export default Reflex;
