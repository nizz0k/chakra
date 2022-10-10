import { useRef } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import 'leaflet-defaulticon-compatibility';

const Map = ({points}) => {
//Marker Base styles
const markerOptions = {radius: 2, weight: 1, opacity: 1, fillOpacity: 0.8, }

//Marker styles based on types
const markerStyles = function(feature) {
  switch (feature.properties.art_type) {
      case 'Sticker': return {color: "#800026"};
      case 'Mural':   return {color: "#BD0026"};
      case 'Marker':   return {color: "#E31A1C"};
      case 'Characters':   return {color: "#FC4E2A"};
      case 'Letters':   return {color: "#FD8D3C"};
      case 'Tippex':   return {color: "#FEB24C"};
      case 'Spray':    return {color: "#FED976"}
      }
}
// Map Events
const geoJsonRef = useRef();

const onMouseOut = (e) => {
  var layer = e.target;
  geoJsonRef.current.setStyle(markerOptions);

}

const onMouseOver = (e) => {
  var layer = e.target;

    layer.setStyle({
        weight: 5,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }
}



function onEachFeature(feature, layer){
  if(feature.properties){
    layer.bindPopup("<div class='popupImage'</div><img src=" + "https://d2qr25zh4rluwu.cloudfront.net/" + encodeURI(feature.properties.filename) + ".jpg " + "alt='peng spot photo'" + "height='200px'"  + " " + ">" + "<div>" + "Type:" + feature.properties.art_type + "</div><div>" + "Date Seen: " + feature.properties.timestamp + " </div>")
  }
  layer.on({
      mouseover: onMouseOver,
      mouseout: onMouseOut,
      //click: zoomToFeature
  });
}

function pointToLayer(feature, latLng){
  return L.circleMarker(latLng, markerOptions)
}

return (
    <>
    <MapContainer center={[50.1109, 8.6821]} zoom={14} scrollWheelZoom={false} style={{height: "100%", width: "100%"}} renderer={L.canvas()}>
      <TileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
  />
     
    <GeoJSON data={points} pointToLayer={pointToLayer} pathOptions={markerStyles} onEachFeature={onEachFeature}  ref={geoJsonRef} />
    </MapContainer>
</>
)
}

export default Map