import React, { useState } from 'react'

const WheatherCard = ({waether,temperature}) => {

    const [StateTemperarure, setStateTemperarure] = useState(true)

    const handlerTemperatureF = () =>{
      setStateTemperarure(!StateTemperarure)
    }

  return (
    <article className='Article_'>
        <h1 className='Title_'>Weather App</h1>
        <h4 className='NameCity'> Ciudad {waether?.name}, {waether?.sys.country}</h4>
        <section className='Info_'>
          <header>
            <img className="imgCondition" src={`https://openweathermap.org/img/wn/${waether?.weather[0].icon}@4x.png`} alt='' />
          </header>
        <ul>
            <li>Weather Condition: <b>{waether?.weather[0].description}</b></li>
            <li>Wind Speed: <b>{waether?.wind.speed} m/s</b></li>
            <li>Cloud Porcentage: <b>{waether?.clouds.all}%</b></li>
           <li>Atmospheric Pressure : <b>{waether?.main.pressure} hPa</b></li>
        </ul>
        </section>
        <h2>{
          StateTemperarure
          ? `${temperature?.celcius} °C`
          : `${temperature?.farenheit} °F`
          }</h2>
        <button className='Butoom_' onClick={handlerTemperatureF}>Changue to {StateTemperarure ? '°F': '°C'}</button>
    </article>
  )
}

export default WheatherCard