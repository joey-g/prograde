import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import Contact from './Contact';
import Home from './Home';
import Portfolio from './Portfolio';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			sidebarVisible: false,
			viewportWidth: 0,
			viewportHeight: 0
		};
	}

	componentDidMount() {
		this.updateWindowDimensions();
		window.addEventListener('resize', this.updateWindowDimensions);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.updateWindowDimensions);
	}

	updateWindowDimensions = () => {
		this.setState({ viewportWidth: window.innerWidth, viewportHeight: window.innerHeight });
	}

	toggleSidebarVisibility = () => this.setState({ sidebarVisible: !this.state.sidebarVisible })

	getMobileWidth = () => this.state.viewportWidth < 768 ? { width: '100%' } : {}

	render() {
		return (
			<div id='body' className={this.state.sidebarVisible ? 'navPanel-visible' : ''}>
				<div id="titleBar">
					<a href="#navPanel" onClick={this.toggleSidebarVisibility} className="toggle"></a>
				</div>

				<div id="navPanel">
					<nav>
						<Link to="/" className="link depth-0" 
							style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)' }}>
							<span className="indent-0"></span>Home
						</Link>
						<Link to="/portfolio"className="link depth-0" 
							style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)' }}>
							<span className="indent-0"></span>Portfolio
						</Link>
					</nav>
				</div>

				<Route exact path="/" 
    				render={(props) => 
						<Home {...props} mobileWidth={this.getMobileWidth()}/>
					}
				/>
				<Route exact path="/portfolio" 
    				render={(props) => 
						<Portfolio {...props} mobileWidth={this.getMobileWidth()}/>
					}
				/>
			</div>
		);
	}
}

export default App;
