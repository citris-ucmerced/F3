import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Container, Typography, Grid, TextField } from "@mui/material";

import { readCSV } from "../utils/CSVReader";
import eventsCSV from "../assets/sheets/events.csv";
import EventCard from "../components/EventCard";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "./styles/Events.css";

const Events = () => {
  const [csvData, setCsvData] = useState([]);
  const [futureEvents, setFutureEvents] = useState({});
  const [pastEvents, setPastEvents] = useState({});
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    readCSV(eventsCSV, setCsvData);
  }, []);

  useEffect(() => {
    csvData?.map((item) => {
      item.start = new Date(item.start);
      item.end = new Date(item.end);
      return item;
    });

    const currentDate = new Date();

    const futureData = csvData.reduce((acc, item) => {
      const monthAndYear = item.start.toLocaleString("default", {
        month: "long",
        year: "numeric",
      });

      if (item.start >= currentDate) {
        if (!acc[monthAndYear]) {
          acc[monthAndYear] = [];
        }
        acc[monthAndYear].push(item);
        acc[monthAndYear].sort((a, b) => a.start.getDate() - b.start.getDate());
      }

      return acc;
    }, {});

    const pastData = csvData.reduce((acc, item) => {
      if (item.start < currentDate) {
        const monthAndYear = item.start.toLocaleString("default", {
          month: "long",
          year: "numeric",
        });

        if (!acc[monthAndYear]) {
          acc[monthAndYear] = [];
        }
        acc[monthAndYear].push(item);
        acc[monthAndYear].sort((a, b) => b.start.getDate() - a.start.getDate());
      }

      return acc;
    }, {});

    setFutureEvents(futureData);
    setPastEvents(pastData);
  }, [csvData]);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const filterEvents = (events) => {
    return events.filter((event) =>
      event.title.toLowerCase().includes(searchQuery) ||
      event.location.toLowerCase().includes(searchQuery) ||
      event.summary.toLowerCase().includes(searchQuery) ||
      event.tags.toLowerCase().includes(searchQuery)
    );
  };

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
        <div className="events-divider">
          <Typography variant="h4" component= "h1" className="divider-text">
           Events
          </Typography>
        </div>

          <TextField
            label="Search Events"
            variant="outlined"
            fullWidth
            margin="normal"
            onChange={handleSearch}
            className="search-bar"
          />

          {/* Display Future Events */}
          {Object.entries(futureEvents).map(([monthAndYear, events]) => {
            const filteredEvents = filterEvents(events);
            if (filteredEvents.length > 0) {
              return (
                <Grid container key={monthAndYear} sx={{ marginBottom: "2rem" }}>
                  <Grid item xs={12} className="section">
                    <Typography variant="h6" sx={{ width: "fit-content" }}>
                      {monthAndYear}
                    </Typography>
                    <span className="line"></span>
                  </Grid>

                  {filteredEvents.map((event, iterator) => (
                    <EventCard key={iterator} event={event} />
                  ))}
                </Grid>
              );
            }
            return null;
          })}


<div className="events-divider">
  <Typography variant="h4" component= "h1" className="divider-text">
    Past Events
  </Typography>
</div>

          {/* <Typography variant="h4" component="h1" className="page-title">
            Past Events
          </Typography> */}

          {/* Display Past Events */}
          {Object.entries(pastEvents).map(([monthAndYear, events]) => {
            const filteredEvents = filterEvents(events);
            if (filteredEvents.length > 0) {
              return (
                <Grid container key={monthAndYear} sx={{ marginBottom: "2rem" }}>
                  <Grid item xs={12} className="section">
                    <Typography variant="h6" sx={{ width: "fit-content" }}>
                      {monthAndYear}
                    </Typography>
                    <span className="line"></span>
                  </Grid>

                  {filteredEvents.map((event, iterator) => (
                    <EventCard key={iterator} event={event} />
                  ))}
                </Grid>
              );
            }
            return null;
          })}
        </Container>

        <Footer />
      </div>
    </>
  );
};

export default Events;
