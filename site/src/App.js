import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import Home from './Home';
import PersonalSite from './PersonalSite';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			sidebarVisible: false,
		};
	}

	toggleSidebarVisibility = () => this.setState({ sidebarVisible: !this.state.sidebarVisible });

	render() {
		return (
			<div id="body" className={this.state.sidebarVisible ? 'navPanel-visible' : ''}>
				<div id="titleBar">
					<a href="#navPanel" onClick={this.toggleSidebarVisibility} className="toggle"></a>
				</div>

				<div id="navPanel">
					<nav>
						<Link to="/" className="link depth-0"
							style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)' }}>
							<span className="indent-0"></span>Home
						</Link>
						<Link to="/personal-site" className="link depth-0"
							style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)' }}>
							<span className="indent-0"></span>Portfolio
						</Link>
						<ul>
							<li>
								<Link to="/personal-site" className="link depth-1"
									style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)' }}>
									<span className="indent-1"></span>joeygryder.com
								</Link>	
							</li>
						</ul>
					</nav>				
				</div>

				<Route exact path="/" component={Home} />
				<Route exact path="/personal-site" component={PersonalSite} />
			</div>
		);
	}
}

export default App;
