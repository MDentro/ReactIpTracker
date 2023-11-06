import L from 'leaflet'
import iconImage from '../../images/icon-location.svg'
import './icon.css'

const icon = new L.Icon({
  iconUrl: iconImage,
  iconRetinaUrl: iconImage,
  iconAnchor: null,
  popupAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(60, 75),
  className: 'leaflet-div-icon',
})

export default icon
