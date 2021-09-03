import React from 'react';
// import { Link } from 'react-router-dom';
import Typed from 'react-typed';
import mineImg from '../mineImg.png'
import GetAppRoundedIcon from '@material-ui/icons/GetAppRounded';
import ContactBanner from './ContactBanner';
// import Footer from './Footer';
// import bg2 from '../bg2.png'
// import About from './About';
const Header = () => {
    return (
        <>
        <div className="header-wraper">
            <div className="main-info">
            <div className="main-info-left">
                <h1>Hi There, I am Gaurav Parmar</h1>
                <Typed 

                    className="typed-text"
                    strings={["Web Development", "Front-end", "Back-end", "Full-stack"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <h3 className="bio">Aspiring full stack developer with Excellent problem-solving skills. Able to perform well in a team.
Passionate about coding and equipped with a diverse and promising skill-set.</h3>
                <button className="btn-main-offer" onClick={() => window.open("/Resume.pdf", "_blank")}><GetAppRoundedIcon /> Resume</button>
                </div>
                <img src={mineImg} alt="sds" />
            </div>
        </div>
            {/* <About /> */}
           <ContactBanner />
           
            </>
    )
}

export default Header
