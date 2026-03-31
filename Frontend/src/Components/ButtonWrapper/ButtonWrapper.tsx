import React from "react";

interface ButtonWrapperProps {
    children: React.ReactNode;
}

const ButtonWrapper: React.FC<ButtonWrapperProps> = ({ children }) => {
    return (
        <div className="w-64 flex justify-center">
            {children}
        </div>
    )
}

export default ButtonWrapper;