import React from 'react'
import PText from './Ptext'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const ContactBannerStyle = styled.div`
padding: 10rem 0;
.contactBanner__wrapper{
    background-color: #d4c3b8;
    border-radius: 12px;
    padding: 5rem 0rem;
    text-align: center;

}
.contactBanner__heading{
    font-size: 4rem;
    margin-bottom: 2rem;
   
}


@media only screen and (max-width: 768px){
    .contactBanner__heading{
        font-size: 2.8rem;
    }
}
`


const ContactBanner = () => {
    return (
        <ContactBannerStyle>
            {/* <h1 style={{"color":"black"}}>Contact Banner</h1> */}
            <div className="container">
                <div className="contactBanner__wrapper">
                    <PText>
                        Have a project in mind
                    </PText>
                    <h3 className="contactBanner__heading">Let me help you</h3>
                    <Link to="/contact"><button style={{borderRadius: "15px", height: "30px", width:"100px",fontSize:"larger", backgroundColor:"azure"}}>Contact Now</button></Link>
                </div>
            </div>
        </ContactBannerStyle>
    )
}

export default ContactBanner
