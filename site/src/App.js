import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import Home from './Home';
import Portfolio from './Portfolio';

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
						<Link to="/portfolio" className="link depth-0"
							style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)' }}>
							<span className="indent-0"></span>Portfolio
						</Link>
					</nav>
				</div>

				<Route exact path="/" component={Home} />
				<Route exact path="/portfolio" component={Portfolio} />
			</div>
		);
	}
}

export default App;
