import { useState } from "react";
import React from "react";
const api = {
  key : "20910cbc55687884f68bf2db40fd4eea",
  base: "https://api.openweathermap.org/data/2.5/"
}
function App() {
  return (
    <div className="app warm">
      <main>
      <div className="search-box">
      <input type="text" className="search-Bar" placeholder="Search.."></input>

      </div>

      </main>
    </div>
  );
}

export default App;
