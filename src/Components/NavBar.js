import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="flex justify-between gap-2">
      <Link
        to="/projects"
        className="px-2 py-0.5 text-text-950 md:text-xl hover:bg-primary-500 hover:rounded-lg hover:text-background-50 active:bg-primary-200 transition-all"
      >
        Projects
      </Link>
      <Link
        to="/about"
        className="px-2 py-0.5 text-text-950 md:text-xl hover:bg-primary-500 hover:rounded-lg hover:text-background-50 active:bg-primary-200 transition-all"
      >
        About Me
      </Link>
    </div>
  );
}