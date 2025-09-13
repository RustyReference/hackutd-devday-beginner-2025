import React from "react";
import Link from "next/link";
import { User, Settings } from "lucide-react";

function Navbar() {
    return (
        <nav className="flex flex-row justify-between items-center bg-gray-200 p-4 text-black">
            <Link href="/profile" className="group relative" color="grey">
                <User className="cursor-pointer hover:text-blue-600 duration-500" />
            </Link>
        
            <Link href="/" className="group relative">
                <div className="text-3xl font-extrabold hover:italic">DevGPA</div>
            </Link>

            <Link href="/settings" className="group relative">
                <Settings className="cursor-pointer" color="blue"/>
            </Link>
        </nav>
    );
}

export default Navbar;