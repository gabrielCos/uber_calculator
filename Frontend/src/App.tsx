import './App.css'
import LoginScreen from './Components/LoginScreen'
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {

  return (
    <>
      <GoogleOAuthProvider clientId="972412635708-8m596g2ei11mmg9obud3rum7rt6eirm3.apps.googleusercontent.com">
        <div className="bg-gray-100 w-screen h-screen flex justify-center items-center">
          <LoginScreen />
        </div>
      </GoogleOAuthProvider>
    </>
  )
}

export default App
