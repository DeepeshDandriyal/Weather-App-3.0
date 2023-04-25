import React, { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=6cbfe909034d4279ac35500612e9e4f6&units=metric`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
      });
      setLocation("");
    }
  };

  return (
    <div className="app">
      <div className="search">
        <input
          type="text"
          value={location}
          onChange={(event) => {
            setLocation(event.target.value);
          }}
          placeholder="Enter city name..."
          onKeyPress={searchLocation}
        />
      </div>
      <div className="container"></div>
    </div>
  );
}

export default App;
