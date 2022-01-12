import { Route, Routes } from "react-router-dom"
import { HomePage } from "./Pages/Gest/HomePage"


export const  AllRouter=()=>{
    return(
        <Routes>
                <Route path="/" element={HomePage}/>
            
        </Routes>
    )
}