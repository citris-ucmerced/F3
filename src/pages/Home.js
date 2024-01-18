import { Helmet } from "react-helmet-async";
import { Container, Grid, Typography} from "@mui/material";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PartnerCard from "../components/PartnerCard"; // New component for partner cards
import AOS from "aos";
import 'aos/dist/aos.css';
import ucmerced_image from "../assets/images/ucmerced_aerial.jpg"
import fruit from "../assets/images/Rooted_in_Growth.jpeg"
import tractor from "../assets/images/Future_of_Food.jpeg"



import "./styles/Home.css";
import { useEffect } from "react";
import partnerData from "../components/partnerData";
import InstagramPosts from "../components/InstagramPost";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
      <Helmet>
        <title>F3 - Farms, Food, Future</title>
        <meta name="description" content="Pioneering sustainable food production through cutting-edge research and development. Training the next generation for the future of food workforce."/>
        <link rel="canonical" href="/" />
      </Helmet>
      <Navbar />
      <div className="home-banner">
          <div className="home-banner-video-container">
            <video autoplay="autoplay" muted={true} loop id="home-banner-video">
              <source
                src={require("../assets/video/tractor(compressed)-Trim.mp4")}
                type="video/mp4"
              />
            </video>
          </div>
        <Container className="home-banner-text-container">
            <h1 className="home-banner-text" data-aos="fade-right">F3 Innovate:</h1>
            <h2 className="home-banner-text" data-aos="flip-down"><span style={{color: "#FFCC8E"}}>supporting</span> the central valley</h2>
        </Container>
        </div>

        <div className="info-home">
  <Container maxWidth="lg">
    {/* Section 1 */}
    <Grid container spacing={12} alignItems="center">
      <Grid item xs={12} md={6}>
        <img src={fruit} alt="UC Merced Farm Landscape" className="info-image" />
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography variant="h6" gutterBottom>
          Rooted in Growth
        </Typography>
        <Typography variant="body2">
        F3 Innovate harnesses technology and research to advance sustainable farming practices in California's Central Valley. It connects experts, students, and farmers to develop new solutions for food production that are both efficient and environmentally friendly.
        </Typography>
      </Grid>
    </Grid>

    {/* Section 2 */}
    <Grid container spacing={2} alignItems="center" direction="row-reverse">
      <Grid item xs={12} md={6}>
        <img src={ucmerced_image} alt="UC Merced Farm Landscape" className="info-image" />
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography variant="h6" gutterBottom>
          Our Region
        </Typography>
        <Typography variant="body2">
        UC Merced's strong focus on research and environmental sustainability makes it a natural hub for F3, providing cutting-edge innovation to enhance local and global food production.
        </Typography>
      </Grid>
    </Grid>

    {/* Section 3 */}
    <Grid container spacing={12} alignItems="center">
      <Grid item xs={12} md={6}>
        <img src={tractor} alt="UC Merced Farm Tractors" className="info-image" />
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography variant="h6" gutterBottom>
          The Future of Food
        </Typography>
        <Typography variant="body2">
        F3 integrates the latest technologies and research into agriculture to make farming more sustainable and productive. F3 aims to educate and equip farmers with these advancedments.
        </Typography>
      </Grid>
    </Grid>
  </Container>
</div>

{/* <div className="instagram-section">
        <Container maxWidth="md">
          <Typography variant="h3" component="h2" className="instagram-header">
            Discover Our Latest Events and Innovations
          </Typography>
          <Typography variant="subtitle1" gutterBottom className="instagram-subheader">
            Explore our journey and contributions through our latest Instagram updates.
          </Typography>
          <InstagramPosts />
        </Container>
      </div> */}

  
            
      <div className="page-home">
        <Typography variant="h2" component="h1" className="page-title">
          Our Partners
        </Typography>

      

        <div className="partners-container" data-aos="flip-up">
          {partnerData.map((partner, index) => (
            <PartnerCard
              key={index}
              name={partner.name}
              description={partner.description}
              imageUrl={partner.imageUrl}
              learnMoreUrl={partner.learnMoreUrl}
            />
          ))}
        </div>
      </div>
      
      <Footer/>
    </>
  );
};

export default Home;
