
import './App.css';
import Navbar from './components/Navbar';
import Weather from './components/Weather';
import React, { useState } from "react";




function App() {
  let apiKey = process.env.REACT_APP_WEATHER_API
  const [Mode, setMode] = useState('light')
  const toggleMode = () =>{
    if(Mode === 'light')
    {
      setMode('dark')
      document.body.style.backgroundColor = 'black'
      document.body.style.color = 'white'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
    }
  }
  return (
    <div className="App">
        <Navbar Mode={Mode} toggleMode={toggleMode}/>
        <Weather apiKey={apiKey} Mode={Mode}/>
    </div>
  );
}

export default App;
