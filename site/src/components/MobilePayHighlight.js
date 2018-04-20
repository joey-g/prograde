import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import MobilePayImg from '../images/mobile-pay-automation.png';

class MobilePayHighlight extends Component {

    render() {
        const type = this.props.type;
        
        return (
            <section className={type}>
                {type === "box" &&
                <header>
                    <h2>Mobile Automation</h2>
                </header>
                }
                <Link to="/mobile-automation" className="image featured">
                    <img src={MobilePayImg} alt="mobile-automation" />
                </Link>
                {type === "highlight" &&
                <h3><Link to="/mobile-automation">Mobile Automation</Link></h3>
                }
                <p>
                    Hybrid app automation for&nbsp;<a href="https://www.blackbaud.com/">Blackbaud</a>'s
                    Mobile Payments platform. Built with &nbsp;<a href="http://appium.io/">Appium</a>,
                    &nbsp;Selenium Grid, and NodeJS.
                </p>
                <ul className="actions">
                    <li><Link to="/mobile-automation" className="button style1">Learn More</Link></li>
                </ul>
            </section>
        );
    }
}

export default MobilePayHighlight;
