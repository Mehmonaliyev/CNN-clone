import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from './Pages/Navbar';
import World from './Components/World';
import Africa from './Components/Africa';
import Americas from './Components/Americas';
import Asia from './Components/Asia';
import Australia from './Components/Australia';
import China from './Components/more/China';
import India from './Components/more/India';
import Europa from './Components/more/Europa';
import Home from './Components/Home';


function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/World' element={<World/>} />
      <Route path='/Africa' element={<Africa/>} />
      <Route path='/Americas' element={<Americas/>}/>
      <Route path='/Asia' element={<Asia/>}/>
      <Route path='/Australia' element={<Australia/>}/>
      <Route path='/China' element={<China/>}/>
      <Route path='/Europa' element={<Europa/>}/>
      <Route path='/India' element={<India/>}/>

    </Routes>
    </>
  )
}
export default App
