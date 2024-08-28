import React, { useState, useEffect } from "react";

const ProjectResume = ({ dates, type, position, bullets }) => {
  // Ensure that `bullets` is an array; if it's not, initialize it as an empty array
  const [bulletsLocal, setBulletsLocal] = useState(Array.isArray(bullets) ? bullets : []);

  // Optional: Use useEffect to update bulletsLocal if bullets prop changes
  useEffect(() => {
    if (Array.isArray(bullets)) {
      setBulletsLocal(bullets);
    }
  }, [bullets]);

  return (
    <div className="mt-5 w-full flex mob:flex-col desktop:flex-row justify-between">
      <div className="text-lg w-2/5">
        <h2>{dates}</h2>
        <h3 className="text-sm opacity-50">{type}</h3>
      </div>
      <div className="w-3/5">
        <h2 className="text-lg font-bold">{position}</h2>
        {bulletsLocal.length > 0 ? (
          <ul className="list-disc">
            {bulletsLocal.map((bullet, index) => (
              <li key={index} className="text-sm my-1 opacity-70">
                {bullet}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm opacity-70">No details available</p>
        )}
      </div>
    </div>
  );
};

export default ProjectResume;

