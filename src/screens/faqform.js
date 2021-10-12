import React, { useState } from 'react';
import './Faqform.css';

import Nav from '../components/Nav';

function Faqform() {
    // =================================================================

    const [clicked1, setClicked1] = useState(false);

    const toggleDropDown1 = (e) => {
        // console.log(e.target);
        if (clicked1) setClicked1(false);
        else if (!clicked1) {
            setClicked1(true);
            setClicked2(false);
            setClicked3(false);
            setClicked4(false);
        }
    }

    // =================================================================

    const [clicked2, setClicked2] = useState(false);

    const toggleDropDown2 = (e) => {
        if (clicked2) setClicked2(false)
        else if (!clicked2) {
            setClicked2(true);
            setClicked1(false);
            setClicked3(false);
            setClicked4(false);
        }
    }

    //==================================================================

    const [clicked3, setClicked3] = useState(false);

    const toggleDropDown3 = (e) => {
        if (clicked3) setClicked3(false);
        else if (!clicked3) {
            setClicked3(true);
            setClicked1(false);
            setClicked2(false);
            setClicked4(false)
        }
    }

    //==================================================================

    const [clicked4, setClicked4] = useState(false);

    const toggleDropDown4 = (e) => {
        if (clicked4) setClicked4(false);
        else if (!clicked4) {
            setClicked4(true);
            setClicked1(false);
            setClicked2(false);
            setClicked3(false)
        }
    };

    //================================================================== code Inside click arrow to open drop down

    // const [clicked5, setClicked5] = useState(false);

    // const toggleDropDown5 = (e) => {
    //     if (clicked5) setClicked5(false);
    //     else if (!clicked5) setClicked5(true);
    // }

    //==================================================================

    return ( 
        <>
            <Nav class='blackDrop' />
            <div className="faqform fadein">
                <div className="faq-body">
                    <h1 className="faq-title">Frequently Asked Questions</h1>

                    <div className="faqSection" onClick={toggleDropDown1}>

                        <div className="question">
                            <h1>What is Netflix?</h1>

                            {clicked1 ? 
                                <svg version='1.1' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 13 13' className='svg-icon-faq rotate'>
                                        <polygon points="7,6 7,0 6,0 6,6 0,6 0,7 6,7 6,13 7,13 7,7 13,7 13,6 "></polygon>
                                    </svg> 
                                :   <svg version='1.1' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 13 13' className='svg-icon-faq'>
                                        <polygon points="7,6 7,0 6,0 6,6 0,6 0,7 6,7 6,13 7,13 7,7 13,7 13,6 "></polygon>
                                    </svg>}
                            
                        </div>

                        <div className={`faqDescription-container ${ clicked1 ? 'slide-open-animation' : null}`}>
                            <p className="faqDescription-text">
                                Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.
                            </p>
                            <p className='faqDescription-text'>
                                You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!
                            </p> 
                        </div> 

                    </div>

                    <div className='faqSection' onClick={toggleDropDown2}>

                        <div className="question">
                            <h1>How much does Netflix cost?</h1>
                            
                            {clicked2 ? 
                                <svg version='1.1' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 13 13' className='svg-icon-faq rotate'>
                                        <polygon points="7,6 7,0 6,0 6,6 0,6 0,7 6,7 6,13 7,13 7,7 13,7 13,6 "></polygon>
                                    </svg> 
                                :   <svg version='1.1' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 13 13' className='svg-icon-faq'>
                                        <polygon points="7,6 7,0 6,0 6,6 0,6 0,7 6,7 6,13 7,13 7,7 13,7 13,6 "></polygon>
                                    </svg>}

                        </div>

                        <div className={`faqDescription-container ${ clicked2 ? 'slide-open-animation2' : null}`}>
                            <p className="faqDescription-text">Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from R49 to R169 a month. No extra costs, no contracts.</p>
                        </div>

                    </div>

                    <div className="faqSection" onClick={toggleDropDown3}>

                        <div className="question">
                            <h1>Is Netflix safe for kids?</h1>
                            
                            {clicked3 ? 
                                <svg version='1.1' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 13 13' className='svg-icon-faq rotate'>
                                        <polygon points="7,6 7,0 6,0 6,6 0,6 0,7 6,7 6,13 7,13 7,7 13,7 13,6 "></polygon>
                                    </svg> 
                                :   <svg version='1.1' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 13 13' className='svg-icon-faq'>
                                        <polygon points="7,6 7,0 6,0 6,6 0,6 0,7 6,7 6,13 7,13 7,7 13,7 13,6 "></polygon>
                                    </svg>}

                        </div>

                        <div className={`faqDescription-container ${ clicked3 ? 'slide-open-animation3' : null}`}>
                            <p className="faqDescription-text">
                                The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.
                            </p>
                            <p className="faqDescription">
                                Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.
                            </p>
                        </div> 

                    </div>

                    <div className="faqSection" onClick={toggleDropDown4}>

                        <div className="question">
                            <h1>Where can i watch Netflix?</h1>
                            
                            {clicked4 ?
                                <svg version='1.1' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 13 13' className='svg-icon-faq rotate'>
                                        <polygon points="7,6 7,0 6,0 6,6 0,6 0,7 6,7 6,13 7,13 7,7 13,7 13,6 "></polygon>
                                    </svg> 
                                :   <svg version='1.1' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 13 13' className='svg-icon-faq'>
                                        <polygon points="7,6 7,0 6,0 6,6 0,6 0,7 6,7 6,13 7,13 7,7 13,7 13,6 "></polygon>
                                    </svg>}

                        </div>

                        <div className={`faqDescription-container ${ clicked4 ? 'slide-open-animation4' : null}`}>
                            <p className="faqDescription-text">
                                Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
                            </p>
                            <p className="faqDescription-text">
                                You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Faqform;