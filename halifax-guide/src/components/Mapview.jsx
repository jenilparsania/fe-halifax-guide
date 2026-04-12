import {MapContainer,TileLayer} from 'react-leaflet'

const HALIFAX_CENTER =  [44.6488,-63.5752]

function Mapview(){
    return(
        <MapContainer center={HALIFAX_CENTER} 
            zoom={13}
            style={{height:'100%',width:'100%'}}>
                <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                attribution='0 OpenStreetMap contributors'/>
            </MapContainer>

    )
}

export default Mapview