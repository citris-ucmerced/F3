
import Navbar from '../components/Navbar'
import { Typography } from '@mui/material';
import { Container } from '@mui/system';
import PeopleCard from '../components/PeopleCard';

const People = () => {
    return(
        <div>
            <Navbar />
            <Container>
                <Typography component="h1">
                    Our Team
                </Typography>
                <PeopleCard/>
            </Container>
            
        </div>
    );
}

export default People;