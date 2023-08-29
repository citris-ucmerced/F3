import {
  Container,
  Typography,
  Box,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import { Helmet } from "react-helmet-async";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "./styles/InnovateShowcase.css"

const InnovateShowcase = () => {
  const agenda = [
    {
      time: "10:00",
      title: "Coffee and Networking",
      details: ""
    },
    {
      time: "10:15",
      title: "Welcome and Introductions",
      details: "Josh Viers, UC Merced\nRam Nunna, Fresno State"
    },
    {
      time: "10:30",
      title: "Technological Innovation for Agriculture: F3 Challenge Grant Research Collaborations ",
      details: ""
    },
    {
      time: "11:30",
      title: "Break",
      details: ""
    },
    {
      time: "11:45",
      title: "Inclusive Innovation with Industry and Communities Moderated by Dr. Leigh Bernacchi, Executive Director, VISTA F3 Innovate Panelists:  ",
      details: ""
    },
    {
      time: "12:25",
      title: "Lunch buffet and networking ",
      details: ""
    },
    
    // Add more items
  ];

  return (
    <>
      <Helmet>
        <title>InnovateShowcase</title>
        <meta name="description" content="upcoming innovate event" />
        <link rel="canonical" href="/DailySchedule" />
      </Helmet>
      <Box className="page">
        <Navbar />
        <Container>
          <Box my={4}>
            <Typography variant="h4" component="h1" align="center" className="page-title" gutterBottom>
              Detailed Agenda
            </Typography>

            <Box mt={4} p={2} className="agenda">
              <Table className="agenda-table">
                <TableBody>
                  {agenda.map((item, index) => (
                    <TableRow key={index} className="agenda-row">
                      <TableCell className="agenda-time">{item.time}</TableCell>
                      <TableCell className="agenda-title">
                        <Typography variant="h6">{item.title}</Typography>
                        <Typography variant="body2">{item.details.split('\n').map((line, i) => <p key={i}>{line}</p>)}</Typography>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Box>
        </Container>
        <Footer />
      </Box>
    </>
  );
};

export default InnovateShowcase;
