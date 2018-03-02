import React, { Component } from 'react';
import Emoji from 'emoji-dictionary';
import ContactService from './services/ContactService';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			contactName: '',
			contactEmail: '',
			contactMessage: '',
			sendingContact: false,
			sendContactSuccess: null,
			sidebarVisible: false
		};
	}

	handleChange = (e) => {
		var change = {};
		change[e.target.name] = e.target.value;
		this.setState(change);
	}

	handleSubmit = (event) => {
		event.preventDefault();
		event.stopPropagation();
		this.setState({ sendingContact: true });

		ContactService.submit(
			this.state.contactName,
			this.state.contactEmail,
			this.state.contactMessage
		).then((responseJson) => {
			this.setState({
				contactName: '',
				contactEmail: '',
				contactMessage: '',
				sendingContact: false,
				sendContactSuccess: true
			});
		}).catch((error) => {
			console.log(error);
			// Preserve form data on failed submits.
			this.setState({
				sendingContact: false,
				sendContactSuccess: false
			});
		});
	}

	handleContactReset = (event) => {
		this.setState({
			contactName: '',
			contactEmail: '',
			contactMessage: '',
			sendingContact: false,
			sendContactSuccess: null,
		})
	}

	toggleVisibility = () => this.setState({ sidebarVisible: !this.state.sidebarVisible })

	render() {

		return (
			<div id='body' className={this.state.sidebarVisible ? 'navPanel-visible' : ''}>
				<div id="titleBar">
					<a href="#navPanel" onClick={this.toggleVisibility} className="toggle"></a>
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
										<li><a href="#highlights" onClick={this.toggleVisibility}>Portfolio</a></li>
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
											<div className="6u 12u(mobile)">
												<section>
													<h3 className="icon fa-comment">Mattis velit diam vulputate</h3>
													<p>Eget mattis at, laoreet vel et velit aliquam diam ante, aliquet sit amet vulputate. Eget mattis at, laoreet vel velit lorem.</p>
												</section>
											</div>
											<div className="6u 12u(mobile)">
												<section>
													<h3 className="icon fa-refresh">Lorem ipsum dolor sit veroeros</h3>
													<p>Eget mattis at, laoreet vel et velit aliquam diam ante, aliquet sit amet vulputate. Eget mattis at, laoreet vel velit lorem.</p>
												</section>
											</div>
										</div>
										<div className="row">
											<div className="6u 12u(mobile)">
												<section>
													<h3 className="icon fa-picture-o">Pretium phasellus justo lorem</h3>
													<p>Eget mattis at, laoreet vel et velit aliquam diam ante, aliquet sit amet vulputate. Eget mattis at, laoreet vel velit lorem.</p>
												</section>
											</div>
											<div className="6u 12u(mobile)">
												<section>
													<h3 className="icon fa-cog">Tempus sed pretium orci</h3>
													<p>Eget mattis at, laoreet vel et velit aliquam diam ante, aliquet sit amet vulputate. Eget mattis at, laoreet vel velit lorem.</p>
												</section>
											</div>
										</div>
										<div className="row">
											<div className="6u 12u(mobile)">
												<section>
													<h3 className="icon fa-wrench">Aliquam consequat et feugiat</h3>
													<p>Eget mattis at, laoreet vel et velit aliquam diam ante, aliquet sit amet vulputate. Eget mattis at, laoreet vel velit lorem.</p>
												</section>
											</div>
											<div className="6u 12u(mobile)">
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
								<div className="row 150%">
									<div className="6u 12u(mobile)">

										{/* Contact Form */}
										<section>
											<form onSubmit={this.handleSubmit}>
												<div className="row 50%">
													<div className="6u 12u(mobile)">
														<input type="text" value={this.state.contactName}
															onChange={this.handleChange}
															name="contactName" id="contact-name" placeholder="Name" />
													</div>
													<div className="6u 12u(mobile)">
														<input type="text" value={this.state.contactEmail}
															onChange={this.handleChange}
															name="contactEmail" id="contact-email" placeholder="Email" />
													</div>
												</div>
												<div className="row 50%">
													<div className="12u">
														<textarea name="contactMessage" value={this.state.contactMessage}
															onChange={this.handleChange} id="contact-message"
															placeholder="Message" rows="4"></textarea>
													</div>
												</div>
												<div className="row">
													<div className="12u">
														<ul className="actions">
															{
																(this.state.sendingContact)
																	? <li><input type="submit" className="style1" value="Sending..." /></li>
																	: <li><input type="submit" className="style1" value="Send" /></li>
															}
															<li><input type="reset" onClick={this.handleContactReset} className="style2" value="Reset" /></li>
														</ul>
													</div>
													{this.state.sendContactSuccess != null && this.state.sendContactSuccess &&
														<div>Successfully sent Contact form.&nbsp;{Emoji.getUnicode('+1')}</div>
													}
													{this.state.sendContactSuccess != null && !this.state.sendContactSuccess &&
														<div>Failed to send Contact. Please try again, or e-mail me at:&nbsp;
													<a href="mailto:joey.gryder@gmail.com">joey.gryder@gmail.com</a>
														</div>
													}
												</div>
											</form>
										</section>
										{/* End Contact Form */}

									</div>
									<div className="6u 12u(mobile)">

										{/* Contact Info */}
										<section className="feature-list small">
											<div className="row">
												<div className="6u 12u(mobile)">
													<section>
														<h3 className="icon fa-envelope">Email</h3>
														<p>
															<a href="mailto:joey.gryder@gmail.com">joey.gryder@gmail.com</a>
														</p>
													</section>
												</div>
												<div className="6u 12u(mobile)">
													<section>
														<h3 className="icon fa-comment">Social</h3>
														<p>
															<a href="#">@untitled-corp</a><br />
															<a href="#">linkedin.com/untitled</a><br />
															<a href="#">facebook.com/untitled</a>
														</p>
													</section>
												</div>
											</div>
										</section>
										{/* End Contact Info */}

									</div>
								</div>

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
