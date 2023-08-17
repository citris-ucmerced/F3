import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Container, Typography, Box, Grid } from "@mui/material";

import { readCSV } from "../utils/CSVReader";
import eventsCSV from "../assets/sheets/events.csv";
import EventCard from "../components/EventCard";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "./styles/Events.css";

const Events = () => {
  const [csvData, setCsvData] = useState([]);
  const [groupedData, setGroupedData] = useState({});

  useEffect(() => {
    readCSV(eventsCSV, setCsvData);
  }, []);

  useEffect(() => {
    csvData?.map((item) => {
      item.start = new Date(item.start);
      item.end = new Date(item.end);
      return item;
    });

    const data = csvData.reduce((acc, item) => {
      const monthAndYear = item.start.toLocaleString("default", {
        month: "long",
        year: "numeric",
      });

      if (!acc[monthAndYear]) {
        acc[monthAndYear] = [];
      }
      acc[monthAndYear].push(item);
      acc[monthAndYear].sort((a, b) => a.start.getDate() - b.start.getDate()); // sort days in ascending order
      return acc;
    }, {});

    setGroupedData(data);
  }, [csvData]);

  return (
    <>
      <Helmet>
        <title>F3 - Farms, Food, Future</title>
        <meta
          name="description"
          content="Pioneering sustainable food production through cutting-edge research and development. Training the next generation for the future of food workforce."
        />
        <link rel="canonical" href="/" />
      </Helmet>
      <div className="page">
        <Navbar />

        <Container>
        <Typography variant="h4" component="h1" className="page-title">
          Events
        </Typography>

          {Object.entries(groupedData).map(([monthAndYear, events]) => (
            <Grid container key={monthAndYear} sx={{ marginBottom: "2rem" }}>
              <Grid item xs={12} className="section">
                <Typography variant="h6" sx={{ width: "fit-content" }}>
                  {monthAndYear}
                </Typography>
                <span className="line"></span>
              </Grid>

              {events.map((event, iterator) => (
                <EventCard key={iterator} event={event} />
              ))}
            </Grid>
          ))}
        </Container>

        <Footer />
      </div>
    </>
  );
};

export default Events;