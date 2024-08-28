import React from "react";

const Skills = () => {
  const skills = [
    { name: "SQL", level: "Experienced" },
    { name: "Python", level: "Experienced" },
    { name: "Microsoft Excel", level: "Experienced" },
    { name: "Power BI", level: "Experienced" },
    { name: "Tableau", level: "Experienced" },
    { name: "Exploratory Analytics", level: "Intermediate" },
    { name: "Predictive Modelling", level: "Intermediate" },
    { name: "Agile", level: "Experienced" },
    { name: "Statistical Analysis", level: "Intermediate" },
    { name: "A/B Testing", level: "Intermediate" },
    { name: "JIRA", level: "Experienced" },
    { name: "AWS", level: "Intermediate" },
    { name: "ML Algorithms", level: "Intermediate" },
    { name: "Java", level: "Experienced" },
    { name: "R", level: "Intermediate" },
    ];

  return (
    <div className="skills-section mt-10 laptop:mt-20 p-5">
      <h2 className="text-xl tablet:text-4xl laptop:text-4xl laptopl:text-4xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5 ">
      Skills
      </h2>
      <div className="mt-5 grid grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-5 gap-6 p-5 rounded-lg bg-gradient-to-b from-gray-900 to-gray-800 shadow-lg">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="skill-card flex flex-col items-center p-4 bg-gradient-to-b from-[#4B2839] to-[#0B0307] rounded-lg shadow-md hover:scale-105 transform transition-all duration-300"
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
    </div>
  );
};

export default Skills;
