import Navbar from '../components/Navbar'
import GrantCard from '../components/GrantCard'
import Footer from '../components/Footer.js'

import { Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import recipientsCSV from '../assets/sheets/recipients.csv'
import readCSV from '../utils/CSVReader'

const ChallengeGrants = () => {

    const [data, setData] = useState([])
    const [grantCards, setGrantCards] = useState();

    useEffect(() => {
        readCSV(recipientsCSV, setData);
    }, []);

    useEffect(()=>{
        const grantCardUI = [];
        data.forEach((content)=>{
            const team = content.team.split(",").map((item) => item.trim());
            grantCardUI.push(
              <GrantCard
                proposal={content.proposal}
                description={content.description}
                imageName={content.imageName}
                team={team}
              />
            );
        })
        console.log("dchoi",grantCardUI);
        setGrantCards(grantCardUI);
    }, [data])

    return (
        <div className='Page'>
            <Navbar />

            <Typography
                variant='h2'
                className='PageTitle'
            >
                Challenge Grants
            </Typography>

            {grantCards}

            <Footer />
        </div>
    );
}

export default ChallengeGrants