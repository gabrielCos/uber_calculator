import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import CalendarioIcon from "../../assets/Icons/calendarioIcon.png"


const CalendarInput: React.FC = () => { 
    const [date, setDate] = React.useState<Date | null>(null);

    return (
        <div className="flex justify-center items-center rounded-lg border-3 border-black/30 pr-1">
            <DatePicker
                selected={date}
                onChange={(date: Date | null) => setDate(date)}
                customInput={
                    <button className="text-black rounded-xl flex items-center">
                        <img src={CalendarioIcon} className="w-[48px] h-auto"/>
                        {date ? date.toLocaleDateString("pt-BR") : "Selecionar data"}
                    </button>
                }
            />
        </div>
    )
}

export default CalendarInput;