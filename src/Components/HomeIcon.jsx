import React from "react";
import { Link } from "react-router-dom";
import { MdHome, MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

export default function TopLeftIcons({ darkMode, onClick }) {
    return (
        <div className="flex gap-2 items-center">
            <Link to="/" aria-label="Home">
                <MdHome className="text-text text-text-950 text-3xl hover:text-primary-500" />
            </Link>
            {darkMode ? (
                <button
                    onClick={onClick}
                    aria-label="Switch to light mode"
                    className="cursor-pointer text-text text-text-950 text-2xl hover:text-primary-500"
                >
                    <MdOutlineDarkMode />
                </button>
            ) : (
                <button
                    onClick={onClick}
                    aria-label="Switch to dark mode"
                    className="cursor-pointer text-text text-text-950 text-2xl hover:text-primary-500"
                >
                    <MdOutlineLightMode />
                </button>
            )}
        </div>
    );
}