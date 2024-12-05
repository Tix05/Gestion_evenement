import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TbDashboard, TbList, TbInfoCircle } from "react-icons/tb";

const Menubar = () => {
    const [isOpen, setIsOpen] = useState(true);
    const toggleSidebar = () => setIsOpen(!isOpen);

    return (
        <div
            className={`flex h-screen flex-col items-center justify-between py-5 bg-purple-200 transition-all duration-300 ${isOpen ? "w-60" : "w-20"
                }`}
        >
            <div
                className="cursor-pointer flex items-center justify-center"
                onClick={toggleSidebar}
            >
                <img
                    src="../../public/images/logo.png"
                    alt="logo"
                    className={`transition-transform duration-300 ${isOpen ? "w-[100px]" : "w-[50px]"
                        }`}
                />
            </div>
            <div className="space-y-5 flex flex-col items-start justify-center">
                <Link to="/dashboard" className="relative group no-underline flex">
                    <TbDashboard className="text-4xl text-gray-700" />
                    {isOpen && (
                        <span
                            className={`text-lg outline-none font-semibold whitespace-nowrap ${location.pathname === "/dashboard"
                                ? "bg-gray-500 py-1 px-3 rounded-md text-white cursor-default"
                                : "text-gray-700 py-1 px-3 link-scale"
                                }`}
                        >
                            Tableau de bord
                        </span>
                    )}
                </Link>
                <Link to="/list" className="relative group no-underline flex items-center justify-center">
                    <TbList className="text-4xl text-gray-700" />
                    {isOpen && (
                        <span
                            className={`text-lg outline-none font-semibold ${location.pathname === "/list"
                                ? "bg-gray-500 py-1 px-3 rounded-md text-white cursor-default"
                                : "text-gray-700 py-1 px-3 link-scale"
                                }`}
                        >
                            Evénements
                        </span>
                    )}
                </Link>
            </div>
            <div className="w-[250px] flex items-center justify-center">
                <TbInfoCircle className="text-4xl text-gray-700" />
                {isOpen && (
                    <p className="text-center text-sm">
                        Copyright all rights reserved
                    </p>
                )}
            </div>
        </div>
    );
};

export default Menubar;
