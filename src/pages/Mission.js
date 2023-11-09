import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Container } from '@mui/material';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import 'aos/dist/aos.css';
import './styles/Mission.css';

const Mission = () => {
  return (
    <>
      <Helmet>
        <title>About Us - F3 Innovate</title>
        <meta
          name="description"
          content="Discover F3 Innovate's mission at UC Merced to pioneer sustainable food production."
        />
        <link rel="canonical" href="/about" />
      </Helmet>
      <div className="page">
        <Navbar />
        <Container>
          <section className="about-us-section">
            <h1>About Us</h1>
            <div className="about-section">
              <div className="image-wrapper">
                <img className="greenhouse" src="./images/projects/vegetables.jpg" alt="Vegetables" />
              </div>
              <div className="text-wrapper">
                <h3>Our Journey Begins Here</h3>
                <p className="about-description">
                  F3 Innovate harnesses technology and research to advance sustainable farming practices in California's Central Valley. It connects experts, students, and farmers to develop new solutions for food production that are both efficient and environmentally friendly.
                </p>
                <h3>Our Mission</h3>
                <p className="about-description">
                F3's mission is to integrate the latest technologies and research into agriculture to make farming more sustainable and productive. They aim to educate and equip farmers in the Central Valley with these advancements, ultimately leading to a more efficient and environmentally friendly food production system that can also strengthen the local economy.
                </p>
              
              </div>
            </div>
            <div className="about-section">
              <div className="image-wrapper2">
                <img className="greenhouse" src="./images/projects/greenhouse.jpg" alt="Greenhouse" />
              </div>
              <div className="text-wrapper">
                <h3>Rooted in Growth</h3>
                <p className="about-description">
                  UC Merced is ideally located in the heart of California's Central Valley, a region pivotal to America's agriculture industry. The university's strong focus on research and environmental sustainability makes it a natural hub for F3, providing cutting-edge innovation to enhance local and global food production.
                </p>

                <h3>The Story of F3 Innovate</h3>
                <p className="about-description">
                F3 at UC Merced is the result of a partnership between the Central Valley Community Foundation, agricultural industry leaders, and the university's researchers. This collaboration was formed to harness UC Merced's research strengths and the Central Valley's agricultural expertise to innovate sustainable farming practices, aiming to uplift the local economy and set a precedent for global food production.
                </p>
 
              </div>
            </div>
          </section>
        </Container>
        <Footer />
      </div>
    </>
  );
};

export default Mission;
