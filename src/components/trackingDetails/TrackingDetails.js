import React from 'react'
import './TrackingDetails.css'

const TrackingDetails = ({
  ip,
  location,
  country,
  postalCode,
  timeZone,
  isp,
}) => {
  return (
    <div className="details-container">
      <section>
        <p className="heading">IP ADDRESS</p>
        <p>{ip}</p>
      </section>
      <section>
        <p className="heading">LOCATION</p>
        <p>
          {location} {country} {postalCode}
        </p>
      </section>
      <section>
        <p className="heading">TIMEZONE</p>
        <p>UTC {timeZone}</p>
      </section>
      <section>
        <p className="heading">ISP</p>
        <p>{isp}</p>
      </section>
    </div>
  )
}

export default TrackingDetails
