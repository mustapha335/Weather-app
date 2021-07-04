import { useState } from "react";
import React from "react";
const api = {
  key : "20910cbc55687884f68bf2db40fd4eea",
  base: "https://api.openweathermap.org/data/2.5/"
}
function App() {


  const dateGen = (d) => {
    let months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let day= days[d.getDay()];
    let date = d.getDate();
    let month=months[d.getMonth()];
    let year= d.getFullYear();
    
    return ` ${day} ${date} ${month} ${year}`;
  }
  return (
    <div className="app warm">
      <main>
      <div className="search-box">
       <input type="text" className="search-bar" placeholder="Search.."></input>
      </div>
      <div className="location-box">
        <div className="location">London</div>
        <div className="date">{dateGen(new Date())}</div>
      </div>
      <div className="weather-box">
        <div className="temp">20°</div>
      
        <div className="weather">Windy</div>
      </div>

      </main>
    </div>
  );
}

export default App;
