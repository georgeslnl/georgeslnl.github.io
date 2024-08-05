import { MdHome } from "react-icons/md";
import { React } from "react";
import { Link } from "react-router-dom";

export default function HomeIcon() {
    return (
        <Link to="/">
            <MdHome className="text-text text-3xl hover:text-primary-500" />
        </Link>
    );
}
