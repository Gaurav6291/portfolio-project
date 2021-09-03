import React from 'react'
import PText from './Ptext'
import styled from 'styled-components'

const ContactBannerStyle = styled.div`
padding: 10rem 0;
.contactBanner__wrapper{
    background-color: brown;
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
                    <button>Contact Now</button>
                </div>
            </div>
        </ContactBannerStyle>
    )
}

export default ContactBanner
