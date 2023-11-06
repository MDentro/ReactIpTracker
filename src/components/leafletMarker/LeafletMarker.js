import React, { useEffect } from 'react'
import { Marker, Popup, useMap } from 'react-leaflet'
import icon from '../icon/icon.js'

const LeafletMarker = ({ position }) => {
  const map = useMap()
  useEffect(() => {
    map.flyTo(position, 16, {
      animate: true,
    })
  }, [map, position])
  return (
    <Marker position={position} icon={icon}>
      <Popup>You are here!</Popup>
    </Marker>
  )
}

export default LeafletMarker
