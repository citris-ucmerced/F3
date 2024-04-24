import {
    Container,
    Box,
    Typography,
  } from "@mui/material";
  import { Helmet } from "react-helmet-async";
  
  import Navbar from "../components/Navbar";
  import Footer from "../components/Footer";
  import "./styles/ESF.css";
  
  const TheFarm = () => {
    return (
      <>
        <Helmet>
          <title>Experimental Smart Farm</title>
          <meta name="description" content="Learn about our experimental smart farm technology." />
          <link rel="canonical" href="/ContactUs" />
        </Helmet>
        
        <Box className="page">
          <Navbar />
          <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            
            <img className="ESF_one" src="/ESF_one.png" alt="Smart Farm Page 1" />
            <img className="ESF_two" src="/ESF_two.png" alt="Smart Farm Page 2" />
          </Container>
        
          
          <Footer />
        </Box>
      </>
    );
  };
  
  export default TheFarm;
  


  