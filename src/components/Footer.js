import React from 'react'
import './Footer.scss'
import LanguageSelectBox from './LanguageSelectBox'

function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="footer-content">
                    <ul>
                        <li>Questions? Call <a href="tel : 000-800-919-1694">000-800-919-1694</a></li>
                    </ul>
                    <div className="row">
                        <div className="col-12 col-md-3">
                            <ul>
                                <li><a href="">FAQ</a></li>
                                <li><a href="">Investor Relations</a></li>
                                <li><a href="">Privacy</a></li>
                                <li><a href="">Speed Test</a></li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-3">
                            <ul>
                                <li><a href="">Help Centre</a></li>
                                <li><a href="">Jobs</a></li>
                                <li><a href="">Cookie Preferences</a></li>
                                <li><a href="">Legal Notices</a></li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-3">
                            <ul>
                                <li><a href="">Account</a></li>
                                <li><a href="">Ways to Watch</a></li>
                                <li><a href="">Corporate Information</a></li>
                                <li><a href="">Only on Netflix</a></li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-3">
                            <ul>
                                <li><a href="">Media Centre</a></li>
                                <li><a href="">Terms of Use</a></li>
                                <li><a href="">Contact Us</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="translate">
                        <LanguageSelectBox/>
                    </div>
                    <p>Netflix India</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
