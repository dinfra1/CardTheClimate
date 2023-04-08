import axios from 'axios';
import React, { useEffect, useState } from 'react'

const SearchCity = ({setWaether}) => {

    const [enter, setEnter] = useState();
    const [error, setError] = useState(false);

    useEffect(() => {
      
        if(!enter) return;

        const key = "7ff78a04e7f30fd0bfdcc68b8ee108bd";
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${enter}&appid=${key}`)
        .then(res => {
            setWaether(res.data);
            setError(false);
        })
        .catch(err => {
            setError(true);
        })
    }, [enter])

    const handlerShear = e => {
        e.preventDefault();
        setEnter(e.target.name.value)
    }
    

  return (
    <div className='From_city'>

        <form onSubmit={handlerShear}>
            <input id='name' placeholder='Enter name City' type="text" required />
            <button className='Button_Shear'>Search City</button>
        </form>
        {
            error ? 
            <p className='Error_city'>
                Sorry, the City DOESN'T exist
            </p>
            : ""
        }

    </div>
  )
}

export default SearchCity