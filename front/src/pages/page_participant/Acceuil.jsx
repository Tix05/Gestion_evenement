import React from 'react';
import Navbar from '../../components/navbar';
import { ReactTyped } from "react-typed";

const Acceuil = () => {
    return (
        <div className="flex flex-col h-screen w-auto bg-[url('../../../public/images/image-de-fond.jpg')] bg-cover bg-center">
            <header className='flex items-center justify-between font-semibold'>
                <img src="../../../public/images/logo.png" alt="image-logo" className='w-[100px]' />
                <Navbar />
                <div className='mr-10 space-x-5'>
                    <a
                        href="/login"
                        className='button-scale bg-[#6c89af] hover:bg-[#345181] text-white'
                    >
                        Se connecter
                    </a>
                    <a
                        href="#"
                        className='button-scale bg-purple-600 hover:bg-purple-700 text-white'
                    >
                        S'inscrire
                    </a>
                </div>
            </header>
            <div className="flex-grow relative flex">
                <div className='w-[50%] flex flex-col items-center justify-center space-y-6'>
                    <ReactTyped
                        strings={["Bienvenue sur E-vent !"]}
                        typeSpeed={100}
                        className='text-5xl font-bold text-blue-500'
                    />

                    <div className='flex flex-col justify-center items-center font-semibold -space-y-3'>
                        <p className='text-xl'>E-vent est un site web qui vous permet de </p>
                        <ReactTyped
                            className='text-xl text-gray-800'
                            strings={[
                                'voir les événements populaires',
                                'consulter les détails d\'un événement',
                                'réservation en quelques clics',
                            ]}
                            typeSpeed={50}
                            backSpeed={50}
                            loop
                        />
                    </div>

                    <p className='text-lg text-gray-700 text-center px-4'>
                        Que ce soit pour une soirée, une conférence, ou une activité sportive, <br />
                        E-vent est votre partenaire idéal pour rester connecté et profiter des meilleurs moments.
                    </p>
                </div>
                <div className='flex items-end justify-end'>
                    <img src="../../../public/images/img-homme.png" alt="" className='w-[100%]' />
                </div>
            </div>
        </div>

    );
};

export default Acceuil;
