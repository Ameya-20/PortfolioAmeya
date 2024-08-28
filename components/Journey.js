import React from "react";

import styles from "../styles/Journey.module.css";

const Journey = () => {
  const timeline = [
    {
      role: "IT Lead",
      company: "Efarm - K.J. Somaiya College of Engineering",
      date: "Jan 2019 - Feb 2019",
    },
    {
      role: "Analytics and Development Lead",
      company: "Starspark, Mumbai",
      date: "Jan 2022 - May 2021",
    },
    {
      role: "Software Engineering Intern - Go language",
      company: "Swabhav Techlabs, Mumbai",
      date: "March 2022 - May 2021",
    },
    {
      role: "Associate Consultant (Analyst)",
      company: "Oracle, Mumbai",
      date: "August 2021 - May 2023",
    },
    {
      role: "Analytics Lead",
      company: "Carlson Analytics Lab, Minneapolis, MN",
      date: "July 2023 - May 2024",
    },
  ];

  return (
    <div className="mt-10 laptop:mt-20 p-5">
      <h1 className="text-2xl tablet:text-4xl font-bold mb-8">
        My Professional Journey
      </h1>
      <div className={styles.scrollContainer}>
  {timeline.map((item, index) => (
    <div key={index} className={styles.timelineCard}>
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
