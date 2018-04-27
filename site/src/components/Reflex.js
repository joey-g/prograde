import React, { Component } from 'react';

import Footer from './Footer';
import Nav from './Nav';

import PersonalSiteHighlight from './PersonalSiteHighlight';
import MobilePayHighlight from './MobilePayHighlight';

import ReflexRunDetailsImg from '../images/reflex-run-details.png';

class Reflex extends Component {

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
                                    Before I joined &nbsp;<a href="https://boomtownroi.com/">BoomTown ROI</a> as a Sr.
                                    Software Engineer in Test, the team had historically built one-off testing scripts
                                    that were executed manually before a release. These scripts were often built in
                                    disparate languages and testing frameworks, with no standardized process for
                                    execution, storage, or reporting of testing results.
                                </p>
                                <p>
                                    After joining the team, I implemented a testing framework that utilizes Cucumber as its
                                    core execution and reporting engine. By standardizing all tests around Cucumber, this
                                    provided a common language for the team to use when communicating ideas to stakeholders
                                    on a given project. This also provided a repeatable workflow for testers to use when
                                    going from building a test locally to running their new tests against the full framework.
                                </p>
                                <p>
                                    The framework is built upon the following technologies:
                                </p>
                                <h4 className="details-header">RESTful Web Service Built in Sinatra</h4>
                                <p>
                                    Sitting at the core of the framework is a &nbsp;
                                    <a href="https://github.com/sinatra/sinatra">Sinatra</a>-based RESTful web service
                                    responsible for handling all requests to start new test jobs, retrieve detailed results
                                    for previous jobs, and provide CRUD operations on various test configuration tables. The
                                    service is deployed as a Docker container to Amazon's ECS.
                                </p>
                                <h4 className="details-header">MySQL and DynamoDB Datastores</h4>
                                <p>
                                    For the storage of all historical test runs, we utilize a MySQL database hosted in
                                    Amazon RDS. For non-relational data, such as the details of a currently executing test
                                    job, we utilize Amazon's DynamoDB.
                                </p>
                                <h4 className="details-header">Containerized Cucumber Job Runners</h4>
                                <p>
                                    The actual execution of tests through the Cucumber binary is handled with a
                                    batch-processing architecture to improve test parallelization and decrease total test
                                    run times. Each test runner is built as a small Ruby application and is deployed in a
                                    Docker container to Amazon ECS. These test runners then poll a queue for Cucumber jobs
                                    to execute.
                                </p>
                                <h4 className="details-header">Front-end Dashboard Built in React</h4>
                                <p>
                                    To provide an interface for users to start new tests and investigate the results of
                                    previous runs, I implemented a dashboard in React that sits atop the Sinatra web
                                    service. The dashboard is hosted as a static site out of Amazon S3.
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
        );
    }
}

export default Reflex;
