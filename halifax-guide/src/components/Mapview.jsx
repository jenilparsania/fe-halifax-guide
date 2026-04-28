import { MapContainer, TileLayer, Polygon, Tooltip, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import neighbourhoods from '../data/neighbourhoods'

const HALIFAX_CENTER = [44.6488, -63.5752]

// Custom icon using a plain coloured circle — no image files needed
const customIcon = L.divIcon({
  className: '',
  html: `<div style="
    width: 14px;
    height: 14px;
    background: #E67E22;
    border: 2px solid white;
    border-radius: 50%;
    box-shadow: 0 1px 4px rgba(0,0,0,0.4);
  "></div>`,
  iconSize: [14, 14],
  iconAnchor: [7, 7],
  popupAnchor: [0, -10],
})

function MapView({ onSelectNeighbourhood , places }) {
  return (
    <MapContainer
      center={HALIFAX_CENTER}
      zoom={13}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="© OpenStreetMap contributors"
      />

      {neighbourhoods.map((n) => (
        <Polygon
          key={n.id}
          positions={n.coords}
          pathOptions={{ color: n.color, fillOpacity: 0.3 }}
          eventHandlers={{ click: () => onSelectNeighbourhood(n) }}
        >
          <Tooltip>{n.name}</Tooltip>
        </Polygon>
      ))}

      {places.map((place) => (
        <Marker key={place.id} position={[place.lat, place.lng]} icon={customIcon}>
          <Popup>
            <strong>{place.name}</strong><br />
            {place.category}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}

export default MapView