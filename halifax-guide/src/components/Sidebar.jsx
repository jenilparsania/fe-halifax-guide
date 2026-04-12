import './Sidebar.css'

function Sidebar({neighbourhood,onClose}){
    if(!neighbourhood){
        return(
            <div className='sidebar sidebar--empty'>
                <p> Click a neighbourhood on the map</p>

            </div>
        )
    }

    return(
        <div className='sidebar'>
            <button className="sidebar_close" onClick={onClose}>X</button>
            <div className='sidebar_color-bar' style={{background : neighbourhood.color}}/>
            <h2 className="sidebar_name">{neighbourhood.name}</h2>
            <p className="sidebar_vibe">{neighbourhood.vibe}</p>
        </div>

    )
}

export default Sidebar