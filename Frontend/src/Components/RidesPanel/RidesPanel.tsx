import React from "react";

import profilePicture from "../../assets/profilePicture.jpg"


import CalendarInput from "../CalendarInput/CalendarInput";

const RidesPanel: React.FC = () => {

    
    return (
        <div className="flex flex-col">
            <div className="bg-white w-144 h-32 shadow-xl rounded-lg p-4 flex flex-col gap-2">
                <div className="flex gap-4 items-center">
                    <img src={profilePicture} className="w-[40px] h-[40px] rounded-full object-cover" />
                    <p>Bem-vinda, Krishina Garcia!</p>
                </div>
                <div className="flex">
                    <CalendarInput />
                </div>
            </div>
        </div>
    )
}

export default RidesPanel;