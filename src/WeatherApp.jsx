import SearchBox from "./SearchBox"

import InfoBox from './InfoBox';
import { useState } from "react";
export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo]=useState({
          city:"delhi",
      temp:"28.62",
      humidity:"75",
      pressure:"1005",
      feels_like:"32.77",
      grnd_level:"980",
      sea_level:"1005",
      temp_max:"28.62",
      temp_min:"28.62",
      weather:"clear sky",
    })
    let updateInfo=(newInfo)=>{
setWeatherInfo(newInfo)
    }
    return(<>
     <div style={{textAlign:"center"}}>
       <h1> Weather-app </h1>
       <SearchBox updateInfo={updateInfo} />
       <InfoBox info={weatherInfo}/>
     </div>
    
    
    </>)
}