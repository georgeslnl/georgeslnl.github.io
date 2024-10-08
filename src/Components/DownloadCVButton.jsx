import React from 'react';
import CV from '../assets/Georges_Linel_CV.pdf';
import { AiFillFilePdf } from "react-icons/ai";


const CVDownloadButton = ({ fileName }) => {
  return (
    <div className='flex justify-center items-center gap-2 w-fit p-4 text-background-50 text-lg rounded-lg bg-gradient-to-r from-primary-500 to-secondary-500 hover:scale-110 cursor-pointer hover:text-background-50 transition-all duration-300'>
        {/* <AiFillFilePdf className="text-lg"/> */}
    <a
      href={CV}
      download={fileName}
      className=""
    >   
      Download CV 
    </a>
    </div>
  );
};

export default CVDownloadButton;