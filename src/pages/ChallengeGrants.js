import Navbar from '../components/Navbar'
import GrantCard from '../components/GrantCard'
import { Typography } from '@mui/material'
import Papa from 'papaparse'
import { useEffect, useState } from 'react'

import './ChallengeGrants.css'

const ChallengeGrants = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('../../../assets/sheets/recipriants.csv');
            const csvData = await response.text();
            const parsedData = Papa.parse(csvData, { header: true }).data;
            setData(parsedData);
        }

        fetchData()

    }, [])

    console.log(data)

    const content = {
        proposal: "Development of a smart water pre-treatment system for controlled environment agriculture using micro-plasma and AI machines",
        team: ["Sankha Banerjee", "Venkattraman Ayyaswamy", "Gerardo Diaz"],
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos  sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias error harum maxime adipisci amet laborum. Perspiciatis  minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit  quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur  fugiat, temporibus enim commodi iusto libero magni deleniti quod quam  consequuntur! Commodi minima excepturi repudiandae velit hic maxime doloremque. Quaerat provident commodi consectetur veniam similique ad  earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo  fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore  suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam  totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam  quasi aliquam eligendi, placeat qui corporis",
        imageName: "Sankja Banerjee.jpeg"
    }

    return (
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



            <GrantCard content={content} />

        </div>
    );
}

export default ChallengeGrants