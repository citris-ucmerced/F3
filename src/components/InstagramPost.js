import React, { useState, useEffect } from "react";
import { Box} from "@mui/material";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./styles/InstagramPost.css"; 
import profile_picture from "../assets/images/F3_Logo.png";

function InstagramPosts() {
  const [posts, setPosts] = useState([]);
  const [profileInfo, setProfileInfo] = useState({});

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await axios.get("http://f3.ucmerced.edu/api/getRecentPosts");
        setPosts(response.data.data);
        const profileResponse = await axios.get("http://f3.ucmerced.edu/api/getProfileInfo");
        setProfileInfo(profileResponse.data);
      } catch (error) {
        console.error("Error fetching posts", error);
      }
    }

    fetchPosts();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };



  return (
    <div className="instagram-feed">

      <Slider {...settings}>
        
        {posts.map((post) => (
          <Box key={post.id} className="instagram-post">
            <div className="post-header">
    
              <img src={profile_picture} alt="Profile" className="profile-picture" />
              <a href={`https://www.instagram.com/f3innovate/`} target="_blank" rel="noopener noreferrer" className="username-link">
                <span className="username">{profileInfo.username}</span>
              </a>
            </div>
            <Box>
            <img src={post.media_url} alt={post.caption} className="post-image" />
            </Box>
            <p className="post-caption">{post.caption}</p>
          </Box>
        ))}
        
      </Slider>
    </div>
  );
}

export default InstagramPosts;
