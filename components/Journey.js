import React from "react";
import Slider from 'react-slick';
import Image from 'next/image';
import Link from 'next/link';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

import styles from "../styles/Journey.module.css";


const Journey = () => {
  const timeline = [
    {
      role: "Analytics Lead",
      company: "Carlson Analytics Lab, Minneapolis, MN",
      date: "July 2023 - May 2024",
    },
    {
      role: "Associate Consultant (Analyst)",
      company: "Oracle, Mumbai",
      date: "August 2021 - May 2023",
    },
    {
      role: "Software Engineer - Golang",
      company: "Swabhav Techlabs, Mumbai",
      date: "March 2022 - May 2021",
    },
    {
      role: "Analytics and Development Lead",
      company: "Starspark, Mumbai",
      date: "June 2020 - May 2021",
    },
    {
      role: "IT Lead",
      company: "Efarm - K.J. Somaiya College of Engineering",
      date: "January 2019 - March 2019",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 2, // Show 3 slides on large screens
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
    <div className="project-slider-section">
      <h2 className="text-xl tablet:text-4xl laptop:text-4xl laptopl:text-4xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5 ">
      Professional Journey
      </h2>      
      <div className={styles.scrollContainer}>
          {timeline.map((item, index) => (
          <div key={index} className={styles.timelineCard}
          style={{ height: "200px", width: "260px" }}>
            <h2 className="text-xl font-bold">{item.role}</h2>
            <p className="text-md mt-2">{item.company}</p>
            <p className="text-sm mt-1">{item.date}</p>
            </div>
          ))}
      </div>
      
    </div>
  );
};

export default Journey;
/**
 * <div className={styles.scrollContainer}>
          {timeline.map((item, index) => (
          <div key={index} className={styles.timelineCard}
          style={{ height: "200px", width: "350px" }}>
            <h2 className="text-xl font-bold">{item.role}</h2>
            <p className="text-md mt-2">{item.company}</p>
            <p className="text-sm mt-1">{item.date}</p>
            </div>
          ))}
      </div>
 */