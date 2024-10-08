import React from "react";
import Slider from 'react-slick';
import Image from 'next/image';
import Link from 'next/link';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import ExperienceCard from "./ExperienceCard";
import styles from "../styles/Journey.module.css";
import data from '../data/portfolio.json';


const Journey = () => {
  return (
    <div className="project-slider-section" style={{ textAlign: "center", paddingTop: "10px" }}>
      <div style={{ fontSize: "250%" }}>
        <h2 style={{ marginTop: "0px" }}>Experience</h2>      
        <img
          src="/images/underline.png"
          alt="underline"
          style={{ width: "100px", height: "auto", margin: "0 auto", paddingBottom: "10px"  }}
        />
      </div>
    
      
      <div className={styles.scrollContainer}>

      {data.experience.map((experience) => (
              <ExperienceCard
                key={experience.id}
                img={experience.imageSrc}
                name={experience.title}
                description={experience.description}
                onClick={() => window.open(experience.url)}
              />
            ))}  
      </div>
      
    </div>
  );
};

export default Journey;
