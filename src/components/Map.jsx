import React from 'react';
import styled from 'styled-components';
import MapImg from '../Map.png';
import Ptext from './Ptext';

const MapStyles = styled.div`
  background: url(${MapImg}) no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 400px;
  margin-bottom: 1rem;
  .container {
    position: relative;
    min-height: 400px;
  }
  .map__card {
    position: absolute;
    right: 10%;
    bottom: 10%;
    padding: 2rem;
    background: grey;
    width: 100%;
    max-width: 300px;
    border-radius: 12px;
    /* margin-bottom: 10rem; */
  }
  .map__card__heading {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  .map__card__link {
    display: inline-block;
    font-size: 1.6rem;
    margin-top: 3rem;
    text-decoration: underline;
  }
  @media only screen and (max-width: 768px) {
    background-position: 80% center;
  }
  @media only screen and (max-width: 400px) {
    .map__card {
      /* max-width: none; */
      right: auto;
      width: 50vw;
    }
  }
`;

export default function Map() {
  return (
    <MapStyles>
      <div className="container">
        <div className="map__card">
          <h3 className="map__card__heading">Here is me</h3>
          <Ptext>Dungarpur, Rajasthan, India</Ptext>
          <a
            className="map__card__link"
            href="https://www.google.com/maps/@23.8557247,73.7172144,18z"
            // {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3648.9597550436088!2d73.7171285!3d23.8555628!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396771c128eabdef%3A0x4c4796fc936dac11!2sShivaji%20Nagar%2C%20Shivaji%20Nagar%20R.H.B.%2C%20Dungarpur%2C%20Rajasthan%20314001!5e0!3m2!1sen!2sin!4v1630726994782!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe> */}
            target="_blank"
            rel="noreferrer"
          >
            Open in google map
          </a>
        </div>
      </div>
      {/* <img src={MapImg} alt="Map" /> */}
    </MapStyles>
  );
}