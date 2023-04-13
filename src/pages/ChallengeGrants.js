import Navbar from '../components/Navbar'
import GrantCard from '../components/GrantCard'
import Footer from '../components/Footer.js'

import { Typography } from '@mui/material'
import Papa from 'papaparse'
import { useEffect, useState } from 'react'

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

    const content1 = {
        proposal: "Development of a smart water pre-treatment system for controlled environment agriculture using micro-plasma and AI machines",
        team: ["Sankha Banerjee", "Venkattraman Ayyaswamy", "Gerardo Diaz"],
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos  sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias error harum maxime adipisci amet laborum. Perspiciatis  minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit  quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur  fugiat, temporibus enim commodi iusto libero magni deleniti quod quam  consequuntur! Commodi minima excepturi repudiandae velit hic maxime doloremque. Quaerat provident commodi consectetur veniam similique ad  earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo  fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore  suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam  totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam  quasi aliquam eligendi, placeat qui corporis",
        imageName: "water_treatment.jpg"
    }

    const content2 = {
        proposal: "Partnership to advance robotics implementations in viticulture systems",
        team: ["Luca Brillante", "Stefano Carpin"],
        description: "Autonomous ground robots (aka UGV) offer the possibility to collect heterogeneous data at scalefor a variety of high-value perennial crops (including, but not limited to grapes, nuts, stone fruit).This approach is complementary to remote sensing as robots operating in the vineyard/orchard canperform proximal measurements that cannot be done remotely. Notwithstanding these advantages,a systematic integration of AI and robotic technologies to the field of viticulture is still missing.The short term objective of this project is to create the basis for a synergy between the roboticslab at UC Merced led by Prof. Stefano Carpin (Co-PI) and the precision viticulture lab at CSU Fresnoled by Prof. Luca Brillante (PI). More precisely, the objective is to equip CSU Fresno with state of theart robotic equipment mirroring the system developed through the years by the robotics group atUC Merced and to then use this system to collect data relevant for viticulture research beingcurrently performed at CSU Fresno.The longer term objective of this seed project is to lay the foundation to a long lastingcollaboration that will then be leveraged to target federal and state funding opportunities in thearea of precision viticulture, with a specific aim at sustainable practices. This partnership will bringtogether scholars with proven expertise in robotics/AI and viticulture, respective point of force in thetwo participating institutions. Hence the collaboration will lead to a new research consortium thatwill not have the same impact unless the two institutions come together.",
        imageName: "viticulture_robot.png"
    }

    const content3 = {
        proposal: "Non-invasive Hybrid Sensing of Key Chemical Compositions of Grapes",
        team: ["Ricardo de Castro", "Luca Brillante", "Reza Ehsani"],
        description: "This project aims to develop an optical-based sensing system for monitoring quality factors ofgrapes in the field during the growing season. We will focus on monitoring key chemical substances,such as sugar, acidity and anthocyanins, which affect aroma and color of wines and play a key role inthe ripening of grapes. A non-invasive hybrid sensing approach will be developed, which combinestwo types of optical sensing devices (near-infrared and Raman spectroscopy) together with machine-learning models to improve the estimation of key chemical composition of grapes. Our approach willbe experimentally validated at the vineyard of the CSU Fresno, using samples from 70 differentvarieties of table and wine grapes.The proposed hybrid sensing will provide an important source of information for enabling ultra-precision agricultural practices in vineyards, where each plant receives a precise amount of inputs(water, pesticides, nutrients, etc.) based on the data provided by our system. This sensing systemcan also be integrated in future robotic data scouts to autonomously perform large-scale mapping ofgrape quality in real-time.",
        imageName: "grapes.jpg"
    }

    return (
        <div>
            <Navbar />

            <Typography
                variant='h2'
                sx={{
                    textAlign: 'center',
                    marginTop: '3.5rem'
                }}
            >
                Challenge Grants
            </Typography>

            <GrantCard content={content1} />
            <GrantCard content={content2} />
            <GrantCard content={content3} />

            <Footer />
        </div>
    );
}

export default ChallengeGrants