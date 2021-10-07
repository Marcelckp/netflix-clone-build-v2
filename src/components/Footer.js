import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className="Footer-section">
            <div className="icons">
                <a href="https://www.linkedin.com/in/marcel-palmer-b4bba4212/" target='_blank' rel='noreferrer'><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/640px-LinkedIn_icon.svg.png" alt="linked icon" /></a>
                
                <a href="https://github.com/Marcelckp" target='_blank' rel='noreferrer'><img src="https://www.sferalabs.cc/wp-content/uploads/github-logo-white-700x465.png" alt="Github icon" /></a>
                
                <a href="https://www.instagram.com/marcelpalmer_/" target='_blank' rel='noreferrer'><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1200px-Instagram_icon.png" alt="Instagram icon" /></a>
                
                <a href="https://twitter.com/marcelckpalmer" target='_blank' rel='noreferrer'><img src="https://www.pinclipart.com/picdir/big/410-4101644_logo-facebook-twitter-twitter-png-format-twitter-logo.png" alt="Twitter icon" /></a>
                
                <img src="https://www.saskatoonprogressclub.com/wp-content/uploads/2021/05/free-youtube-logo-icon-2431-thumb-1024x1024.png" alt="YouTube icon" />
                

            </div>
            <ul className="Footer-link-container">
                <li className='footer-wrapper'><a href="/aboutme" className='footer-link'>* About Me *</a></li>
                <li className='footer-wrapper'><a href="/faq" className='footer-link'>FAQ</a></li>
                <li className='footer-wrapper'><a href="/" className='footer-link'>Audio and Subtitles</a></li>
                <li className='footer-wrapper'><a href="/" className='footer-link'>Privacy</a></li>
                <li className='footer-wrapper'><a href="/" className='footer-link'>Audio Description</a></li>
                <li className='footer-wrapper'><a href="/" className='footer-link'>Investor Relations</a></li>
                <li className='footer-wrapper'><a href="/" className='footer-link'>Legal Notice</a></li>
                <li className='footer-wrapper'><a href="/" className='footer-link'>HelpCenter</a></li>
                <li className='footer-wrapper'><a href="/" className='footer-link'>Jobs</a></li>
                <li className='footer-wrapper'><a href="/" className='footer-link'>Cookie Preferences</a></li>
                <li className='footer-wrapper'><a href="/" className='footer-link'>Gift Cards</a></li>
                <li className='footer-wrapper'><a href="/terms" className='footer-link'>Terms of Use</a></li>
            </ul>
            <h3>Service Code</h3>
            <p>* 2021 Netflix Clone, inc.  "-numbers-" </p>
        </div>
    )
}

export default Footer;
