import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  Container,
  Typography,
  Grid,
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Box,
  InputAdornment,
} from "@mui/material";

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
  const [sortedPastEvents, setSortedPastEvents] = useState({}); // New state for sorted past events
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categories, setCategories] = useState([]);

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
      }

      return acc;
    }, {});

    setFutureEvents(futureData);
    setPastEvents(pastData);

    // Sort the month and year keys in descending order for past events
    const sortedKeys = Object.keys(pastData).sort((a, b) => {
      const dateA = new Date(a + " 1");
      const dateB = new Date(b + " 1");
      return dateB - dateA;
    });

    // Create a new object with sorted keys
    const sortedData = {};
    sortedKeys.forEach((key) => {
      sortedData[key] = pastData[key];
    });

    setSortedPastEvents(sortedData);

    // Extract categories from events
    const uniqueCategories = Array.from(
      new Set(
        csvData.flatMap((event) =>
          event.tags
            .split(",")
            .map((tag) => tag.trim())
            .map((tag) => tag.toLowerCase() === "innovate" ? "Innovate" : capitalize(tag))
        )
      )
    );
    setCategories(uniqueCategories);

  }, [csvData]);

  const capitalize = (s) => {
    if (typeof s !== "string") return "";
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const filterEvents = (events) => {
    return events.filter((event) =>
      (event.title.toLowerCase().includes(searchQuery) ||
        event.location.toLowerCase().includes(searchQuery) ||
        event.summary.toLowerCase().includes(searchQuery) ||
        event.tags.toLowerCase().includes(searchQuery)) &&
      (selectedCategory === "" || event.tags.toLowerCase().includes(selectedCategory.toLowerCase()))
    );
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
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
          {/* Future Events Section */}
          <div className="events-divider">
            <Typography variant="h4" component="h1" className="divider-text">
              Upcoming Events
            </Typography>
          </div>

          {/* Search Bar */}
          <div className="search-bar-container">
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
              <TextField
                label="Search Events"
                variant="outlined"
                margin="normal"
                fullWidth
                onChange={handleSearch}
                className="search-bar"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <FormControl variant="standard" className="category-select">
                        <InputLabel>Category</InputLabel>
                        <Select
                          value={selectedCategory}
                          onChange={handleCategoryChange}
                          label="Category"
                        >
                          <MenuItem value="">
                            <em>All</em>
                          </MenuItem>
                          {categories.map((category, index) => (
                            <MenuItem key={index} value={category}>
                              {category}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          </div>

          {/* Render Future Events */}

{Object.keys(futureEvents).length === 0 ? (
  <Typography
    variant="h6"
    component="h1"
    align="center"
    fontWeight="bold"
    color="black"
    margin={"7rem 7rem"}
  >
    THERE ARE CURRENTLY NO UPCOMING EVENTS, KEEP AN EYE OUT FOR UPDATES!
  </Typography>
) : (
  Object.entries(futureEvents).map(([monthAndYear, events]) => {
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
  })
)}


          {/* Past Events Section */}
          <div className="events-divider">
            <Typography variant="h4" component="h1" className="divider-text">
              Past Events
            </Typography>
          </div>

          {/* Render Past Events */}
          {Object.entries(sortedPastEvents).map(([monthAndYear, events]) => {
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
            } else return null;
          })}
        </Container>

        <Footer />
      </div>
    </>
  );
};

export default Events;
