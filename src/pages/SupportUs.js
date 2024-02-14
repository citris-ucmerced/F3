import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Button, Container } from '@mui/material';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './styles/SupportUs.css'; // Assuming you have a separate CSS file for this page
import image from "../assets/images/planting.png";
import supportimage from "../assets/images/SupportUs.jpg";



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




          <h1>Support Our Mission <img className="seedling" src={image} alt="Hands holding a seedling" style={{ width: '60px', maxWidth: '30rem', height: 'auto'}} />
</h1>
          
          <img className="support-image" src={supportimage} alt="Hands holding a seedling" style={{ width: '750px', maxWidth: '120rem', height: 'auto', borderRadius: '60px', paddingBottom:'40px'}} />
    
          <p>
            F3 Innovate at UC Merced builds groundbreaking research and technology in sustainable agriculture, aiming to revolutionize food production in California's Central Valley and beyond. Our efforts focus on creating a sustainable future for food production, reducing environmental impact, and supporting local communities.Your donation helps fund critical research and educational programs, preparing the next generation of leaders in sustainable agriculture.

          </p>
         
          <p>
            Every contribution, no matter the size, makes a significant difference in our mission. Together, we can build a more sustainable and food-secure future. Let's build the future of food together!
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
