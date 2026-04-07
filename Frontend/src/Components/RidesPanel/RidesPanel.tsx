import React, {useState} from "react";

import profilePicture from "../../assets/profilePicture.jpg"


import CalendarInput from "../CalendarInput/CalendarInput";

const RidesPanel: React.FC = () => {
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);

    const handleClick = () => {
    if (!startDate || !endDate) {
        alert("Selecione as duas datas!");
        return;
    }
    console.log("Início:", startDate?.toISOString().split("T")[0]);
    console.log("Fim:", endDate?.toISOString().split("T")[0]);
    };
    
    return (
        <div className="flex flex-col h-auto">
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
        </div>
    )
}

export default RidesPanel;