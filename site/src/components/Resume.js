import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Document, Page } from 'react-pdf';

import ResumePDF from '../images/resume.pdf';
import Contact from './Contact';
import Nav from './Nav';

class Resume extends Component {

    state = {
        numPages: null,
        pageNumber: 1,
    }

    onDocumentLoad = (numPages) => {
        this.setState({ numPages });
    }

    render() {
        const { pageNumber, numPages } = this.state;

        return (
            <div className="details-page">
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
                        <div className="title">Resumé</div>
                        <div id="main" className="container">

                            {/* Content */}
                            <div id="content">
                                <Document file={ResumePDF} loading={'Loading resumé...'}
                                    onLoadSuccess={this.onDocumentLoad}>
                                    <Page pageNumber={pageNumber} />
                                </Document>
                            </div>
                            {/* End Content */}

                        </div>
                    </div>
                    {/* End Main */}

                    {/* Footer */}
                    <div id="footer-wrapper" className="wrapper">
                        <div className="title">Contact</div>
                        <div id="footer" className="container">
                            <Contact />
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
            </div>
        );
    }
}

export default Resume;
