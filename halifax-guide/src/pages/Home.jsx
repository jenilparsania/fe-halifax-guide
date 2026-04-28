import { useState } from 'react'
import '../App.css'
import Mapview from '../components/Mapview'
import Sidebar from '../components/Sidebar'
import places from '../data/places'

function Home() {
  const [selected,setSelected] = useState(null)
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery , setSearchQuery] = useState('')

  const filteredPlaces = places.filter((place)=> {
    const matchesCategory = activeCategory === 'all' || place.category === activeCategory

    const matchesSearch = place.name.toLowerCase().includes(searchQuery.toLowerCase())

    return matchesCategory && matchesSearch

  })


  return(
    <div className='app'>
      <Sidebar neighbourhood={selected} onClose={()=>setSelected(null)}/>
      <div style={{flex:1, display: 'flex' , flexDirection: 'column'}}> 
        <Mapview onSelectNeighbourhood={setSelected} places= {filteredPlaces}/>
        
      </div>

      
    </div>
  )
}

export default Home
