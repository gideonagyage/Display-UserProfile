import React, { useState } from "react";
import UserProfile from "./UserProfile";
import './App.css';

function App() {
  const [name, setName] = useState("John Doe");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>User Profile Management</h1>
        <UserProfile name = {name} />
        <input type="text" value={name} onChange={handleChange} />
      </header>
    </div>
  );
}

export default App;