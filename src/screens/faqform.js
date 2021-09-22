import React, { useState } from 'react';
import { useHistory, NavLink } from 'react-router-dom';
import './Faqform.css';

function Faqform() {

    const history = useHistory();

    // =================================================================

    const [clicked1, setClicked1] = useState(false);

    const toggleDropDown1 = (e) => {
        // console.log(e.target);
        if (clicked1) setClicked1(false);
        else if (!clicked1) setClicked1(true);

    }

    // =================================================================

    const [clicked2, setClicked2] = useState(false);

    const toggleDropDown2 = (e) => {
        if (clicked2) setClicked2(false)
        else if (!clicked2) setClicked2(true);
    }

    //==================================================================

    const [clicked3, setClicked3] = useState(false);

    const toggleDropDown3 = (e) => {
        if (clicked3) setClicked3(false);
        else if (!clicked3) setClicked3(true);
    }

    //==================================================================

    const [clicked4, setClicked4] = useState(false);

    const toggleDropDown4 = (e) => {
        if (clicked4) setClicked4(false);
        else if (!clicked4) setClicked4(true);
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
            <div className='nav blackDrop'>
                    <img 
                        onClick={() => history.push('/')}
                        className='Nav-logo' src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="Netflix logo" />
                    <h1><NavLink exact to='/' className='nav-link'  activeClassName='activeNav' onClick={() => history.push('/')}>Home</NavLink></h1>

                    <h1><NavLink to='faq' className='nav-link' activeClassName='activeNav' onClick={() => history.push('/faq')}>F&Q</NavLink></h1>

                    <h1><NavLink to='aboutme' className='nav-link' activeClassName='activeNav' onClick={() => history.push('/aboutme')}>About Me</NavLink></h1>

                    <h1><NavLink to='mylist' className='nav-link' activeClassName='activeNav' onClick={() => history.push('/mylist')}>My List</NavLink></h1>
                    <img 
                        onClick={() => history.push('/profile')}
                        className='nav-avatar'
                        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Netflix Avatar" />
                </div>
            <div className="faqform">
                <div className="faq-body">
                    <h1 className="faq-title">Frequently Asked Questions</h1>

                    <div className="faqSection" onClick={toggleDropDown1}>
                        <div className="question">
                            <h1>What is Netflix?</h1>

                            {clicked1 ? 
                                <svg id="thin-x" viewBox="0 0 26 26" className="svg-icon-faq" focusable="true">
                                    <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
                                </svg> 
                                :   <svg version='1.1' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 13 13' className='svg-icon-faq'>
                                        <polygon points="7,6 7,0 6,0 6,6 0,6 0,7 6,7 6,13 7,13 7,7 13,7 13,6 "></polygon>
                                    </svg>}
                            
                        </div>
                        {clicked1 ?
                            <div className="faqDescription-container">
                                <p className="faqDescription-text">
                                    Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.
                                </p>
                                <p className='faqDescription-text'>
                                    You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!
                                </p> 
                            </div> : null}
                    </div>
                    <div className='faqSection' onClick={toggleDropDown2}>
                        <div className="question">
                            <h1>How much does Netflix cost?</h1>
                            
                            {clicked2 ? 
                                <svg id="thin-x" viewBox="0 0 26 26" className="svg-icon-faq" focusable="true">
                                    <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
                                </svg> 
                                :   <svg version='1.1' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 13 13' className='svg-icon-faq'>
                                        <polygon points="7,6 7,0 6,0 6,6 0,6 0,7 6,7 6,13 7,13 7,7 13,7 13,6 "></polygon>
                                    </svg>}

                        </div>
                        {clicked2 ? 
                                <div className="faqDescription-container">
                                    <p className="faqDescription-text">Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from R49 to R169 a month. No extra costs, no contracts.</p>
                                </div> : null}
                    </div>
                    <div className="faqSection" onClick={toggleDropDown3}>
                        <div className="question">
                            <h1>Is Netflix safe for kids?</h1>
                            
                            {clicked3 ? 
                                <svg id="thin-x" viewBox="0 0 26 26" className="svg-icon-faq" focusable="true">
                                    <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
                                </svg> 
                                :   <svg version='1.1' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 13 13' className='svg-icon-faq'>
                                        <polygon points="7,6 7,0 6,0 6,6 0,6 0,7 6,7 6,13 7,13 7,7 13,7 13,6 "></polygon>
                                    </svg>}

                        </div>
                        {clicked3 ? 
                                <div className="faqDescription-container">
                                    <p className="faqDescription-text">
                                        The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.
                                    </p>
                                    <p className="faqDescription">
                                        Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.
                                    </p>
                                </div> : null}
                    </div>
                    <div className="faqSection" onClick={toggleDropDown4}>
                        <div className="question">
                            <h1>Where can i watch Netflix?</h1>
                            
                            {clicked4 ?
                                <svg id="thin-x" viewBox="0 0 26 26" className="svg-icon-faq" focusable="true">
                                    <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
                                </svg> 
                                :   <svg version='1.1' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 13 13' className='svg-icon-faq'>
                                        <polygon points="7,6 7,0 6,0 6,6 0,6 0,7 6,7 6,13 7,13 7,7 13,7 13,6 "></polygon>
                                    </svg>}

                        </div>
                        {clicked4 ? 
                                <div className="faqDescription-container">
                                    <p className="faqDescription-text">
                                        Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
                                    </p>
                                    <p className="faqDescription-text">
                                        You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
                                    </p>
                                </div> : null}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Faqform;