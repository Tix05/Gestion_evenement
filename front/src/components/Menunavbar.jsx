import React from 'react';
import { Avatar } from 'primereact/avatar';
import { FiBell } from 'react-icons/fi'; // Importation de l'icône de cloche
import { AiOutlineSearch } from 'react-icons/ai'; // Nouvelle icône de recherche

const Menunavbar = () => {
    return (
        <div className="flex w-full items-center justify-between h-14 bg-purple-200 px-4">
            <div className="flex items-center justify-center p-5 w-full max-w-md">
                <div className="rounded-lg p-2 w-full">
                    <div className="flex">
                        <div className="flex w-10 items-center justify-center rounded-tl-lg rounded-bl-lg bg-white p-2">
                            <AiOutlineSearch className="w-5 h-5 text-gray-500" />
                        </div>
                        <input
                            type="text"
                            className="w-full max-w-[160px] bg-white pl-2 font-semibold outline-none border-none"
                            placeholder="Rechercher..."
                        />
                        <input
                            type="button"
                            value="Chercher"
                            className="bg-blue-500 p-2 rounded-tr-lg rounded-br-lg text-white font-bold hover:bg-blue-800 transition-colors border-none outline-none"
                        />
                    </div>
                </div>
            </div>


            <div className="flex items-center space-x-4">
                <button className="p-[2px] rounded-full hover:bg-purple-300">
                    <FiBell className="text-xl text-gray-800" /> ok
                </button>
                <Avatar
                    image="https://randomuser.me/api/portraits/men/41.jpg"
                    size="large"
                    shape="circle"
                />
            </div>
        </div>
    );
};

export default Menunavbar;
