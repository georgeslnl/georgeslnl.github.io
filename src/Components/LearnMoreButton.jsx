import React from "react";
import { Link } from "react-router-dom";
import { VscArrowRight } from "react-icons/vsc";


export default function LearnMoreButton() {
    return (
        <div className="w-fit hover:rounded-lg p-2 hover:bg-gradient-to-r from-primary-500 to-secondary-500 text-primary-500 hover:text-background-50">
        <Link to="/about" className="hover:text-background-50">
        <div className="flex justify-center items-center gap-2 hover:text-background-50">
            <p className='text-center text-xl md:text-2xl'>Learn More</p>
            <VscArrowRight className="text-2xl"/>
        </div>
        </Link>
        </div>
    );
}
