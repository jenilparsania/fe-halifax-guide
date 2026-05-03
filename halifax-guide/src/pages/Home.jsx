import { useState } from 'react'
import '../App.css'
import Mapview from '../components/Mapview'
import Sidebar from '../components/Sidebar'
import places from '../data/places'
import Filterbar from '../components/Filterbar'

function Home() {
  const [selected,setSelected] = useState(null)
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery , setSearchQuery] = useState('')

  const filteredPlaces = places.filter((place)=> {
    const matchesCategory = activeCategory === 'all' || place.category === activeCategory

    const matchesSearch = place.name.toLowerCase().includes(searchQuery.toLowerCase())
    console.log("searched anything from Home.jsx");
    
    return matchesCategory && matchesSearch

  })


  return(
    <div className='app'>
      <Sidebar neighbourhood={selected} onClose={()=>setSelected(null)}/>
      <div style={{flex:1, display: 'flex' , flexDirection: 'column'}}> 
        <Filterbar 
          activeCategory={activeCategory}
          onSearchChange={setSearchQuery}
          onCategoryChange={setActiveCategory}
          searchQuery={searchQuery}
          resultCount={filteredPlaces.length}
          
          />
        <Mapview onSelectNeighbourhood={setSelected} places= {filteredPlaces}/>
        
      </div>

      
    </div>
  )
}

export default Home
