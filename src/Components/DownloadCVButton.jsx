import React from 'react';
import CV from '../assets/Georges_Linel_CV.pdf';
import { AiFillFilePdf } from "react-icons/ai";


const CVDownloadButton = ({ fileName }) => {
  return (
    <div className='flex justify-center items-center gap-2 w-fit p-4 text-background-50 text-lg rounded-lg bg-primary-500 hover:bg-primary-300 cursor-pointer hover:text-background-50 transition-all'>
        <AiFillFilePdf className="text-lg"/>
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