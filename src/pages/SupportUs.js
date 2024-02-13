import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Button, Container } from '@mui/material';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './styles/SupportUs.css'; // Assuming you have a separate CSS file for this page
import image from "../assets/images/agriculture.png";


const SupportUs = () => {
  return (
    <>
      <Helmet>
        <title>Support F3 Innovate - UC Merced</title>
        <meta name="description" content="Support sustainable food production initiatives by F3 at UC Merced." />
      </Helmet>
      <div className="page">
        <Navbar />
        <Container className="support-us-container">

        <img className="logo" src={image} alt="F3 Work" style={{ width: '300px', maxWidth: '30rem', height: 'auto' }} />


          <h1>Support Our Mission</h1>
          <p>
            F3 Innovate at UC Merced builds groundbreaking research and technology in sustainable agriculture, aiming to revolutionize food production in California's Central Valley and beyond. Our efforts focus on creating a sustainable future for food production, reducing environmental impact, and supporting local communities.
          </p>
          <h2>Why Your Support Matters</h2>
          <ul>
            <li><strong>Environmental Impact:</strong> Sustainable farming practices can significantly reduce water usage by up to 50% compared to traditional methods.</li>
            <li><strong>Innovation and Education:</strong> Your donation helps fund critical research and educational programs, preparing the next generation of leaders in sustainable agriculture.</li>
          </ul>
          <p>
            Every contribution, no matter the size, makes a significant difference in our mission. Together, we can build a more sustainable and food-secure future.
          </p>
          <Button
            variant="contained"
            color="primary"
            href="https://engage.ucmerced.edu/vista"
            target="_blank"
            rel="noopener noreferrer"
          >
            Donate Now
          </Button>
        </Container>
        <Footer />
      </div>
    </>
  );
};

export default SupportUs;
