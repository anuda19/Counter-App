import React from 'react';
import axios from 'axios'
import { useState} from 'react';
// import ContriesData from './ContriesData';

const CovidData = () => {
    const [covidData, setCovidData] = useState([])
    const [data, setData] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        const options = {
            method: 'GET',
            url: `https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/asia/?q=${data}`,
            headers: {
                'X-RapidAPI-Host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com',
                'X-RapidAPI-Key': '237425401amsha7ec5fa9e099898p150074jsn4d95a7fcf4b2'
            }
        };
        axios.request(options).then((response) => {
            setCovidData(response.data)
            setLoading(false)
        }).catch((error) => {
            console.error(error);
        });
    }

    
    const handleData = () => {
        return (
            <div>
                <form className="d-flex m-5">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={data} onChange={e => setData(e.target.value)} />
                    <button className="btn btn-outline-success" type="submit" onClick={handleSubmit}>Search</button>
                </form>
                {covidData.map((countries) => {
                    const { id, Country, Continent, TotalCases, NewCases, TotalDeaths, NewDeaths, TotalRecovered, NewRecovered, ActiveCases, TotalTests, Population } = countries
                    return (
                        <div key={id}>
                            <h4>{Country}</h4>
                            <h4>{Continent}</h4>
                            <h4>{TotalCases}</h4>
                            <h4>{NewCases}</h4>
                            <h4>{TotalDeaths}</h4>
                            <h4>{TotalRecovered}</h4>
                            <h4>{ActiveCases}</h4>
                            <h4>{Population}</h4>
                        </div>
                    )
                })}
            </div>
        )
    }
    return (
        <div>
            {handleData()}

        </div>
    );
}


export default CovidData;