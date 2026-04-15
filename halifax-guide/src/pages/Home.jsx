import { useState } from 'react'
import '../App.css'
import Mapview from '../components/Mapview'
import Sidebar from '../components/Sidebar'

function Home() {
  const [selected,setSelected] = useState(null)
  return(
    <div className='app'>
      <Sidebar neighbourhood={selected} onClose={()=>setSelected(null)}/>
      <Mapview onSelectNeighbourhood={setSelected}/>
    </div>
  )
}

export default Home
