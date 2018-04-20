import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Footer from './Footer';
import Nav from './Nav';

import PersonalSiteHighlight from './PersonalSiteHighlight';
import ReflexHighlight from './ReflexHighlight';
import MobilePayHighlight from './MobilePayHighlight';

import HeadshotImg from '../images/headshot.png';

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
                            <p className="style1" style={{marginBottom: "2em"}}>
                                Senior Software Engineer in Test and Technical Lead with over 6 years 
                                experience in building testing frameworks and utilities,
                                ranging from dashboards built with React, to containerized distributed
                                systems running in AWS.
                            </p>
                            <p className="style1" style={{marginBottom: "2em"}}>
                                While proficient as a full-stack engineer, my primary experience is in building
                                back-end services in object oriented languages and relational databases.
                                My latest passion is cloud technologies, with a focus on serverless architectures.
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
                                    <PersonalSiteHighlight style='highlight'/>
                                </div>
                                <div className="4u 12u(mobile)">
                                    <ReflexHighlight style='highlight'/>
                                </div>
                                <div className="4u 12u(mobile)">
                                    <MobilePayHighlight style='highlight'/>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Highlights */}

                    <Footer />
                </div>
            </div >
        );
    }
}

export default Home;
