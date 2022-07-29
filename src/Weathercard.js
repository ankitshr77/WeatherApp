import React, { useEffect, useState } from 'react'

const Weathercard = ({tempInfo}) => {
    const [weatherState, setWeatherState]= useState("");

    const {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset
      } = tempInfo;

      useEffect(()=>{
        if(weathermood){
            switch(weathermood){
                case "Clouds": 
                setWeatherState("fal fa-sun-cloud icon1");
                break;
                case "Haze": 
                setWeatherState("fad fa-fog icon1");
                break;
                case "Rain": 
                setWeatherState("fas fa-cloud-rain icon1");
                break;
                case "Mist": 
                setWeatherState("fas fa-smog icon1");
                break;
                default: 
                setWeatherState("fas fa-sun icon1");
                break;
            }
        }
      },[weathermood])

    //   converting second to time
    let sec = sunset;
    let date = new Date(sec*1000);
    let timeStr = `${date.getHours()}:${date.getMinutes()}`;
      
  return (
    <>
     <div className='container midbox'>

<div className='mainicon'>
<i className={`${weatherState}`}></i>
</div>

<div className='container-fluid midbox2'>
<div className='row'>
  <div className='col-md-7 column1'>
    <div className='row mt-3'>
      <div className='col-md-6 text-light '>
        <h1>{temp}&deg;C</h1>
      </div>

      <div className='col-md-4 text-light'>
        <h2>{weathermood}</h2>
        <p>{name},{country}</p>
      </div>
    </div>
    
  </div>

  <div className='col-md-4 column2'>
    <div className='date mt-3 text-light'>
      {/* <h4 className='text-light'>7/18/2021,</h4>
      <h4 className='text-light'>3:39:39PM</h4> */}
      <h4>{new Date().toLocaleString()}</h4>

    </div>
  </div>
</div>
</div>

<div className='row'>
<div className='col-md-3 d-flex'>
<i class="fas fa-sun lasticon me-1"></i>
<h6>{timeStr} PM <br/> <span className='lastdetail'>Sunset</span></h6>
</div>

<div className='col-md-3 d-flex'>
<i class="fas fa-tint lasticon me-1"></i>
<h6>{humidity} PM <br/> <span className='lastdetail'>Humidity</span></h6>
</div>

<div className='col-md-3 d-flex'>
<i class="fas fa-cloud lasticon me-1"></i>
<h6>{pressure} PM <br/> <span className='lastdetail'>Pressure</span></h6>
</div>

<div className='col-md-3 d-flex'>
<i class="fas fa-wind lasticon me-1"></i>
<h6>{speed} PM <br/> <span className='lastdetail'>Speed</span></h6>
</div>
</div>



</div>

    </>
  )
}

export default Weathercard
