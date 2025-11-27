import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Mobile from './pages/Mobile';
import Fibre from './pages/Fibre';
import Support from './pages/Support';
import About from './pages/About';
import NewConnection from "./pages/NewConnection.jsx";
import Recharge from './pages/Recharge';
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/fibre" element={<Fibre />} />
      <Route path="/mobile" element={<Mobile />} />
      <Route path="/support" element={<Support />} />
      <Route path='/newconnection' element={<NewConnection />} />
      <Route path='/recharge' element={<Recharge />} />
      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  )
}

export default App