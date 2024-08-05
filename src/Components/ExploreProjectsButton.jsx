import React from "react";
import { Link } from "react-router-dom";
import { VscArrowRight } from "react-icons/vsc";


export default function ExploreProjectsButton() {
    return (
        <div className="w-fit hover:rounded-lg p-2 hover:bg-gradient-to-r from-primary-500 to-secondary-500 text-primary-500 hover:text-background-50">
        <Link to="/projects" className="hover:text-background-50">
        <div className="flex justify-center items-center gap-2 hover:text-background-50">
            <p className='text-center text-2xl'>Explore Projects </p>
            <VscArrowRight className="text-2xl"/>
        </div>
        </Link>
        </div>
    );
}
