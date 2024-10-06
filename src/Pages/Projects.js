import React, { useState, useEffect } from "react";
import ProjectCard from "../Components/ProjectCard";
import ProjectCardSimplified from "../Components/ProjectCardSimplified";
import { IoArrowForwardSharp, IoArrowBackSharp } from "react-icons/io5";



const Projects = ({ projects }) => {
  return (
    <div className="w-screen px-8 flex flex-col">
      <h1 className="font-extrabold text-5xl xl:text-8xl bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent w-fit pb-1 xl:pb-2 my-2">
        Projects
      </h1>
    <div className="container m-auto p-4 w-11/12">
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 xl:gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="hover:scale-110 cursor-pointer transition-all duration-300"
          >
            <ProjectCardSimplified project={project} />
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, projects.length - 1));
//   };

//   const handlePrevious = () => {
//     setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
//   };

//   // useEffect with listener for keyboard events
//     useEffect(() => {
//         const handleKeyPress = (e) => {
//         if (e.key === "ArrowRight") {
//             handleNext();
//         } else if (e.key === "ArrowLeft") {
//             handlePrevious();
//         }
//         };

//         window.addEventListener("keydown", handleKeyPress);

//         return () => {
//         window.removeEventListener("keydown", handleKeyPress);
//         };
//     }, []);

//   return (
//     <div className="w-full px-4 xl:px-6 flex flex-col">
//       <h1 className="font-extrabold text-5xl xl:text-8xl bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent w-fit pb-1 xl:pb-2 mt-10 mb-6">
//         Projects
//       </h1>
//       <div className="flex justify-center items-start">
//           {currentIndex > 0 && (
//             <button
//               onClick={handlePrevious}
//               className="text-base xl:text-2xl absolute left-4 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-primary-500 to-secondary-500  text-white rounded-full p-2"
//               aria-label="Previous project"
//             >
//               <IoArrowBackSharp/>
//             </button>
//           )}
//           <div className="w-3/4 mb-8 xl:w-full max-w-lg xl:max-w-3xl mx-auto">
//             <ProjectCard project={projects[currentIndex]} />
//           </div>
//           {currentIndex < projects.length - 1 && (
//             <button
//               onClick={handleNext}
//               className="text-base xl:text-2xl absolute right-4 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-full p-2"
//               aria-label="Next project"
//             >
//               <IoArrowForwardSharp className="" />
//             </button>
//           )}
//         </div>
//       </div>
//   );
// };

export default Projects;
