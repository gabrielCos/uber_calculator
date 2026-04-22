import React, {useState} from "react";

import profilePicture from "../../assets/profilePicture.jpg"
import { FaCarSide } from "react-icons/fa6";

import CalendarInput from "../CalendarInput/CalendarInput";
import RideItem from "../RideItem/RideItem";

import corridas from "../../../Data/Data";


import {type Ride} from "../../../Interfaces/corridas";

const RidesPanel: React.FC = () => {
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);
    const [rides, setRides] = useState<Ride[]>([]);
    const [totalValue, setTotalValue] = useState(0);
    const [count, setCount] = useState(0);

    const handleClick = async () => {
        if (!startDate || !endDate) {
            alert("Select Both Dates")
            return;
        }

        try {
            const start = startDate.toISOString().split("T")[0];
            const end = endDate.toISOString().split("T")[0];

            const response = await fetch(
                `http://localhost:8000/rides?start_date=${start}&end_date=${end}`
            );

            const data = await response.json();
            console.log(data);
            
            setRides(data.rides);
            setTotalValue(data.total);
            setCount(data.count);
        } catch (error) {
        console.error("Error fetching rides:", error);
        }
    };
    
    return (
        <div className="flex flex-col h-auto gap-2">
            <div className="bg-white w-144 h-auto shadow-xl rounded-lg p-4 flex flex-col gap-2">
                <div className="flex gap-4 items-center">
                    <img src={profilePicture} className="w-[40px] h-[40px] rounded-full object-cover" />
                    <p>Bem-vinda, Krishina Garcia!</p>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex gap-4">
                        <div className="flex flex-col">
                            <p>Data de ínicio</p>
                            <CalendarInput
                                selectedDate={startDate} 
                                onChange={setStartDate}
                            />
                        </div>
                        <div className="flex flex-col">
                            <p>Data de Fim</p>
                            <CalendarInput
                                selectedDate={endDate} 
                                onChange={setEndDate}
                            />
                        </div>
                    </div>
                    <button className="bg-black text-white rounded-lg self-end w-[160px] h-[60px] cursor-pointer"
                            onClick={handleClick}>
                        Ver Corridas
                    </button>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                {rides.map((ride, index) => (
                    <RideItem
                        key={index}
                        data={ride.date}
                        value={ride.value}
                    />
                ))}
            </div>
            <div className="bg-black/70 w-144 h-auto shadow-xl rounded-lg p-4 flex items-center justify-between">
                <div className="flex gap-2 items-center">
                    <FaCarSide className="w-[48px] h-auto text-white" />
                    <p className="text-white"> Total de Corridas: {count}</p>       
                </div>
                <div>
                    <p className="text-white">Valor total: R$ {totalValue}</p>
                </div>
            </div>
        </div>
    )
}

export default RidesPanel;