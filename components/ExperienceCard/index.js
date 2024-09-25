import React from "react";

const ExperienceCard = ({ img, name, description, onClick }) => {
  return (
    <div
      className="overflow-hidden rounded-lg p-2 laptop:p-4 first:ml-0 link"
      style={{
        width: "400px",  // Set uniform width
        minHeight: "500px", // Set uniform height
        display: "flex", 
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={onClick}
    >
      {/* Image container */}
      <div
        className="relative rounded-lg overflow-hidden transition-all ease-out duration-300"
        style={{ height: "300px", width: "300px" }}  // Set uniform image size
      >
        <img
          alt={name}
          className="h-full w-full object-contain hover:scale-110 transition-all ease-out duration-300"
          src={img}
        />
      </div>

      {/* Title and Description */}
      <h1 className="mt-5 text-xl font-medium" style={{ textAlign: "center" }}>
        {name ? name : "Project Name"}
      </h1>
      <h2 className="text-xl opacity-50" style={{ textAlign: "center" }}>
        {description ? description : "Description"}
      </h2>
    </div>
  );
};

export default ExperienceCard;
