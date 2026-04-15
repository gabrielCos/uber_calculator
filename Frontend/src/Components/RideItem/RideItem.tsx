import React from "react";

import { FaCarSide } from "react-icons/fa6";

interface RideItemProps {
  data: string;
  value: number;
}

const RideItem: React.FC<RideItemProps> = ({ data, value }) => { 
    const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("pt-BR");
    };

    return (
        <div className="bg-white w-144 h-auto shadow-xl rounded-lg p-4 flex items-center justify-between">
            <div className="flex gap-2 items-center">
                <FaCarSide className="w-[48px] h-auto text-black/70" />
                <p>{formatDate(data)}</p>
            </div>
            <div>
                <p>Valor: R$ {value.toFixed(2)}</p>
            </div>
        </div>
    )
}

export default RideItem;