import './Filterbar.css'

const CATEGORIES = [
    {value : 'all', label : 'All'},
    { value: 'food', label: 'Food' },
    { value: 'cafe', label: 'Cafes' },
    { value: 'bar', label: 'Bars' },
    { value: 'park', label: 'Parks' },
    { value: 'market', label: 'Markets' },
]

function Filterbar({
    activeCategory,
    onCategoryChange,
    searchQuery,
    onSearchChange,
    resultCount,

}){
    return(
        <div className='filter-bar'>
            <div className='filter-bar_categories'>
                {CATEGORIES.map((cat)=>(
                    <button 
                    key={cat.value}
                    className={`filter-btn ${activeCategory === cat.value ? 'filter-btn_active': ''}`}
                    onClick={()=> onCategoryChange(cat.value)}

                    >
                        {cat.label}
                    </button>
                ))}
            </div>

            <div className='filter-bar_right'>
                <input type='text' className='filter-bar_search'
                    placeholder='Search places... ' 
                    value={searchQuery} onChange={(e)=> onSearchChange(e.target.value)}/>
            </div>
            <span className='filter-bar_count'> 
                {resultCount} {resultCount === 1 ? 'place' : 'places'}
            </span>
        </div>
    )

}

export default Filterbar