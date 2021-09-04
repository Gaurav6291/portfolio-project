import React from 'react';
// import { Link } from 'react-router-dom';
import Typed from 'react-typed';
import mineImg from '../mineImg.png'
import GetAppRoundedIcon from '@material-ui/icons/GetAppRounded';
import ContactBanner from './ContactBanner';
import Particles from 'react-particles-js';
import Carousel from 'react-elastic-carousel';
import SliderItem from './SliderItem';
import Html from '../html5.png';
import Css from '../css3.png';
import Express from '../express.png';
import Github from '../github.png';
import Js from '../JavaScript.png';
import MaterialUI from '../material-ui.png';
import Mongo from '../mongodb.png';
import Node from '../node.jpg';
import Npm from '../npm.png';
import ReactImg from '../React.png';
import Redux from '../redux.png';

const breakPoints = [
  { width: 1, itemsToShow:1 },
  { width: 550, itemsToShow:2 },
  { width: 768, itemsToShow:3 },
  { width: 1200, itemsToShow:4 },
]
// import Footer from './Footer';
// import bg2 from '../bg2.png'
// import About from './About';
const Header = () => {
    return (
        <>
            <Particles
          className="particles-canvas"
    params={
      {
        Particles: {
          number: {
            density:{
              enable: true,
              value_area: 900
            }
          },
          shape: {
            type: "star",
            stroke: {
              width: 6,
              color: "#f9ab00"
            }
          }
        }
      }
    }
     />
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
                <h3 className="bio">I enjoy developing websites and web applications. Love to have conversations about anything and everything.</h3>
                <button className="btn-main-offer" onClick={() => window.open("/Resume.pdf", "_blank")}><GetAppRoundedIcon /> Resume</button>
                </div>
                <img src={mineImg} alt="sds" />
            </div>
        </div>
            {/* <About /> */}
            <div className="slider" style={{marginTop:"50px"}}>
            <h2 style={{textAlign:"center", color:"chartreuse", fontWeight:"bolder", marginBottom:"20px",border:"2px solid blue"}}>Tech-Stack</h2>
            <Carousel breakPoints={breakPoints}>
              <SliderItem><img src={Html} alt="adr" /></SliderItem>
              <SliderItem><img src={Css} alt="adr" /></SliderItem>
              <SliderItem><img src={Js} alt="adr" /></SliderItem>
              <SliderItem><img src={ReactImg} alt="adr" /></SliderItem>
              <SliderItem><img src={Redux} alt="adr" /></SliderItem>
              <SliderItem><img src={Mongo} alt="adr" /></SliderItem>
              <SliderItem><img src={Node} alt="adr" /></SliderItem>
              <SliderItem><img src={Npm} alt="adr" /></SliderItem>
              <SliderItem><img src={Express} alt="adr" /></SliderItem>
              <SliderItem><img src={MaterialUI} alt="adr" /></SliderItem>
              {/* <SliderItem><img src={Github} alt="adr" /></SliderItem>
              <SliderItem><img src={Github} alt="adr" /></SliderItem> */}
              </Carousel>
            </div>
           <ContactBanner />
           
            </>
    )
}

export default Header
