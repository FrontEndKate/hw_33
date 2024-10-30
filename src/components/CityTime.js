import React, {useEffect, useRef, useState} from 'react';
import {apiKey, baseUrl} from "../utils/constants";

const CityTime = ({cityName, offset, localOffset}) => {
    const [city, setCity] = useState(cityName);
    const [time, setTime] = useState('');
    const [inputCityName, setInputCityName] = useState('');

    const offsetRef = useRef(offset);
    const nameRef = useRef(city);   //if we get wrong name of city, the name of current time doesn't change

    const updateCityTime = (timezoneOffset) => {
        const currentDateTime = new Date();
        const cityTime = new Date(currentDateTime.getTime() + (timezoneOffset - localOffset) * 1000);
        setTime(cityTime.toLocaleTimeString());
    };

    useEffect(() => {
        if (city) {
            fetch(`${baseUrl}?q=${city}&appid=${apiKey}`)
                .then(response => {
                    if (response.ok) return response.json();
                    else throw new Error("City not found")
                })
                .then(data => {
                    const tempTimeZone = data.timezone
                    if(tempTimeZone && data.name !== city){
                        offsetRef.current = tempTimeZone;
                        nameRef.current = data.name;
                        setCity(data.name);
                    }
                })
                .catch(e => {

                    alert(e.message)});
        }
    }, [city]);

    useEffect(() => {
        const interval = setInterval(() => updateCityTime(offsetRef.current), 500); // if we use 1000 - get seconds out of sync in a browser
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <input type="text"
                   placeholder={'Enter your city'}
                   onChange={(e) => setInputCityName(e.target.value)}/>
            <button onClick={() => setCity(inputCityName)}>Get time</button>
            <h3>{nameRef.current}</h3>
            <h4>{time}</h4>

        </div>
    );
};

export default CityTime;