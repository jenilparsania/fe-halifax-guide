import { Link } from 'react-router-dom'
import './Sidebar.css'

function Sidebar({neighbourhood,onClose}){
    if(!neighbourhood){
        return(
            <div className='sidebar sidebar--empty'>
                <p> Click a neighbourhood on the map</p>

            </div>
        )
    }

    const slug = neighbourhood.name.toLowerCase().replace(/s+/g,'-')
    return(
        <div className='sidebar'>
            <button className="sidebar_close" onClick={onClose}>X</button>
            <div className='sidebar_color-bar' style={{background : neighbourhood.color}}/>
            <h2 className="sidebar_name">{neighbourhood.name}</h2>
            <p className="sidebar_vibe">{neighbourhood.vibe}</p>
            <Link to={`neighbourhood/${slug}`} className='sidebar_link'>
                Visit full Profile
            </Link>
        </div>

    )
}

export default Sidebar