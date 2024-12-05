import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();

    return (
        <div className="flex items-center justify-center space-x-10 relative">
            <Link to="/" className="relative group no-underline">
                <span className="text-lg outline-none text-gray-700 font-semibold">Accueil</span>
                {location.pathname === '/' && (
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-black animate-slide rounded-t-md"></div>
                )}
            </Link>
            <Link to="/A-propos" className="relative group no-underline">
                <span className="text-lg outline-none text-gray-700 font-semibold">À propos</span>
                {location.pathname === '/A-propos' && (
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-black animate-slide rounded-t-md"></div>
                )}
            </Link>
        </div>
    );
};

export default Navbar;
