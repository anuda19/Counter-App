import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const GenCovidData = () => {
    const [covidData, setCovidData] = useState([])

    const handleSubmit = () =>{
        axios.get('https://api.covid19api.com/summary')
        .then(res=>{
            setCovidData(res.data.Countries)
            console.log(res.data.Countries);
        })
    }

    return (
        <div>
            <div>{covidData.length} Countries</div>
            {covidData.map((country) => {
                const {ID, Country, CountryCode, Date, NewConfirmed, NewDeaths, NewRecovered, TotalConfirmed, TotalDeaths, TotalRecovered}= country
                return(
                    <h3 key={ID}>{Country}</h3>
                )
            })}
            <button onClick={handleSubmit}>Get Data</button>
        </div>
    );
}

export default GenCovidData;