import { Routes, Route} from "react-router-dom";
import WriteReport from "./form";
import HomePage from "./home";
import Profile from "./profile";
import Onboarding from "./onboarding";
import LandingPage from "./landingPage";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path = "/report" element = {<WriteReport/>}/>  
            <Route path = "/home" element = {<HomePage/>}/> 
            <Route path = '/profile' element = {<Profile/>} />
            <Route path = '/onboarding' element = {<Onboarding/>}/>
            <Route path = '/' element = {<LandingPage/>}/>
            {/* <Route path = "/sign-up" element = {}/>  
            <Route path = "/sign-in" element = {}/>   */}
        </Routes>
    )
}