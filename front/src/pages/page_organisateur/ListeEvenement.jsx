import React, { useState } from 'react';
import { Card } from 'primereact/card';
import { Paginator } from 'primereact/paginator';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

const events = [
    { title: "VIBE TROPICAL", date: "06 Déc. 2024 à 19:00", location: "Palais de la Culture", type: "Soirée", price: "MGA 15 000 à MGA 100 000", image: "vibe-tropical.jpg" },
    { title: "JAOJOBY", date: "06 Déc. 2024 à 20:30", location: "La city Ivandry", type: "Live", price: "MGA 30 000 à MGA 50 000", image: "jaojoby.jpg" },
    { title: "JS TWINS - MBOLA...", date: "08 Déc. 2024 à 15:00", location: "Studio Arena Ivandry", type: "Live", price: "MGA 20 000 à MGA 40 000", image: "js-twins.jpg" },
    { title: "AMINE RADI", date: "13 Déc. 2024 à 19:00", location: "CCI Ivato", type: "Live", price: "MGA 200 000 à MGA 400 000", image: "amine-radi.jpg" },
    { title: "MAHALEO ET PRINCIO", date: "13 Déc. 2024 à 20:00", location: "Tananarive", type: "Live", price: "MGA 40 000 à MGA 50 000", image: "mahaleo.jpg" },
    { title: "ANISHA JO À IVATO", date: "15 Déc. 2024 à 15:00", location: "CCI Ivato", type: "Live", price: "MGA 40 000 à MGA 100 000", image: "anisha.jpg" },
    { title: "VIBE TROPICAL", date: "06 Déc. 2024 à 19:00", location: "Palais de la Culture", type: "Soirée", price: "MGA 15 000 à MGA 100 000", image: "vibe-tropical.jpg" },
    { title: "JAOJOBY", date: "06 Déc. 2024 à 20:30", location: "La city Ivandry", type: "Live", price: "MGA 30 000 à MGA 50 000", image: "jaojoby.jpg" },
    { title: "JS TWINS - MBOLA...", date: "08 Déc. 2024 à 15:00", location: "Studio Arena Ivandry", type: "Live", price: "MGA 20 000 à MGA 40 000", image: "js-twins.jpg" },
    { title: "AMINE RADI", date: "13 Déc. 2024 à 19:00", location: "CCI Ivato", type: "Live", price: "MGA 200 000 à MGA 400 000", image: "amine-radi.jpg" },
    { title: "MAHALEO ET PRINCIO", date: "13 Déc. 2024 à 20:00", location: "Tananarive", type: "Live", price: "MGA 40 000 à MGA 50 000", image: "mahaleo.jpg" },
    { title: "ANISHA JO À IVATO", date: "15 Déc. 2024 à 15:00", location: "CCI Ivato", type: "Live", price: "MGA 40 000 à MGA 100 000", image: "anisha.jpg" },

];

const ListeEvenement = () => {
    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(6);

    const currentEvents = events.slice(first, first + rows);

    const onPageChange = (e) => {
        setFirst(e.first);
        setRows(e.rows);
    };

    return (
        <div className="p-4">
            {/* Section des cartes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {currentEvents.map((event, index) => (
                    <Card
                        key={index}
                        title={event.title}
                        subTitle={`${event.date} - ${event.location}`}
                        header={<img alt={event.title} src={`/images/${event.image}`} className="w-full h-48 object-cover" />}
                        footer={
                            <div className="flex justify-between items-center">
                                <span className={`badge ${event.type === 'Live' ? 'bg-purple-700' : 'bg-blue-500'} text-white px-3 py-1 rounded-full`}>
                                    {event.type}
                                </span>
                                <span className="text-gray-800 font-semibold">{event.price}</span>
                            </div>
                        }
                        className="shadow-lg"
                    >
                        Réservez vite vos places !
                    </Card>
                ))}
            </div>
            <Paginator
                first={first}
                rows={rows}
                totalRecords={events.length}
                onPageChange={onPageChange}
                className="mt-6"
            />
        </div>
    );
};

export default ListeEvenement;

