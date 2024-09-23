import React from "react";
import NavBar from "./NavBar";
import TopLeftIcons from "./TopLeftIcons";

export default function Header({darkMode, toggleDarkMode}) {
    return (
        <div className="flex justify-between items-align p-4">
            <TopLeftIcons darkMode={darkMode} onClick={toggleDarkMode}/>
            <NavBar />
        </div>
    );
}