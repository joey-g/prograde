import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import Contact from './Contact';
import Nav from './Nav';

import PersonalSiteHighlight from './PersonalSiteHighlight';
import MobilePayHighlight from './MobilePayHighlight';

import ReflexRunDetailsImg from '../images/reflex-run-details.png';

class Reflex extends Component {

    render() {
        return (
            <div className="details-page">
                <div id="page-wrapper">
                    {/* Header */}
                    <div id="header-wrapper" className="wrapper">
                        <div id="header">

                            <Nav/>

                            {/* Logo */}
                            <div id="logo">
                                <h1><a href="index.html">Joey Gryder</a></h1>
                            </div>
                        </div>
                    </div>
                    {/* End Header */}

                    {/* Main */}
                    <div className="wrapper style2">
                        <div className="title">Testing Framework</div>
                        <div id="main" className="container">
                            
                            {/* Content */}
                            <div id="content">
                                <article className="box post">
                                    <header className="style1">
                                        <h2>Lorem ipsum dolor sit amet magna egestas morbi bibendum sed malesuada</h2>
                                        <p>Tempus feugiat veroeros sed nullam dolore</p>
                                    </header>
                                    <div className="image featured">
                                        <img src={ReflexRunDetailsImg} alt="testing-framework-details" />
                                    </div>
                                    <p>Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget.
                                    odio eleifend. Duis commodo fringilla commodo. Aliquam erat volutpat. Vestibulum
                                    facilisis leo magna. Cras sit amet urna eros, id egestas urna. Quisque aliquam
                                    tempus euismod. Vestibulum ante ipsum primis in faucibus.</p>
                                    <p>Phasellus nisl nisl, varius id porttitor sed, pellentesque ac orci. Pellentesque
                                    habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi
                                    bibendum justo sed mauris vehicula malesuada aliquam elit imperdiet. Aliquam eu nibh
                                    lorem, eget gravida mi. Duis odio diam, luctus et vulputate vitae, vehicula ac dolor.
                                    Pellentesque at urna eget tellus lobortis ultrices sed non erat. Donec eget erat non
                                    magna volutpat malesuada quis eget eros. Nullam sodales cursus sapien, id consequat
                                    leo suscipit ut. Praesent id turpis vitae turpis pretium ultricies. Vestibulum sit
                                    amet risus elit.</p>
                                    <p>Donec consectetur vestibulum dolor et pulvinar. Etiam vel felis enim, at viverra
                                    ligula. Ut porttitor sagittis lorem, quis eleifend nisi ornare vel. Praesent nec orci
                                    eget quam rutrum bibendum. Proin pellentesque diam non ligula commodo tempor. Vivamus
                                    eget urna nibh. Curabitur non fringilla nisl. Donec accumsan interdum nisi, quis
                                    tincidunt felis sagittis eget. Donec elementum ligula dignissim sem pulvinar non semper
                                    odio eleifend. Duis commodo fringilla commodo. Aliquam erat volutpat. Vestibulum
                                    facilisis leo magna. Cras sit amet urna eros, id egestas urna. Quisque aliquam
                                    tempus euismod. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                                    posuere cubilia.</p>
                                    <p>Phasellus nisl nisl, varius id porttitor sed, pellentesque ac orci. Pellentesque
                                    habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi
                                    bibendum justo sed mauris vehicula malesuada aliquam elit imperdiet. Aliquam eu nibh
                                    lorem, eget gravida mi. Duis odio diam, luctus et vulputate vitae, vehicula ac dolor.
                                    Pellentesque at urna eget tellus lobortis ultrices sed non erat. Donec eget erat non
                                    magna volutpat malesuada quis eget eros. Nullam sodales cursus sapien, id consequat
                                    leo suscipit ut. Praesent id turpis vitae turpis pretium ultricies. Vestibulum sit
                                    amet risus elit.</p>
                                </article>
                                <div className="row 150%">
                                    <div className="6u 12u(mobile)">
                                        <PersonalSiteHighlight style="box" />
                                    </div>
                                    <div className="6u 12u(mobile)">
                                        <MobilePayHighlight style="box" />
                                    </div>
                                </div>
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

export default Reflex;
