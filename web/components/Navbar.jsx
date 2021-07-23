import React from "react";
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center h-16 bg-white text-black-500 relative
         shadow-sm font-mono"
             role="navigation">
            <Link to="/" className="pl-8">
                Logo
            </Link>
            <div className="px-4 cursor-pointer md:hidden">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
            </div>
            
            <div className="pr-8 hidden md:block">
                <Link className="p-4 no-underline" to="/">Home</Link>
                <Link className="p-4 no-underline" to="/menu">Menu</Link>
                <Link className="p-4 no-underline" to="/about">About</Link>
                <Link className="p-4 no-underline" to="/contact">Contact</Link>
            </div>
        </nav>
    )
    
}
export default Navbar
