import React from 'react'
import styled from 'styled-components'

const WeatherResults = ({ data, error }) => {

    
      if (error) return <h1> Error found</h1>;
    
      if (data) {
        <h1>successfully loaded</h1>
        console.log(data);
      }
    
    

    return (
        <div>
      
        {data && (
          <>
            <Header><h1> {data.getCityByName.name}, {data.getCityByName.country} </h1></Header>
                <TempContainer>
                    <h1>Temperature: {data.getCityByName.weather.temperature.actual.toFixed() - Math.floor(273.15)}</h1>
                    <h1>Min Temp: {data.getCityByName.weather.temperature.min.toFixed() - Math.floor(273.15)}</h1>
                    <h1>Max Temp: {data.getCityByName.weather.temperature.max.toFixed() - Math.floor(273.15)}</h1>
                </TempContainer>
                <InformationContainer>
                    <h1>Description: {data.getCityByName.weather.summary.description}</h1>
                    <h1>Wind Speed: {data.getCityByName.weather.wind.speed}</h1>
                    <h1>Wind Temp: {data.getCityByName.weather.wind.deg}</h1>
                    <h1>Humidity: {data.getCityByName.weather.clouds.humidity} %</h1>
                </InformationContainer>
          </>
        )}
            
        </div>
    )
}

export default WeatherResults

const Header = styled.div`
    text-align: center;
    font-size: 30px;
`

const TempContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, auto);
    align-items: center;
    justify-items: center;
`

const InformationContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, auto);
    align-items: center;
    justify-items: center;

    h1 {
        font-size: 20px;
    }
`