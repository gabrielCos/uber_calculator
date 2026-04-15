import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaRegCalendarAlt } from "react-icons/fa";

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
                    <button className="text-black/70 rounded-xl flex items-center h-auto">
                        <FaRegCalendarAlt className="w-[48px] h-auto text-black/70"/>
                        {selectedDate
                            ? selectedDate.toLocaleDateString("pt-BR")
                            : <p className="text-black/30 text-[16px]">Selecionar Data</p>}
                    </button>
                }
            />
        </div>
    )
}

export default CalendarInput;