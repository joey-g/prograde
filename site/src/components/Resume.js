import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';

import Footer from './Footer';
import Nav from './Nav';

import ResumePDF from '../images/resume.pdf';

class Resume extends Component {

    constructor(props) {
        super(props)
        this.state = {
            documentLoaded: false,
            pageNumber: 1,
            width: null
        }
    }

    componentDidMount() {
        this.setDivSize();
        window.addEventListener("resize", this.setDivSize);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.setDivSize);
    }

    setDivSize = () => {
        this.setState({ width: this.pdfWrapper.getBoundingClientRect().width });
    }

    onDocumentLoad = (pdf) => {
        this.setState({ documentLoaded: true });
    }

    render() {
        const { documentLoaded, pageNumber, width } = this.state;

        return (
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
                    <div className="title">Résumé</div>
                    <div id="main" className="container">

                        {/* Content */}
                        <div id="content">
                            <div id="pdfWrapper" style={{ width: "100%" }}
                                ref={(ref) => this.pdfWrapper = ref}>
                                <Document file={ResumePDF} loading={'Loading résumé...'}
                                    onLoadSuccess={this.onDocumentLoad}>
                                    <Page width={width} pageNumber={pageNumber} />
                                </Document>
                                {documentLoaded && 
                                <ul className="actions actions-centered">
                                    <li>
                                        <a href={ResumePDF} download="joeygryder-resume.pdf" 
                                            className="button style1">Download PDF</a>
                                    </li>
                                </ul>
                                }
                            </div>
                        </div>
                        {/* End Content */}

                    </div>
                </div>
                {/* End Main */}

                <Footer />
            </div>
        );
    }
}

export default Resume;
