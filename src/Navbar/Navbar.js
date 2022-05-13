import './Navbar.css'
import { Routes, Route } from "react-router-dom";
import Home from "../components/home/Home";
function Navbar (){
     return (
<Routes>
    <Route id='headNav'path='/'element={<Home/>}/>
    </Routes>
    )
}