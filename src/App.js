
import './App.css';
import Navbar from './components/Navbar';
import Weather from './components/Weather';



function App() {
  let apiKey = process.env.REACT_APP_WEATHER_API
  return (
    <div className="App">
        <Navbar/>

        <Weather apiKey={apiKey}/>
    </div>
  );
}

export default App;
