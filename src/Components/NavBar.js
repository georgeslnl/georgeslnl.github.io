import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className='flex justify-between gap-2'>
      <button class='px-2 py-0.5 md:text-xl hover:bg-primary-500 hover:rounded-lg hover:text-background-50 active:bg-primary-200 transition-all'><Link to="/about">About</Link></button>
      <button class='px-2 py-0.5 md:text-xl hover:bg-primary-500 hover:rounded-lg hover:text-background-50 active:bg-primary-200 transition-all'><Link to="/projects">Projects</Link></button>
      <button class='px-2 py-0.5 md:text-xl hover:bg-primary-500 hover:rounded-lg hover:text-background-50 active:bg-primary-200 transition-all'><Link to="/contact">Contact</Link></button>
    </div>
  );
}
