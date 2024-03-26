import React from "react";
import {Route, Routes} from 'react-router-dom'; //routes is a warpper, route is individual path
import Hero from "./Hero";
import ItemDetail from "./components2/ItemDetail";
import NewsDetail from "./components3/NewsDetail";

function App() {
    return <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/itemdetail" element={<ItemDetail />} />
        <Route path="/newsDetail" element={<NewsDetail />} />
    </Routes>
}

export default App;