import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Container, Box, Typography } from "@mui/material";
import Carousel from "nuka-carousel";

import { getRowById } from "../utils/CSVReader.js";

import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";

import eventsCSV from "../assets/sheets/events.csv";

import "./styles/EventDetails.css";

const ListLinks = ({ links }) => {
  /*
    parses title within [], link within "", splits by comma, and removes whitespaces
    
    e.g.
      input: ' [Google]"https://www.google.com", [Facebook]"https://www.facebook.com" '

      output: [['Google', 'https://www.google.com'], ['Facebook', 'https://www.facebook.com']]
  */

  const parseTitleAndLinkRegex = /\[(.*?)\]"\s*(.*?)\s*"(?:\s*,\s*|$)/g;

  let match;
  let pairs = [];

  while ((match = parseTitleAndLinkRegex.exec(links))) {
    const title = match[1].trim();
    const url = match[2].trim();
    const newPair = [title, url];
    pairs.push(newPair);
  }

  return (
    <Box marginTop="3rem" marginBottom="5rem">
      <Typography variant="h5" component="p" align="center">
        Links
      </Typography>
      <Box sx={{ marginLeft: "2rem" }} className="custom-card" padding="2rem" marginTop="1rem">
        <ul>
          {pairs.map((pair, index) => {
            return (
              <Typography
                variant="h6"
                component="p"
                className="event-link"
                key={index}
              >
                <li>
                  <a
                    href={pair[1]}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`Visit ${pair[0]} website`}
                  >
                    {pair[0]}
                  </a>
                </li>
              </Typography>
            );
          })}
        </ul>
      </Box>
    </Box>
  );
};

const Form = ({ url }) => {
  return (
    <Box sx={{ marginY: "2rem", height: "90vh", overflow: "hidden" }}>
      <Typography variant="h5" component="p" align="center" marginBottom="2rem">
        Form
      </Typography>
      <Typography variant="h6" component="p">
        <iframe
          title="eventDesc"
          src={url}
          style={{ width: "100%", height: "550px", border: "none" }}
        />
      </Typography>
    </Box>
  );
};

const ImageCarousel = ({ imageFiles }) => {
  const images = imageFiles.split(",").map((img) => img.trim()); // split by comma and remove whitespace

  return (
    <>
      <Typography variant="h5" component="p" align="center">
        Slideshow
      </Typography>
      <Carousel
        autoplay={true}
        wrapAround={true}
        swiping={true}
        className="carousel"
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={process.env.PUBLIC_URL + "/images/events/" + image}
            alt="Event"
            className="carousel-image"
          />
        ))}
      </Carousel>
    </>
  );
};

const EventDetails = () => {
  const { id } = useParams();

  const [event, setEvent] = useState({});

  // Use the id parameter to fetch data for the event with that id
  useEffect(() => {
    getRowById(eventsCSV, id, setEvent);
  }, []);

  const {
    title,
    description,
    start,
    time,
    location,
    imageFiles,
    iframeSrc,
    links,
    flyerCoverFile,
    flyerPdf,
  } = event;

  const subtitle = ` ${location} @ ${time} on ${start}`;
  return (
    <>
      <Helmet>
        <title>VISTA</title>
        <meta name="description" content="" />
      </Helmet>

      <div className="page">
        <Navbar />

        <Container sx={{ minHeight: "90vh" }}>
          <Typography variant="h4" component="h1" className="page-title">
            {title}
          </Typography>

          <Typography variant="h6" component="h1" className="page-title">
            {subtitle}
          </Typography>

          <Box sx={{ marginY: "2rem" }}>
            <Typography
              variant="h6"
              component="p"
              className="custom-card"
              padding="1rem"
            >
              {description}
            </Typography>
          </Box>

          {flyerCoverFile && flyerPdf && <span className="divider" />}

          {flyerCoverFile && flyerPdf && (
            <Box>
              <a
                href={process.env.PUBLIC_URL + "/flyers/" + flyerPdf}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={process.env.PUBLIC_URL + "/flyers/" + flyerCoverFile}
                  alt="Event"
                  className="flyer-image"
                />
              </a>
            </Box>
          )}

          {imageFiles && <span className="divider" />}
          {imageFiles && <ImageCarousel imageFiles={imageFiles} />}

          {iframeSrc && <span className="divider" />}
          {iframeSrc && <Form url={iframeSrc} />}

          {links && <span className="divider" />}
          {links && <ListLinks links={links} />}
        </Container>

        <Footer />
      </div>
    </>
  );
};

export default EventDetails;