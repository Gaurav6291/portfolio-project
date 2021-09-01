import React from 'react';
import Typed from 'react-typed';
import mineImg from '../mineImg.png'
const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
            <div>
                <h1>Hi There, I am Gaurav Parmar</h1>
                <Typed 

                    className="typed-text"
                    strings={["Web Development", "Front-end", "Back-end", "Full-stack"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <a href="#" className="btn-main-offer">Contact Me</a>
                </div>
                <img src={mineImg} alt="sds" />
            </div>
        </div>
    )
}

export default Header
