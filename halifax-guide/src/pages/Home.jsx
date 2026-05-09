import { useEffect, useState } from 'react'
import '../App.css'
import Mapview from '../components/Mapview'
import Sidebar from '../components/Sidebar'
import Filterbar from '../components/Filterbar'

const API_URL = 'http://localhost:5000'

function Home() {
  const [selected,setSelected] = useState(null)
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery , setSearchQuery] = useState('')
  const [places,setPlaces] = useState([])
  const [loading,setLoading] = useState(true) 

  useEffect(()=>{
    setLoading(true)
    const url = activeCategory === 'all' ? 
    `${API_URL}/api/places` 
    : `${API_URL}/api/places?category=${activeCategory}`

    fetch(url).then((res) => res.json())
    .then((data)=>{
      setPlaces(data)
      setLoading(false)
    })
    .catch((err)=>{
      console.error('Failed to fetch places : ',err)
      setLoading(false)

    })

  },[activeCategory])

  const filteredPlaces = places.filter((place)=> {
    const matchesCategory = activeCategory === 'all' || place.category === activeCategory

    const matchesSearch = place.name.toLowerCase().includes(searchQuery.toLowerCase())
    console.log("searched anything from Home.jsx");
    
    return matchesCategory && matchesSearch

  })


  return(
    <div className='app'>
      <Sidebar neighbourhood={selected} onClose={()=>setSelected(null)}/>
      <div className='app_main'> 
        <Filterbar 
          activeCategory={activeCategory}
          onSearchChange={setSearchQuery}
          onCategoryChange={setActiveCategory}
          searchQuery={searchQuery}
          resultCount={filteredPlaces.length}
          
          />

          <div className='app_map'>
            {loading ? (
              <div style={{display:'flex',alignItems: 'center',justifyContent: 'center',height:'100%',color: '#888',fontSize:14}}>
                Loading places ... 
              </div>
            ): (
               <Mapview onSelectNeighbourhood={setSelected} places= {filteredPlaces}/>
            )}
          </div>
       
        
      </div>

      
    </div>
  )
}

export default Home
