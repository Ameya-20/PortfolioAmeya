import React from "react";
import styles from "../styles/Journey.module.css";
import Slider from 'react-slick';

const Skills = () => {
  const skills = [
    { name: "SQL", level: "Experienced" },
    { name: "Python", level: "Experienced" },
    { name: "Microsoft Excel", level: "Experienced" },
    { name: "Power BI", level: "Intermediate" },
    { name: "Tableau", level: "Experienced" },
    { name: "Agile", level: "Experienced" },
    { name: "Java", level: "Experienced" },
    { name: "Springboot", level: "Experienced" },
    { name: "React.js", level: "Experienced" },
    { name: ".Net", level: "Intermediate" },
    { name: "Data Structures", level: "Experienced" },
    { name: "Algorithms", level: "Experienced" },
    { name: "Machine Learning", level: "Intermediate" },
    { name: "Exploratory Analytics", level: "Intermediate" },
    { name: "Predictive Modelling", level: "Intermediate" },
    { name: "Statistical Analysis", level: "Intermediate" },
    { name: "A/B Testing", level: "Intermediate" },
    { name: "AWS", level: "Intermediate" },
    { name: "R", level: "Intermediate" },

    ];
    const settings = {
      dots: true,
      infinite: true,
      speed: 700,
      slidesToShow: 6, // Show 3 slides on large screens
      slidesToScroll: 1,
      autoplay: true, // Enables autoplay
      autoplaySpeed: 10, // Speed of autoplay in milliseconds
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
    <div className="skills-section mt-10 laptop:mt-20">
      <div style={{ fontSize: "250%" }}>
        <h2 style={{ textAlign:"center" }}>Skills</h2>      
        <img
          src="/images/underline.png"
          alt="underline"
          style={{ marginBottom: "20px",width: "100px", height: "auto", margin: "0 auto" , paddingBottom: "10px" }}
        />
      </div>
      <Slider {...settings} className="slider-container"
        style={{textAlign:"center", marginTop:"20px" }}
      >

      {skills.map((skill, index) => (
          <div key={index} className="relative rounded-lg overflow-hidden transition-all ease-out duration-300 h-48 mob:h-auto"
          style={{textAlign:"center", marginTop:"30px" }}>
            <span className="text-3xl mb-4 text-white flex justify-center items-center"  style={{textAlign:"center" }}>✔️</span>
            <h2 className="flex justify-center items-center">{skill.name}</h2>
            <p className="text-sm text-gray-500 flex justify-center items-center">{skill.level}</p>
            </div>
          ))}

      </Slider>
      
    </div>
  );
};

export default Skills;

/**
 * <div className="mt-5 grid grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-5 gap-6 p-5 rounded-lg bg-gradient-to-b from-gray-900 to-gray-800 shadow-lg">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={styles.timelineCard}
          >
            <span className="text-3xl mb-4 text-white">✔️</span>
            <h2 className="text-lg font-semibold text-white">
              {skill.name}
            </h2>
            <p className="text-sm text-gray-300">
              {skill.level}
            </p>
          </div>
        ))}
      </div>

      <div className={styles.scrollContainer}
        style={{height:"210px"}}>
          {skills.map((skill, index) => (
          <div key={index} className={styles.timelineCard}
          style={{ width: "250px", textAlign:"center" }}>
            <span className="text-3xl mb-4 text-white">✔️</span>
            <h2 className="text-lg font-semibold text-white">{skill.name}</h2>
            <p className="text-sm text-gray-300">{skill.level}</p>
            </div>
          ))}
      </div>
 */