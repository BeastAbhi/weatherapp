import React, { useEffect, useState } from 'react'

export default function Weather(props) {
 
  let [Data, setData] = useState([])
  const [city, setCityName] = useState('pune')
  let [name, setName] = useState('')

  let getCity = (event) =>{
     setName(event.target.value)
  }  
  let setCity = () =>{
    setCityName(name)
     console.log(city)
  }
   const getData = async () =>{
    let url = `https://api.weatherapi.com/v1/forecast.json?key=${props.apiKey}&q=${city}`;

    fetch(url).then(res => res.json())
                .then(Data =>{
                    setData(Data)
                })
                }
    useEffect(()=>{
        getData()
      },[city])
  return (
    <div>
        <form className="d-flex">
        <input className="form-control me-2" style={{maxWidth: "20rem"}} placeholder="Enter city Name" value={name}  onChange={getCity}/>
        <button type="button" className="btn btn-outline-info" onClick={setCity}>Search</button>
      </form>
        <center>
            <div className="card w-75 mb-3 mt-4" style={{textAlign: "left", maxWidth: "40rem"}}>
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
        </center>

    </div>
  )
}
