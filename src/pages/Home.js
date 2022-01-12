import React, { useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { GET_WEATHER_QUERY } from "../graphql/Queries";
import Hero from '../components/Hero';
import WeatherResults from '../components/WeatherResults';
import styled from 'styled-components';

function Home() {
  const [citySearched, setCitySearched] = useState("");
  const [getWeather, { data, error }] = useLazyQuery(GET_WEATHER_QUERY, {
    variables: { name: citySearched },
  });

  if (error) return <h1> Error found</h1>;
    
      if (data) {
        console.log(data);
      }

  return (
    <div className="home">
        <Hero />
        <SearchContainer>
            <h1>Search For Weather</h1>
            <input
                type="text"
                placeholder="City name..."
                onChange={(event) => {
                setCitySearched(event.target.value);
                }}
            />
            <button onClick={() => getWeather()}> Search</button>
        </SearchContainer>
      
      <div className="weather">
        <WeatherResults data={data} />
      </div>
    </div>
  );
}

export default Home;

const SearchContainer = styled.div`
    margin: 10px;

    h1 {
        font-size: 15px;
    }
`