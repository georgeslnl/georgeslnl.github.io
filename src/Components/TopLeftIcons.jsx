// import React, { useState, useRef, useEffect } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { MdHome, MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
// import { IoMail } from "react-icons/io5";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function TopLeftIcons({ darkMode, onClick }) {
    // const [showEmail, setShowEmail] = useState(false);
    // const emailRef = useRef(null);

    // const toggleEmail = () => {
    //     setShowEmail(!showEmail);
    // };

    // useEffect(() => {
    //     const handleClickOutside = (event) => {
    //         if (emailRef.current && !emailRef.current.contains(event.target)) {
    //             setShowEmail(false);
    //         }
    //     };

    //     document.addEventListener("mousedown", handleClickOutside);
    //     return () => {
    //         document.removeEventListener("mousedown", handleClickOutside);
    //     };
    // }, []);

    return (
        <div className="flex flex-wrap gap-3 items-center">
            <Link to="/" aria-label="Home">
                <MdHome className="text-text text-text-950 text-2xl md:text-3xl hover:text-primary-500" />
            </Link>
            {darkMode ? (
                <button
                    onClick={onClick}
                    aria-label="Switch to light mode"
                    className="cursor-pointer text-text text-text-950 text-xl md:text-2xl hover:text-primary-500"
                >
                    <MdOutlineDarkMode />
                </button>
            ) : (
                <button
                    onClick={onClick}
                    aria-label="Switch to dark mode"
                    className="cursor-pointer text-text text-text-950 text-xl md:text-2xl hover:text-primary-500"
                >
                    <MdOutlineLightMode />
                </button>
            )}
            <a href="https://www.linkedin.com/in/georgeslinel/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin className="text-text-900 text-xl lg:text-3xl hover:text-primary-500" />
            </a>
            <a href="https://github.com/georgeslnl" target="_blank" rel="noopener noreferrer" aria-label="Github">
                <FaGithub className="text-text-900 text-xl lg:text-3xl hover:text-primary-500" />
            </a>
            {/* <div ref={emailRef} className="relative group">
                <button
                    onClick={toggleEmail}
                    className="flex items-center justify-center lg:cursor-default"
                    aria-label="Show email"
                >
                    <IoMail className="text-text-900 text-lg lg:text-3xl hover:text-primary-500" />
                </button>
                <p className={`
                    absolute left-0 top-full mt-1 text-text-900 text-xs lg:text-base font-semibold 
                    bg-background-100 p-2 rounded shadow-md
                    lg:hidden ${showEmail ? 'block' : 'hidden'}
                    lg:group-hover:block lg:group-hover:right-0 lg:group-hover:left-auto lg:whitespace-nowrap
                `}>
                    georges.lnl01@gmail.com
                </p>
            </div> */}
        </div>
    );
}