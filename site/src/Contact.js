import React, { Component } from 'react';
import Emoji from 'emoji-dictionary';
import ContactService from './services/ContactService';

class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            contactName: '',
            contactEmail: '',
            contactMessage: '',
            sendingContact: false,
            sendContactSuccess: null
        };
    }

    handleContactChange = (e) => {
        var change = {};
        change[e.target.name] = e.target.value;
        this.setState(change);
    }

    handleContactSubmit = (event) => {
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

    render() {
        return (
            <div className="row 150%">
                <div className="6u 12u(mobile)" style={this.props.mobileWidth}>

                    {/* Contact Form */}
                    <section>
                        <form onSubmit={this.handleContactSubmit}>
                            <div className="row 50%">
                                <div className="6u 12u(mobile)" style={this.props.mobileWidth}>
                                    <input type="text" value={this.state.contactName}
                                        onChange={this.handleContactChange}
                                        name="contactName" id="contact-name" placeholder="Name" />
                                </div>
                                <div className="6u 12u(mobile)" style={this.props.mobileWidth}>
                                    <input type="text" value={this.state.contactEmail}
                                        onChange={this.handleContactChange}
                                        name="contactEmail" id="contact-email" placeholder="Email" />
                                </div>
                            </div>
                            <div className="row 50%">
                                <div className="12u">
                                    <textarea name="contactMessage" value={this.state.contactMessage}
                                        onChange={this.handleContactChange} id="contact-message"
                                        placeholder="Message" rows="4"></textarea>
                                </div>
                            </div>
                            <div className="row">
                                <div className="12u">
                                    <ul className="actions">
                                        {
                                            this.state.sendingContact
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
                <div className="6u 12u(mobile)" style={this.props.mobileWidth}>

                    {/* Contact Info */}
                    <section className="feature-list small">
                        <div className="row">
                            <div className="6u 12u(mobile)" style={this.props.mobileWidth}>
                                <section>
                                    <h3 className="icon fa-envelope">Email</h3>
                                    <p>
                                        <a href="mailto:joey.gryder@gmail.com">joey.gryder@gmail.com</a>
                                    </p>
                                </section>
                            </div>
                            <div className="6u 12u(mobile)" style={this.props.mobileWidth}>
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
        );
    }
}

export default Contact;
