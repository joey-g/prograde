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
                                <p>Sr. Software Engineer &#38; Technical Lead</p>
                                <p>Charleston, SC</p>
                            </div>
                        </div>
                    </div>
                    {/* End Header */}

                    {/* Intro */}
                    <div id="intro-wrapper" className="wrapper style1">
                        <div className="title">Introduction</div>
                        <section id="intro" className="container">
                            <p className="style1" style={{ marginBottom: "2em" }}>
                                Senior Software Engineer and Technical Lead with over 10 years
                                experience in building .NET Framework applications in C#,
                                ranging from high performance ASP.NET Core web services, to 
                                containerized distributed systems running in AWS.
                            </p>
                            <p className="style1" style={{ marginBottom: "2em" }}>
                                While proficient as a full-stack engineer, my primary experience is in building
                                back-end services in object oriented languages and relational databases.
                                My latest passion is cloud technologies, with a focus on serverless architectures.
                            </p>
                            <ul class="actions">
                                <li><Link to="/resume" className="button style3 big">View Résumé</Link></li>
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
                                    <PersonalSiteHighlight type="highlight" />
                                </div>
                                <div className="4u 12u(mobile)">
                                    <ReflexHighlight type="highlight" />
                                </div>
                                <div className="4u 12u(mobile)">
                                    <MobilePayHighlight type="highlight" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Highlights */}

                    <Footer header={
                        <div>
                            <header className="style1">
                                <h2>Get in touch</h2>
                                <p>
                                    Interested in working together? Hit me up in the form below or shoot me
                                    an e-mail with more information about your project and I'll get back to
                                    you as soon as I can!
                            </p>
                            </header>
                            <hr />
                        </div>
                    } />
                </div>
            </div>
        );
    }
}

export default Home;
