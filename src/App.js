import { useEffect, useState } from 'react';
import './App.css';
import Weathercard from './Weathercard';

function App() {
  const [city, setCity] = useState('Kathmandu')
  const [tempInfo, setTempInfo] = useState({});
  
  const getWeatherInfo = async ()=>{
    try{
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=f69f264cc06ec08f6c71c3ca11b1e36e`

      const res = await fetch(url);
      const data = await res.json();

      const {temp, humidity, pressure } = data.main;
      const {main:weathermood} = data.weather[0];
      const {name} = data;
      const {speed} = data.wind;
      const {country, sunset} = data.sys;

      const myNewWeatherInfo = {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset
      };

      setTempInfo(myNewWeatherInfo);


    } catch(error) {
      console.log(error);
    }
  };

  useEffect(()=>{
    getWeatherInfo();
  },[]) 


  return (
    <>
      <div className='container topbox'>
        <h1 className='text-light mb-4'>CITIES WEATHER APP</h1>
        <input onChange={(e)=>setCity(e.target.value)} type="text" placeholder='&nbsp;&nbsp;&nbsp;Enter the City Here' className='inputbox' value={city}></input>
        <button onClick={getWeatherInfo} className='btn btn-success topbtn'>Search</button>
        </div>

        <Weathercard tempInfo={tempInfo}/>
    </>
  );
}

export default App;
