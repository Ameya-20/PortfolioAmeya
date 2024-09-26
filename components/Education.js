import React from "react";
import data from "../data/portfolio.json";

const Education = () => {
  return (
    <div className="project-slider-section" style={{ textAlign: "center", paddingTop: "10px" }}>
      <div style={{ fontSize: "250%" }}>
        <h2 style={{ marginTop: "30px" }}>Education</h2>      
        <img
          src="/images/underline.png"
          alt="underline"
          style={{ width: "100px", height: "auto", margin: "0 auto", paddingBottom: "10px"  }}
        />
      </div>
    

      <div className="flex flex-wrap justify-center gap-10 mt-10">
        {/* Education Card 1 */}
        <div className="flex flex-col items-center p-5 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
          <img
            className="h-60 w-70 object-cover hover:scale-110"
            src="https://1000logos.net/wp-content/uploads/2022/07/University-of-Minnesota-Emblem.png"
            style={{ height:"250px" }}
            alt="University of Minnesota Logo"
          />
          <div className="text-center mt-4">
          <h1 className="mt-5 text-2xl font-medium">University of Minnesota, Twin Cities</h1>
            <p className="text-lg">Master of Science in Business Analytics</p>
            <p className="text-md text-gray-400 dark:text-gray-400">Core Subjects</p>
            <p className="text-md text-gray-500 dark:text-gray-400">AI/Machine Learning, Big Data Analytics, Business Strategy</p>
          </div>
        </div>

        {/* Education Card 2 */}
        <div className="flex flex-col items-center p-5 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
          <img
            className="h-60 w-70 object-cover hover:scale-110"
            src="https://kjsce-old.somaiya.edu.in/media/images/cropadd0c5d9-6273-4047-898e-61a0079134b6.jpg"
            alt="K.J. Somaiya College of Engineering Logo"
            style={{ height:"250px" }}
          />
          <div className="text-center mt-4">
          <h1 className="mt-5 text-2xl font-medium">K.J Somaiya College of Engineering, Mumbai</h1>
          <p className="text-lg">Bachelor of Technology in Information Technology</p>
          <p className="text-md text-gray-400 dark:text-gray-400">Core Subjects</p>
          <p className="text-md text-gray-500 dark:text-gray-400">Applied Maths, Sofware Development, Project Management</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
