import { useState } from 'react'
import './App.css'
import Mapview from './components/Mapview'
import Sidebar from './components/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Neighbourhooddetail from './pages/Neighbourhooddetail'

function App() {
  const [selected,setSelected] = useState(null)
  return(
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/neighbourhood/:slug' element={<Neighbourhooddetail/>}/>
    </Routes>
  )
}

export default App
