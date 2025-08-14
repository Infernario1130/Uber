import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import UserLogin from "./pages/UserLogin";
import UserSignup from "./pages/UserSignup";
import CaptainLogin from "./pages/Captainlogin";
import Captainsignup from "./pages/Captainsignup";


function App() {

  return (
   <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<UserLogin/>}/>
          <Route path="/signup" element={<UserSignup/>}/>
          <Route path="/captain-login" element={<CaptainLogin/>}/>
          <Route path="/captain-signup" element={<Captainsignup/>}/>
        </Routes>
      </BrowserRouter>
   </div>
  )
}

export default App
