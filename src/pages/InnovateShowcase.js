import {
  Container,
  Typography,
  Box,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Link,
} from "@mui/material";
import { Helmet } from "react-helmet-async";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "./styles/InnovateShowcase.css"

const InnovateShowcase = () => {
  const agenda = [
    // existing items and additional items
    // ... 
    {
      time: "10:00am",
      title: "Coffee and Networking",
      details: ""
    },
    {
      time: "10:15am",
      title: "Welcome and Introductions",
      details: "- Josh Viers, Associate Vice Chancellor for Research and Strategic Initiatives, UC Merced \n - Ram Nunna, Dean of the Lyles School of Engineering, Fresno State  "
    },
    {
      time: "10:30am",
      title: "Technological Innovation for Agriculture: F3 Challenge Grant Research Collaborations ",
      details: '- Dr. Sankhar Banerjee, "Smart and advanced water treatment and food processing technologies and strategies: towards the development of sustainable and controlled environmental agricultural pathways” Co-authored with Dr. Venkattraman Ayyaswamy, Dr. Gerardo Diaz, Dr. Walter Mizuno, Dr. The Nguyen, and Dr. Edbertho Leal-Quiros  \n - Dr. Qin Fan, “California’s Water for Farms:  Irrigation Decisions Under Climate Change,” Co-authored with Dr. Safeeq Kahn and Dr. Jiaochen Liang  \n - Iman Ebrahimi, “Non-invasive Hybrid Sensing of Key Chemical Compositions of Grapes,” Co-authored with Dr. Luca Brillante and Dr. Ricardo Pinto de Castro \n - Dr. Rebecca Ryals, “Using biochar co-compost to foster a climate smart, circular agriculture economy,” Co-authored with Dr. Xuan Zheng  '
    },
    {
      time: "11:30am",
      title: "Break",
      details: ""
    },
    {
      time: "11:45am",
      title: (
        <>
          <span style={{ display: 'block', marginBottom: '-10px' }}>
            Inclusive Innovation with Industry and Communities
          </span>
          <span style={{ fontSize: "0.6em", display: 'block', marginTop: '0', paddingTop: '0' }}>
            Moderated by Dr. Leigh Bernacchi, Executive Director, VISTA F3 Innovate Panelists
          </span>
        </>
      ),
      details: (
        " - Dr. Luca Brillante, Assistant Professor of Viticulture, Bronco Wine Co. Chair in Viticulture, Fresno State \n" +
        " - Dr. Reza Ehsani, Professor of Mechanical Engineering, UC Merced \n" +
        " - Dr. Tea Lempiala, Assistant Professor of Management, UC Merced "
      ),
    },
    {
      time: "12:25pm",
      title: "Lunch buffet and networking ",
      details: ""
    },
    {
      time: "1:10pm",
      title: "Keynote Speaker: Brad Abraham, Verdant Robotics",
      details: "Current issues in ag tech innovation"
    },
    {
      time: "2:30pm",
      title: "Pitches from Challenge Grants and GSRs poster presenters",
      details: "Poster session to follow\nNetworking and Happy Hour"
    },
    {
      time: "3:00pm",
      title: "Conclude formal program",
      details: ""
    },
  ];

  return (
    <>
      <Helmet>
        <title>F3 Innovate Showcase</title>
        <meta name="description" content="upcoming innovate event" />
        <link rel="canonical" href="/InnovateShowcase" />
      </Helmet>

      <Box className="page">
        <Navbar />
        <Container>
          <Box my={4}>
            <Typography variant="h2" component="h1" align="center" className="page-title" gutterBottom>
              F3 Innovate Showcase
            </Typography>
            <Typography variant="h5" component="h2" align="center" gutterBottom>
              September 1, 2023, 10a-3p
            </Typography>
            <Typography variant="h6" component="h3" align="center" gutterBottom>
              UC Merced Conference Center Ballroom
            </Typography>
            <Typography variant="body1" align="center">
              Complimentary parking reserved under F3 Innovate in Bellevue Gold Lot: <Link href="https://goo.gl/maps/UbEaRzQiczdD7DD6A">Google Map</Link>
            </Typography>
            <Typography variant="body1" align="center">
              Coach transportation from Fresno State Available: Contact Dean Ram Nunna
            </Typography>
            <Typography variant="body1" align="center">
              F3 Innovate is the nation’s hub for climate-smart agrifood technology and engineering.
            </Typography>

            <Box mt={4}>
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
                          <Typography variant="body2">
                            {item.details.split('\n').map((line, i) => <p key={i}>{line}</p>)}
                          </Typography>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Box>  
            </Box>       
          </Container>
        <Footer />
      </Box>
    </>
  );
};

export default InnovateShowcase;
