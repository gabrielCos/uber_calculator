import React from "react";
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

const LoginScreen: React.FC = () => {
    return (
        <div className="bg-white w-144 h-72 shadow-xl rounded-lg flex flex-col justify-center items-center gap-4">
            <p className="text-red-500 text-center">Use o e-mail cadastrado no seu uber!</p>
            <div className="w-64 flex justify-center">
                <GoogleLogin
                    onSuccess={credentialResponse => {
                        const decoded = jwtDecode(credentialResponse?.credential);
                        console.log(decoded);
                    }}
                    onError={() => {
                        console.log('Login Failed');
                    }}
                />
            </div>
        </div>
    )
}

export default LoginScreen;


