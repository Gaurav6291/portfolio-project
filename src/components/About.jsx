import React, { useState } from 'react'
import styled from 'styled-components';
import PText from './Ptext';
import SectionTitle from './SectionTitle';
import aboutMe from '../aboutMe.jpg'
import { Frontend, Backend } from './proficiencyList';
const AboutSectionStyles = styled.div`
  padding: 10rem 0;
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
  }
  .aboutSection__left,
  .aboutSection__right {
    flex: 1;
  }
  .section-title {
    text-align: left;
  }
  .para {
    margin-top: 2rem;
    margin-left: 0;
  }
  .aboutSection__buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 2rem;
  }
  @media only screen and (max-width: 950px) {
    .aboutSection__left {
      flex: 4;
    }
    .aboutSection__right {
      flex: 3;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column-reverse;
      text-align: center;
    }
    .aboutSection__left,
    .aboutSection__right {
      width: 100%;
    }
    .aboutSection__right {
      margin-top: 1rem;
      margin-bottom: 1rem;
     img{
       width: 100vw !important;
     }
    }
    
    .section-title {
      text-align: center;
    }
    .para {
      margin: 0 auto;
      margin-top: 2rem;
    }
    .aboutSection__buttons {
      flex-direction: column;
      gap: 1rem;
      .button-wrapper,
      a {
        width: 100%;
        text-align: center;
      }
    }
  }
`;

const About = () => {
  const [fskill, setFskill] = useState(Frontend)
  const [bskill, setBskill] = useState(Backend)

  
    return (
        <AboutSectionStyles>
          <div className="container">
            <div className="aboutSection__left">
              <SectionTitle
                subheading="Let me introduce myself"
                heading="About Me"
              />
              <PText>
              My name is Gaurav Parmar.
I am from Dungarpur, Rajasthan. 
I am a hard-working B.Tech. graduate specialized in Information Technology from CTAE, Udaipur.
I'm a curious and enthusiastic full-stack web developer with a good foundation in following libraries, frameworks and tools.

              </PText>
              <div className="aboutSection__buttons">
                <button>Projects</button>
                <button >Blogs</button>
              </div>
            </div>
            <div className="aboutSection__right">
              <img className="aboutImg" style={{width:"550px"}} src={aboutMe} alt="Img" />
            </div>
          </div>
          <div className="mySkills">
              <h2>Proficiencies</h2>
              <div>
                <div className="front">
                  <h3>Frontend</h3>
                  <div className="fmain">
                    {fskill.map((item) => (
                      <>
                      <div className="boxes">
                        <h4>{item.name}</h4>
                        <img src={item.img} alt="sf" />
                      </div>
                      </>
                    ))}
                  </div>
                </div>
                <div className="back">
                  <h3>Backend</h3>
                  <div className="bmain">
                    {bskill.map((item) => (
                      <>
                      <div className="boxes">
                        <h4>{item.name}</h4>
                        <img src={item.img} alt="sfg" />
                      </div>
                      </>
                    ))}
                  </div>
                </div>
              </div>
          </div>
          
        </AboutSectionStyles>
      );
}

export default About
