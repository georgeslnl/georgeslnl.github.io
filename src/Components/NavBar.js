import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="flex justify-between gap-2">
      <Link
        to="/projects"
        className="px-2 py-0.5 text-text-950 md:text-xl hover:underline hover:text-primary-500"
      >
        Projects
      </Link>
      <Link
        to="/about"
        className="px-2 py-0.5 text-text-950 md:text-xl hover:underline hover:text-primary-500"
      >
        About Me
      </Link>
    </div>
  );
}