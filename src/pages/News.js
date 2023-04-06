import { Typography } from '@mui/material';

import Navbar from '../components/Navbar.js'
import NewsCard from '../components/NewsCard.js'
import NewsSearchBar from '../components/NewsSearchBar.js'
import Footer from '../components/Footer.js'

const News = () => {

    const content1 = {
        imageName: 'tomatoes.jpg',
        heading: 'Smart Irrigation Systems',
        summary: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        tags: ['tomatoes', 'water', 'industry', 'social']
    }

    const content2 = {
        imageName: 'vineyards.jpg',
        heading: 'Passion Agriculture',
        summary: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        tags: ['vineyards', 'food', 'San Joaquin']
    }

    const content3 = {
        imageName: 'drone.jpg',
        heading: 'The Future of Farming',
        summary: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        tags: ['innovation', 'tech', 'future']
    }
    
    return(
        <div>
            <Navbar />
            <Typography
                variant='h2'
                sx={{
                    textAlign: 'center',
                    marginTop: '3.5rem'
                }}
            >
                News
            </Typography>

            <NewsSearchBar />

            
            <div className='news-card-container'>
                <NewsCard content={ content1 }/>
                <NewsCard content={ content2 }/>
                <NewsCard content={ content3 }/>
            </div>

            <Footer />
        </div>
    );
}

export default News