import { Link } from 'react-router-dom'
import './Sidebar.css'

function Sidebar({neighbourhood,onClose}){

    const slug = neighbourhood
    ? neighbourhood.name.toLowerCase().replace(/\s+/g,'-') : ''

    const classes = [
        'sidebar',
        !neighbourhood ? 'sidebar-empty' : '',
        neighbourhood ? 'sidebar-visible' : '',
    ].join('  ')

    if(!neighbourhood){
        return(
            <div className={classes}>
                <p> Click a neighbourhood on the map</p>

            </div>
        )
    }

    const slug = neighbourhood.name.toLowerCase().replace(/s+/g,'-')
    return(
        <div className={classes}>
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