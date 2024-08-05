import React from "react";
import NavBar from "./NavBar";
import HomeIcon from "./HomeIcon";

export default function Header() {
    return (
        <div className="flex justify-between p-4">
            <HomeIcon />
            <NavBar />
        </div>
    );
}