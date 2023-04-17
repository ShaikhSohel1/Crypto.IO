import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header  from './componenets/Header'
import Home from './componenets/Home'
import Coins from './componenets/Coins'
import Exchanges from './componenets/Exchanges'
import CoinDetails from './componenets/CoinDetails'


function App() {

 return (
  <Router>

    <Header />
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/coins" element={<Coins />} />
      <Route path="/exchanges" element={<Exchanges />} />
      <Route path="/coindetails/:id" element={<CoinDetails />} />
      {/* <Route path="*" element={<h1>404 Not Found</h1>} /> */}


    </Routes>
    
  </Router>
)
}

export default App
