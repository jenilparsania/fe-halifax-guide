import {MapContainer,Polygon,TileLayer, Tooltip} from 'react-leaflet'
import neighbourhoods from '../data/neighbourhoods'


const HALIFAX_CENTER =  [44.6488,-63.5752]

function Mapview({onSelectNeighbourhood}){
    return(
        <MapContainer center={HALIFAX_CENTER} 
            zoom={13}
            style={{height:'100%',width:'100%'}}>
                <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                attribution='0 OpenStreetMap contributors'/>

        {neighbourhoods.map((n)=>(
            <Polygon
                key={n.id}
                positions={n.coords}
                pathOptions={{color:n.color,fillOpacity:0.3}}
                eventHandlers={{
                    click : () => onSelectNeighbourhood(n)
                }}
            >
                <Tooltip>{n.name}</Tooltip>
            </Polygon>
        ))}

        </MapContainer>

    )
}

export default Mapview