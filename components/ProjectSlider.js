import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import Link from 'next/link';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import data from '../data/portfolio.json';
import styles from "../styles/Journey.module.css";
import WorkCard from "../components/WorkCard";

const ProjectSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 slides on large screens
    slidesToScroll: 1,
    autoplay: true, // Enables autoplay
    autoplaySpeed: 2000, // Speed of autoplay in milliseconds
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1, // Show 2 slides on tablets
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1, // Show 1 slide on mobile
        }
      }
    ]
  };

  return (
    <div className="project-slider-section mt-10"style={{ paddingTop: "20px"}}>
      <div style={{ fontSize: "250%" }}>
        <h2 style={{ marginBottom: "0px", textAlign:"center" }}>Some Projects</h2>      
        <img
          src="/images/underline.png"
          alt="underline"
          style={{ width: "100px", height: "auto", margin: "0 auto", paddingBottom: "10px" }}
        />
      </div>
    
      <Slider {...settings} className="slider-container">

      {data.projects.map((project) => (
              <WorkCard
                key={project.id}
                img={project.imageSrc}
                name={project.title}
                description={project.description}
                onClick={() => window.open(project.url)}
              />
            ))}

      </Slider>
    </div>
  );
};

export default ProjectSlider;