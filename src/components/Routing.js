import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Artists from "./pages/Artists";
import Albums from "./pages/Albums";
import Downloads from "./pages/Downloads";

const Routing = () => {
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={ <Home /> }></Route>
                    <Route path="/Home" element={ <Home/> }></Route>
                    <Route path="/Categories" element={ <Categories/> }></Route>
                    <Route path="/Artists" element={ <Artists/> }></Route>
                    <Route path="/Albums" element={ <Albums/> }></Route>
                    <Route path="/Downloads" element={ <Downloads/> }></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Routing;