import React, { Component } from 'react';
import Contact from './Contact';

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
						<a className="link depth-0" href="index.html" style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)' }}>
							<span className="indent-0"></span>
							Home</a>
						<a className="link depth-0" href="#" style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)' }}>
							<span className="indent-0"></span>
							Dropdown
							</a>
					</nav>
				</div>

				<div className="homepage">
					<div id="page-wrapper">
						{/* Header */}
						<div id="header-wrapper" className="wrapper">
							<div id="header">

								{/* Logo */}
								<div id="logo">
									<h1><a href="index.html">Joey Gryder</a></h1>
									<p>Sr. Software Engineer in Test - Charleston, SC</p>
								</div>

								{/* Nav */}
								<nav id="nav">
									<ul>
										<li className="current"><a href="index.html">Home</a></li>
										<li><a href="#highlights" onClick={this.toggleSidebarVisibility}>Portfolio</a></li>
										<li><a href="#footer">Contact</a></li>
									</ul>
								</nav>
							</div>
						</div>
						{/* End Header */}

						{/* Intro */}
						<div id="intro-wrapper" className="wrapper style1">
							<div className="title">The Introduction</div>
							<section id="intro" className="container">
								<p className="style1">So in case you were wondering what this is all about ...</p>
								<p className="style2">
									Escape Velocity is a free responsive<br className="mobile-hide" /> site template by <a href="http://html5up.net" className="nobr">HTML5 UP</a>
								</p>
								<p className="style3">
									It&#39;s <strong>responsive</strong>, built on <strong>HTML5</strong> and <strong>CSS3</strong>&nbsp;
								and released for free under the <a href="http://html5up.net/license"> Creative Commons Attribution 3.0 license</a>&nbsp;
												so use it for any of your personal or commercial projects -- just be sure to credit us!
							</p>
								<ul className="actions">
									<li><a href="#" className="button style3 big">Proceed</a></li>
								</ul>
							</section>
						</div>
						{/* End Intro */}

						{/* Main */}
						<div className="wrapper style2">
							<div className="title">The Details</div>
							<div id="main" className="container">

								{/* Image */}
								<a href="#" className="image featured">
									<img src="images/pic01.jpg" alt="" />
								</a>

								{/* Features */}
								<section id="features">
									<header className="style1">
										<h2>Dolor consequat feugiat amet veroeros</h2>
										<p>Feugiat dolor nullam orci pretium phasellus justo</p>
									</header>
									{/* Feature List */}
									<div className="feature-list">
										<div className="row">
											<div className="6u 12u(mobile)" style={this.getMobileWidth()}>
												<section>
													<h3 className="icon fa-comment">Mattis velit diam vulputate</h3>
													<p>Eget mattis at, laoreet vel et velit aliquam diam ante, aliquet sit amet vulputate. Eget mattis at, laoreet vel velit lorem.</p>
												</section>
											</div>
											<div className="6u 12u(mobile)" style={this.getMobileWidth()}>
												<section>
													<h3 className="icon fa-refresh">Lorem ipsum dolor sit veroeros</h3>
													<p>Eget mattis at, laoreet vel et velit aliquam diam ante, aliquet sit amet vulputate. Eget mattis at, laoreet vel velit lorem.</p>
												</section>
											</div>
										</div>
										<div className="row">
											<div className="6u 12u(mobile)" style={this.getMobileWidth()}>
												<section>
													<h3 className="icon fa-picture-o">Pretium phasellus justo lorem</h3>
													<p>Eget mattis at, laoreet vel et velit aliquam diam ante, aliquet sit amet vulputate. Eget mattis at, laoreet vel velit lorem.</p>
												</section>
											</div>
											<div className="6u 12u(mobile)" style={this.getMobileWidth()}>
												<section>
													<h3 className="icon fa-cog">Tempus sed pretium orci</h3>
													<p>Eget mattis at, laoreet vel et velit aliquam diam ante, aliquet sit amet vulputate. Eget mattis at, laoreet vel velit lorem.</p>
												</section>
											</div>
										</div>
										<div className="row">
											<div className="6u 12u(mobile)" style={this.getMobileWidth()}>
												<section>
													<h3 className="icon fa-wrench">Aliquam consequat et feugiat</h3>
													<p>Eget mattis at, laoreet vel et velit aliquam diam ante, aliquet sit amet vulputate. Eget mattis at, laoreet vel velit lorem.</p>
												</section>
											</div>
											<div className="6u 12u(mobile)" style={this.getMobileWidth()}>
												<section>
													<h3 className="icon fa-check">Dolore laoreet aliquam mattis</h3>
													<p>Eget mattis at, laoreet vel et velit aliquam diam ante, aliquet sit amet vulputate. Eget mattis at, laoreet vel velit lorem.</p>
												</section>
											</div>
										</div>
									</div>
									{/* End Feature List */}
									<ul className="actions actions-centered">
										<li><a href="#" className="button style1 big">Get Started</a></li>
										<li><a href="#" className="button style2 big">More Info</a></li>
									</ul>
								</section>
								{/* End Features */}

							</div>
						</div>
						{/* End Main */}

						{/* Footer */}
						<div id="footer-wrapper" className="wrapper">
							<div className="title">The Rest Of It</div>
							<div id="footer" className="container">
								<header className="style1">
									<h2>Get In Touch</h2>
									<p>
										Sed turpis tortor, tincidunt sed ornare in metus porttitor mollis nunc in aliquet.<br /> Nam pharetra laoreet imperdiet volutpat etiam consequat feugiat.
								</p>
								</header>
								<hr />
								<Contact mobileWidth={this.getMobileWidth()}/>
								<hr />
							</div>
							<div id="copyright">
								<ul>
									<li>Joey Gryder &copy; {(new Date()).getFullYear()}</li>
									<li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
								</ul>
							</div>
						</div>
						{/* End Footer */}

					</div>
				</div >
			</div>
		);
	}
}

export default App;
