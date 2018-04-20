import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ReflexRunDetailsImg from '../images/reflex-run-details.png';

class ReflexHighlight extends Component {

    render() {
        const type = this.props.type;

        return (
            <section className={type}>
                {type === "box" &&
                <header>
                    <h2>Automation Framework</h2>
                </header>
                }
                <Link to="/testing-framework" className="image featured">
                    <img src={ReflexRunDetailsImg} alt="testing-framework-details" />
                </Link>
                {type === "highlight" &&
                <h3><Link to="/testing-framework">Automation Framework</Link></h3>
                }
                <p>
                    Framework powering all automated testing for
                    &nbsp;<a href="https://boomtownroi.com/">BoomTown ROI</a>. Built on Cucumber,
                    &nbsp;<a href="https://saucelabs.com/">Sauce Labs</a>, Sinatra, React and Docker.
                </p>
                <ul className="actions">
                    <li><Link to="/testing-framework" className="button style1">Learn More</Link></li>
                </ul>
            </section>
        );
    }
}

export default ReflexHighlight;
