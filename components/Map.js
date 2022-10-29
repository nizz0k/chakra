import { MapContainer, TileLayer, } from 'react-leaflet'
import GeoJSONLayer from './GeoJSONLayer'
import 'leaflet/dist/leaflet.css'

const Map = ({points}) => {
console.log(points)

return (
    <>
    <MapContainer center={[50.1109, 8.6821]} zoom={14} scrollWheelZoom={false} style={{height: "100%", width: "100%"}} renderer={L.canvas()}>
      <TileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
  />
  
   <GeoJSONLayer data={points}/>
    </MapContainer>
</>
)
}


export default Map