import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import SiteArchImg from '../images/joeygryder-com.png';

class PersonalSiteHighlight extends Component {

    render() {
        const type = this.props.type;

        return (
            <section className={type}>
                {type === "box" &&
                <header>
                    <h2>joeygryder.com</h2>
                </header>
                }
                <Link to="/personal-site" className="image featured">
                    <img src={SiteArchImg} alt="joeygryder-com-arch" />
                </Link>
                {type === "highlight" &&
                <h3><Link to="/personal-site">joeygryder.com</Link></h3>
                }
                <p>
                    The site you're viewing. Built with React, AWS, the Serverless Framework, 
                    and theming by &nbsp;<a href="https://html5up.net/">HTML5 UP</a>.
                </p>
                <ul className="actions">
                    <li><Link to="/personal-site" className="button style1">Learn More</Link></li>
                </ul>
            </section>
        );
    }
}

export default PersonalSiteHighlight;
