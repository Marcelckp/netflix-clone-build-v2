import React from 'react';
import Nav from  '../components/Nav';
import './Faqform.css'

function faqform() {
    return ( 
    <div className="faqform">
        <Nav />
        <div className="faq-body">
            <div className="faqSection">
                <h2>hi there ?</h2>
                <h2>who are you ?</h2>
                <h2>where are you from?</h2>
                <h2>why are you here?</h2>
            </div>
        </div>
    </div>
    )
}

export default faqform