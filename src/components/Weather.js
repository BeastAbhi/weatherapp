import React, { useEffect, useState } from "react";
import LoadingBar from 'react-top-loading-bar'

function Weather(props) {
  const [Data, setData] = useState([]);
  const [city, setCityName] = useState("pune");
  const [name, setName] = useState("");
  const [progress, setProgress] = useState(0)


  let getCity = (event) => {
    setName(event.target.value);
  };
  let setCity = () => {
    setCityName(name);
  };

   const getData = async () => {
    setProgress(10)
    const url = `https://api.weatherapi.com/v1/forecast.json?key=${props.apiKey}&q=${city}`;
    setProgress(30)
    let data = await fetch(url);
    let parseData = await data.json();
    setData(parseData);
    setProgress(50)
    setProgress(100)

  };
  useEffect(() => {
      getData();
    // eslint-disable-next-line
  },[city]);
  if(Data.location === undefined)
  {
    return(
      <div>
        <form className="d-flex mt-3">
        <input
          className="form-control me-2  ml-3"
          style={{ maxWidth: "20rem", backgroundColor: props.Mode === 'light'? 'white':'gray', color: props.Mode === 'light'? 'rgba(0, 0, 0, 0.78)': 'rgba(255, 255, 255, 0.70)' }}
          placeholder="Enter city Name"
          value={name}
          onChange={getCity}
        />
        <button
          type="button"
          className="btn btn-outline-info"
          onClick={setCity}
        >
          Search
        </button>
      </form>
        <p><b className="text-danger">City not found</b> please Enter a valid city</p>
      </div>
    )
  }
  return (

    <div>
      <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <form className="d-flex mt-3">
        <input
          className="form-control me-2  ml-3"
          style={{ maxWidth: "20rem", backgroundColor: props.Mode === 'light'? 'white':'gray', color: props.Mode === 'light'? 'rgba(0, 0, 0, 0.78)': 'rgba(255, 255, 255, 0.70)' }}
          placeholder="Enter city Name"
          value={name}
          onChange={getCity}
        />
        <button
          type="button"
          className="btn btn-outline-info"
          onClick={setCity}
        >
          Search
        </button>
      </form>
      <center>
            <div className="card w-75 mb-3 mt-4" style={{textAlign: "left", maxWidth: "40rem",backgroundColor: props.Mode === 'light'? 'white':'rgba(0, 166, 255, 1)', color: props.Mode === 'light'? 'rgba(0, 0, 0, 0.78)': 'rgba(255, 255, 255, 0.70)' }}>
            <img style={{position: 'absolute', zIndex: '0',height:"100%", maxWidth:"100%"}} src={Data.current.condition.icon} alt={Data.current.condition.icon}></img>
              <div style={{zIndex: '1'}}>

              <div className="card-body">
                <h1 className="card-title mb-0">{Data.location.name}</h1>
                <p className="card-text"><small>{Data.location.region} - {Data.location.country}</small></p>
                  <h2>{Data.current.temp_c}&deg;C - {Data.current.condition.text}</h2>
                  <h4 className='mb-0'>
                    Wind: 
                  </h4>
                  <p className='mb-0'>{Data.current.wind_kph}kmph</p>
                  <p className='mb-0'>Degree: {Data.current.wind_degree} - Direction: {Data.current.wind_dir}</p>
                  <p className='mb-0'>Pressure: {Data.current.pressure_mb}mb </p>
                  <p className='mb-0'>Precipitation: {Data.current.precip_mm}mm</p>
                  <p className='mb-0'>Humidity: {Data.current.humidity} </p>
                  <p className='mb-0'>Cloud: {Data.current.cloud}</p>
                  <p className='mb-0'>UV: {Data.current.uv}</p>
                  <p className='mb-0'>Gust: {Data.current.gust_kph}kmph</p>
              </div>

              </div>
            </div>

            <div className="card w-75 mb-3 mt-4" style={{textAlign: "left", maxWidth: "40rem",backgroundColor: props.Mode === 'light'? 'white':'rgba(0, 166, 255, 1)', color: props.Mode === 'light'? 'rgba(0, 0, 0, 0.78)': 'rgba(255, 255, 255, 0.70)'}}>
              <div className="card-body">
                  <h4>Max Temperature - {Data.forecast.forecastday[0].day.maxtemp_c}&deg;C</h4>
                  <h4>Min Temperature - {Data.forecast.forecastday[0].day.mintemp_c}&deg;C</h4>
                  <h4>Average Temperature - {Data.forecast.forecastday[0].day.avgtemp_c}&deg;C</h4>
                  <h3 className='mb-0'>
                    Wind 
                  </h3>
                  <p className='mb-0'>Max wind speed - {Data.forecast.forecastday[0].day.maxwind_kph}kmph</p>
                  <p className="mb-0">Chance of rain - {Data.forecast.forecastday[0].day.daily_chance_of_rain}%  {Data.forecast.forecastday[0].day.condition.text}</p>
                  <h3>Astrology </h3>
                  <p className="mb-0">Sunrise - {Data.forecast.forecastday[0].astro.sunrise}</p>
                  <p className="mb-0">Sunset - {Data.forecast.forecastday[0].astro.sunset}</p>
                  <p className="mb-0">Moonrise - {Data.forecast.forecastday[0].astro.moonrise}</p>
                  <p className="mb-0">Moonset - {Data.forecast.forecastday[0].astro.moonset}</p>
                  <p className="mb-0">Moon Phase - {Data.forecast.forecastday[0].astro.moon_phase}</p>
              </div>

              </div>
        </center>
    </div>
  );
}
export default Weather;
