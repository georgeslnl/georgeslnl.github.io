import React from "react";
import NavBar from "./NavBar";
import TopRightIcons from "./HomeIcon";

export default function Header({darkMode, toggleDarkMode}) {
    return (
        <div className="flex justify-between items-align p-4">
            <TopRightIcons darkMode={darkMode} onClick={toggleDarkMode}/>
            <NavBar />
        </div>
    );
}