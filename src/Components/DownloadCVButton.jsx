import React from 'react';
import CV from '../assets/Georges_Linel_CV.pdf';
import { MdDownload } from "react-icons/md";


const CVDownloadButton = ({ fileName }) => {
  return (
    <div className='flex justify-center lg:row-start-1 lg:col-end-7 lg:col-span-1 items-center gap-1 mx-auto w-1/2 lg:w-full p-2 text-text-900 text-lg border rounded-lg bg-primary-300 hover:bg-primary-400 hover:scale-110 cursor-pointer animate-fadeIn animate-slower transition-all duration-500'>
      <MdDownload className="text-text-900 text-lg" />
      <a
        href={CV}
        download={fileName}
      >
        CV
      </a>
    </div>
  );
};

export default CVDownloadButton;