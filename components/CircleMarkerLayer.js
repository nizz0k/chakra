import { CircleMarker, Popup } from "react-leaflet";
import PopupContent from "./PopupContent";

const CircleMarkerLayer = ({ data }) => {
    return  data.features.map((feature) => {
    const { coordinates } = feature.geometry
    const markerStyles = function(feature) {
        switch (feature.properties.type) {
            case 'Sticker': return {color: '#a50026', fillOpacity: 1};
            case 'Mural':   return {color: '#d73027', fillOpacity: 1};
            case 'Marker':   return {color: '#f46d43', fillOpacity: 1};
            case 'Characters':   return {color: '#fdae61', fillOpacity: 1};
            case 'Letters':   return {color: '#fee090', fillOpacity: 1 };
            case 'Tippex':   return {color: '#ffffbf', fillOpacity: 1};
            case 'Spray':    return {color: '#e0f3f8', fillOpacity: 1};
            case 'Chalk':    return{color: '#abd9e9', fillOpacity: 1};
            case 'Crayon':    return{color: '#74add1', fillOpacity: 1}
            case 'Label maker sticker':    return{color: '#4575b4', fillOpacity: 1};
            case 'Poster':    return{color: '#313695', fillOpacity: 1};
            }
      }
      const markMouseOut = {
        weight: 5,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.7
    }
    return (
        <CircleMarker 
        key={feature.properties.id} 
        center={[coordinates[1], coordinates[0]]} 
        pathOptions={markerStyles(feature)}
        radius={3}
        eventHandlers={{
            mouseover: (event) => event.target.setStyle(markMouseOut),
            mouseout: (event) => event.target.setStyle(markerStyles(feature)),
        }}
        >
            <Popup>
                <PopupContent content={feature} />
            </Popup>
        </CircleMarker>
    )
    }

    )
}

export default CircleMarkerLayer