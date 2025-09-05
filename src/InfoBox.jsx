import { useState } from "react"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css'
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({info}){

 const ini_url="https://images.unsplash.com/photo-1547963802-25f153e14080?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
 const Hot_url="https://images.unsplash.com/photo-1630264036459-4a928aec519a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
 const Cold_url="https://images.unsplash.com/photo-1612548424772-2713accb2c1c?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
 const Rain_url="https://images.unsplash.com/photo-1673510733735-bb76c7ee40d4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    return (<>
 <div className="InfoBox">

<div className="cardcontainer">
  <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height:140 }}
        image={info.humidity>80?Rain_url :info.temp>15?Hot_url :Cold_url}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{info.humidity>80?<ThunderstormIcon></ThunderstormIcon> :info.temp>15? < WbSunnyIcon></WbSunnyIcon>:<AcUnitIcon></AcUnitIcon>}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary'}} component={"span"}>
          <p>Temp = {info.temp}&deg;C</p>
           <p>Pressure = {info.pressure}</p>
           <p> Humidity={info. humidity}</p>
            <p>The Weather can be described {info.weather}  and feel like= {info.feels_like}&deg;C</p>
            <p>Min Temp={info.temp_min}&deg;C</p>
            <p>Max Temp={info.temp_max}&deg;C</p>

        </Typography>
      </CardContent>
     
    </Card>
    </div>
















 </div>
    
    </>)

}