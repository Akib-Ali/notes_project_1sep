import { Route, Routes } from "react-router-dom"
import { CreateNotes } from "./createnotes"
import { Home } from "./home"
import { Navbar } from "./navbar"
import { Product } from "./product"

export const AllRoutes=()=>{
    return(
    <>  
         <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>

            <Route path="/createnotes" element={<CreateNotes/>}/> 
        
        </Routes>
    </>
    )
}