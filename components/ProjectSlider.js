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
    <div className="project-slider-section mt-10">
      <h2 className="text-xl tablet:text-4xl laptop:text-4xl laptopl:text-4xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5 ">
      Some of my Projects
      </h2>
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
/**
 <WorkCard
                key={project.id}
                img={project.imageSrc}
                name={project.title}
                description={project.description}
                onClick={() => window.open(project.url)}
              />
 
 {sliderProjects.map((item, index) => (
        
        <div key={index} className={styles.timelineCard} style={{ height: "300px", width: "280px" }}>
            
            <img></img>
            <h2 className="text-xl font-bold">{item.role}</h2>
            <p className="text-md mt-2">{item.company}</p>
            <p className="text-sm mt-1">{item.date}</p>
        
        </div>
        
        ))}
  
              */