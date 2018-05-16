import React, { Component } from 'react';

import Footer from './Footer';
import Nav from './Nav';

import PersonalSiteHighlight from './PersonalSiteHighlight';
import ReflexHighlight from './ReflexHighlight';

import MobilePayImg from '../images/mobile-pay-automation.png';

class MobilePay extends Component {

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
                    <div className="title">Mobile Automation</div>
                    <div id="main" className="container">

                        {/* Content */}
                        <div id="content">
                            <article className="box post">
                                <header className="style1">
                                    <h2>Mobile Automation Lab</h2>
                                    <p>
                                        Hybrid-app automation lab for Blackbaud's Mobile Payments platform. Built with 
                                        Appium, Selenium Grid, and NodeJS.
                                    </p>
                                </header>
                                <div className="image featured">
                                    <img src={MobilePayImg} alt="mobile-automation" />
                                </div>
                                <p>
                                    As part of the Payment Services team at <a href="https://www.blackbaud.com/">Blackbaud</a>,
                                    I acted as the group's subject matter expert on UI automation with Selenium WebDriver. 
                                    When the team began to move into the Mobile Payments space, I was responsible for 
                                    implementing a local testing lab for exercising a new hybrid mobile app, containing
                                    native code built with&nbsp;<a href="https://www.appcelerator.com/">Appcelerator</a>, 
                                    and a hosted web view.
                                </p>
                                <p>
                                    I implemented this testing lab using&nbsp;
                                    <a href="https://www.seleniumhq.org/docs/07_selenium_grid.jsp">Selenium Grid</a>,
                                    with a single host 'controller' and a stack of Mac Minis, each hosting 'worker' nodes of 
                                    Selenium-server attached to multiple&nbsp;<a href="http://appium.io/">Appium</a>&nbsp;
                                    processes. Appium served as the final interface between the requested WebDriver API calls
                                    and the executed UI actions on the&nbsp;
                                    <a href="https://www.blackbaud.com/bbms/mobilepay">MobilePay</a> application. The final 
                                    solution allowed the team to execute up to six test scenarios in parallel, distributed 
                                    across multiple Operating Systems on both physical and emulated devices.
                                </p>
                            </article>
                            <hr />
                            <div className="row 150%">
                                <div className="6u 12u(mobile)">
                                    <PersonalSiteHighlight type="box" />
                                </div>
                                <div className="6u 12u(mobile)">
                                    <ReflexHighlight type="box" />
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

export default MobilePay;
