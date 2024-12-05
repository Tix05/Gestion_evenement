import React, { useState } from 'react';
import { FloatLabel } from 'primereact/floatlabel';
import { InputText } from 'primereact/inputtext';
import { FaUser, FaLock } from "react-icons/fa";
import { Password } from 'primereact/password';


const login_organisateur = () => {
    const [pseudo, setPseudo] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="flex h-screen w-fulloverflow-hidden px-[150px] py-[50px]">
            <div className="flex w-[50%]">
                <img
                    src="../../../public/images/login_image_o.jpg"
                    alt="image_login"
                    className="shadow-no-right w-full"
                />
            </div>
            <div className="flex flex-col w-[50%] items-center justify-center bg-white shadow-no-left">
                <h1 className="font-extrabold text-3xl">Connexion Admin</h1>
                <p className="font-semibold">Veuillez vous connecter à votre compte</p>
                <div className="mt-10 flex items-center space-x-1">
                    <FaUser className="text-xl" />
                    <FloatLabel>
                        <InputText
                            id="pseudo"
                            value={pseudo}
                            onChange={(e) => setPseudo(e.target.value)}
                        />
                        <label htmlFor="pseudo">Pseudo</label>
                    </FloatLabel>
                </div>
                <div className="mt-6 flex items-center space-x-1">
                    <FaLock className="text-xl" />
                    <FloatLabel>
                        <Password
                            inputId="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.password)}
                        />
                        <label htmlFor="password">Password</label>
                    </FloatLabel>
                </div>
                <button className="px-8 py-2 bg-purple-500 mt-10 text-lg text-white hover:cursor-pointer hover:bg-purple-600 button-scale duration-500 border-0">
                    Se connecter
                </button>
            </div>
        </div>

    );
};

export default login_organisateur;