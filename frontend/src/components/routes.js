import { Routes, Route} from "react-router-dom";
import WriteReport from "./form";
import HomePage from "./home";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path = "/report" element = {<WriteReport/>}/>  
            <Route path = "/home" element = {<HomePage/>}/>  
            {/* <Route path = "/sign-up" element = {}/>  
            <Route path = "/sign-in" element = {}/>   */}
        </Routes>
    )
}