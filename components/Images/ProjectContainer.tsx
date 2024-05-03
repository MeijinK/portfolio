import React from "react";
import Image from "next/image";
const ProjectContainer = (props) => {
  return (
    <>
      {props.dynamic ? (
        <div className="w-full h-[480px] overflow-hidden shadow-lg rounded-lg cursor-pointer group ">
          <img
            src={props.src}
            alt={props.alt}
            className={`object-cover translate-y-0 group-hover:-translate-y-[76%] transition-transform duration-[4s]`}
          />
        </div>
      ) : (
        <div className="w-full h-auto overflow-hidden shadow-lg rounded-lg cursor-pointer group ">
          <img
            src={props.src}
            alt={props.alt}
            className={`object-contain h-full`}
          />
        </div>
      )}
    </>
  );
};

export default ProjectContainer;
