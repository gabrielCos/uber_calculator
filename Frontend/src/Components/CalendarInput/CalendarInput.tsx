import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import CalendarioIcon from "../../assets/Icons/calendarioIcon.png"

interface CalendarInputProps {
    selectedDate: Date | null;
    onChange: (date: Date | null) => void;
}


const CalendarInput: React.FC<CalendarInputProps> = ({ selectedDate, onChange }) => { 

    return (
        <div className="flex justify-start w-[172px] items-center rounded-lg border-3 border-black/30 p-1">
            <DatePicker
                selected={selectedDate}
                onChange={(date: Date | null) => onChange(date)}
                wrapperClassName="h-[48px]"
                customInput={
                    <button className="text-black rounded-xl flex items-center h-auto">
                        <img src={CalendarioIcon} className="w-[48px] h-auto"/>
                        {selectedDate
                            ? selectedDate.toLocaleDateString("pt-BR")
                            : "Selecionar Data"}
                    </button>
                }
            />
        </div>
    )
}

export default CalendarInput;