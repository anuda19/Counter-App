import React from 'react';
import './TotalData.css'
import { useState } from 'react';
import axios from 'axios';

const TotalData = () => {
    const [cases, setCases] = useState([])

    const fetchData = () => {
        const options = {
            method: 'GET',
            url: 'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/world',
            headers: {
              'X-RapidAPI-Host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com',
              'X-RapidAPI-Key': '237425401amsha7ec5fa9e099898p150074jsn4d95a7fcf4b2'
            }
        };

        axios.request(options).then((response) => {
            setCases(response.data)
        }).catch((error) => {
            console.error(error);
        });
    }
    fetchData()
    return (
        <div className='container my-4'>
            {cases.map((cas) =>{
                const {ActiveCases, TotalCases, NewCases, TotalRecovered, TotalDeaths, NewDeaths} = cas

                return(
                    <div className="container" key={cas.id}>
                    <div className="box text-center"><h3>TOTAL CASES</h3><h4 className='text-primary'>{TotalCases}</h4></div>
                    <div className="box text-center"><h3>NEW CASES</h3><h4 className='text-primary'>{NewCases}</h4></div>
                    <div className="box text-center"><h3>ACTIVE CASES</h3><h4 className='text-warning'>{ActiveCases}</h4></div>
                    <div className="box text-center"><h3>TOTAL RECOVERED</h3><h4 className='text-success'>{TotalRecovered}</h4></div>
                    <div className="box text-center"><h3>TOTAL DEATHS</h3><h4 className='text-danger'>{TotalDeaths}</h4></div>
                    <div className="box text-center"><h3>NEW DEATHS</h3><h4 className='text-danger'>{NewDeaths}</h4></div>
                    </div>
                )
            })}
        </div>
    );
}


export default TotalData;