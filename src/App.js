import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import axios from "axios";
import "./App.css";
import items from "./data/data.json";
import "leaflet/dist/leaflet.css";
import TrackingDetails from "./components/trackingDetails/TrackingDetails";
import Search from "./components/search/Search";
import LeafletMarker from "./components/leafletMarker/LeafletMarker";

function App() {
  const [ip, setIp] = useState("");
  const [result, setResult] = useState();
  const [position, setPosition] = useState();
  const [error, toggleError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get(`https://api.ipify.org?format=json`);
        setIp(data.ip);
      } catch (e) {
        console.error(e);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get(
          `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_API_KEY}&ipAddress=${ip}`
        );

        //Local testing with data file
        // const data = items.filter((item) => item.ip === ip);
        // if (data.length <= 0) {
        //   toggleError(true);
        //   setResult(null);
        // } else {
        //   setResult(data[0]);
        //   setPosition([data[0].location.lat, data[0].location.lng]);
        // }

        //With api call
        setResult(data);
        setPosition([data.location.lat, data.location.lng]);
      } catch (e) {
        console.error(e);
        toggleError(true);
        setResult(null);
      }
    }
    if (ip) {
      fetchData();
    }
  }, [ip]);

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div className="page">
      <h2> IP Address Tracker</h2>
      <div className="background"></div>
      {error && (
        <div className="error">
          <p>IP is invalid</p>
          <button onClick={() => refreshPage()}>Try again</button>
        </div>
      )}
      {result && <Search setIp={setIp} />}
      {result && (
        <TrackingDetails
          ip={ip}
          location={result.location.city}
          country={result.location.country}
          postalCode={result.location.postalCode}
          timeZone={result.location.timezone}
          isp={result.isp}
        />
      )}

      {position && (
        <MapContainer
          center={position}
          zoom={16}
          zoomControl={false}
          scrollWheelZoom={false}
          attributionControl={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <LeafletMarker position={position}></LeafletMarker>
        </MapContainer>
      )}
    </div>
  );
}

export default App;
