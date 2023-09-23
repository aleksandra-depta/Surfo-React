import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Map = ( {tour} ) => {

  return(
    <MapContainer center={[`${tour.mapCenterCoordinates[0]}`, `${tour.mapCenterCoordinates[1]}`]} zoom={`${tour.mapZoom}`} scrollWheelZoom={false} className="map">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {tour.mapLocations.map(location => {
        return (
          <Marker position={[`${location.coordinates[0]}`, `${location.coordinates[1]}`]} key={location.description}>
            <Popup>
              {location.description}
            </Popup>
          </Marker>
        )
      })}
    </MapContainer>
  )
}

export default Map;