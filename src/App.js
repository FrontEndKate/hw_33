import React from 'react';
import {sities} from "./utils/constants";
import CityTime from "./components/CityTime";

const App = () => {

    const localTimezone = new Date().getTimezoneOffset();
    const localOffsetInHours = -localTimezone * 60 ; // get gmtOffset local system in sec
    return (
        <div className="app-container">
            {sities.map((s) => (
                <CityTime
                    key={s.city}
                    cityName={s.city}
                    offset={s.gmtOffset}
                    localOffset = {localOffsetInHours}
                />
            ))}
        </div>
    );
};

export default App;