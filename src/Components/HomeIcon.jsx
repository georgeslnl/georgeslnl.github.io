import { MdHome, MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

import { React } from "react";
import { Link } from "react-router-dom";

export default function TopRightIcons({darkMode, onClick}) {
    return (
        <div className="flex gap-2 items-center">
        <Link to="/">
            <MdHome className="text-text text-text-950 text-3xl hover:text-primary-500" />
        </Link>
        {darkMode ? ( 
            <MdOutlineDarkMode className="cursor-pointer text-text text-text-950 text-2xl hover:text-primary-500" onClick={onClick} />
        ) : (
            <MdOutlineLightMode className="cursor-pointer text-text text-text-950 text-2xl hover:text-primary-500" onClick={onClick} />
        )}
        </div>
    );
}
