import './ChallengeGrants.css'

import Navbar from '../navbar/Navbar.js'
import GrantCard from './grant-card/GrantCard'
import { Typography } from '@mui/material';

const ChallengeGrants = () => {

    return(
        <div>
            <Navbar />
            
            <Typography
                variant='h2'
                sx={{
                    textAlign: 'center',
                    marginTop: '6rem'
                }}
            >
                Challenge Grants
            </Typography>

            <GrantCard />
            <GrantCard />
            <GrantCard />
            <GrantCard />
        </div>
    );
}

export default ChallengeGrants