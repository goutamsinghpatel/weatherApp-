import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

import './SearchBox.css'
import { useState } from 'react';

export default function SearchBox({ updateInfo}){
    let [city,setCity]=useState("")
    let [err,setErr]=useState(false)

     const apiUrl = import.meta.env.VITE_API_URL;
  const apiKey = import.meta.env.VITE_API_KEY;
    // const Api_key="a99bf2712585147fe642bfd8d7bdaeb6";
   
    // const Api_url=`https://api.openweathermap.org/data/2.5/weather`
   
        
   

  let getWeatherInfo = async()=>{
   
    

 try{
      let respons=await fetch(`${apiUrl}?q=${city} &appid=${apiKey}&units=metric`)
    let jsonRespone=await respons.json()
   let result={
    city:city,
      temp:jsonRespone.main.temp,
      humidity:jsonRespone.main.humidity,
      pressure:jsonRespone.main.pressure,
      feels_like:jsonRespone.main.feels_like,
      grnd_level:jsonRespone.main.grnd_level,
      sea_level:jsonRespone.main.sea_level,
      temp_max:jsonRespone.main.temp_max,
      temp_min:jsonRespone.main.temp_min,
      weather:jsonRespone.weather[0].description,
    }

return result;

 }catch(err){
 
  
throw err;
 }

  }
  
let handleCitys=(event)=>{
    setCity(event.target.value)
   
}
 let handleSubmit=async(event)=>{
try{
      event.preventDefault();
    setCity("");
let newInfo=  await  getWeatherInfo();
 updateInfo(newInfo)
}
catch(err){

setErr(true);
}


 }
    return(<>
   <div className='SearchBox'>  
  <form  onSubmit={handleSubmit} method="get">
          <TextField  id="city" label="Enter city" variant="outlined"  value={city}  onChange={handleCitys}required/>
          <br></br>
          <br>
          </br>
      <Button variant="contained"  type="submit"  >
        search
      </Button>
      {err && <p style={{
        color:"red"
      }}>no such place exist ! </p>}

</form>
   </div>
    
    </>)
}