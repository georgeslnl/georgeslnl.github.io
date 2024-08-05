import React from 'react';
import CV from '../assets/Georges_Linel_CV.pdf';

const CVDownloadButton = ({ fileName }) => {
  return (
    <a
      href={CV}
      download={fileName}
      className="w-fit p-4 text-background-50 text-lg rounded-lg bg-primary-500 hover:bg-primary-300 hover:font-bold hover:text-background-50 transition-all"
    >
      Download CV
    </a>
  );
};

export default CVDownloadButton;