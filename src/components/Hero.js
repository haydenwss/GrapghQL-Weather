import React from 'react'
import styled from 'styled-components';

const Hero = () => {
    return (
        <HeroContainer>
            <h1>Weather App.</h1>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        </HeroContainer>
    )
}

export default Hero

const HeroContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    margin-top: 20px;
    text-align: center;
    background-color: #FFE849;
    color: #A9B1A1;
    height: 500px;
    width: 100%;
    background-position: center;
    padding-top: 100px;
    border-radius: 15px;
    
    h1 {
        font-size: 100px;
    }

    p {
        color: #4D4D3D;
        margin: 50px 100px;
    }
`
