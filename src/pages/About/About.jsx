import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About Booky</h2>
            <p className='fs-17'>Our mission is to foster a love for reading by offering a diverse selection of books, creating a welcoming environment, and building a community of book enthusiasts. We believe that books have the power to inspire, educate, and transform lives.</p>
            <p className='fs-17'>Booky was founded in 2019 by Ezdhar Altamimi , a passionate reader and book collector. What started as a small collection of personal favorites has grown into a vibrant book website offering a wide range of genres and titles. Our journey began with a simple belief: books should be accessible to everyone.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
