import React, {useState} from 'react';
import { useHistory} from 'react-router-dom'
import DayGraph from './DayGraph'
import LocationOnIcon from '@material-ui/icons/LocationOn'


import './DayForecast.css';

export default function DayForecast(props) {


const history = useHistory();
const Forecast = props.forecast;
const [weather,icon,id,main]=Forecast.current.weather;


return ( 
    <div className="forecast_page">
         <div className="forecast_current">
             <div><LocationOnIcon /><strong>{props.name}</strong></div>
            <p> {timeConverter1(Forecast.current.dt)}</p>
<div className="forecast_Currentimage">  <img src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`} width="40px"/>
<h1>{Forecast.current.temp}&#8451;</h1></div>
<div> <strong>Feels like {Forecast.current.feels_like}.</strong><strong> {weather.description}</strong></div>
<div className="forecast_current_pressure"><strong>Pressure:</strong> {Forecast.current.pressure}hPa <strong>Humidity:</strong> {Forecast.current.humidity}% <strong>Dew point:</strong> {Forecast.current.dew_point}&#8451;</div>
             
             </div>

             <h2>8-Day Forecast</h2>
    <div className="forecast_container">
        
      
        {props.forecast.daily.map((Daily,i) =>
        
        Daily.weather.map((Weather, j) => (
            
            
        <div className="Forecast_card" key={i}>
            <button  style={btnStyle} onClick={()=>history.push({pathname:`/${pathnameConverter(Daily.dt)}`, state:{ Forecast }})}>
            <div className ="Card" >
                <p className="Day_Name"> {timeConverter(Daily.dt)}</p>

                <div><img src={`http://openweathermap.org/img/wn/${Weather.icon}@2x.png`} width="40px"/></div>
                <p className="temp"> {Daily.temp.max}&#8451; {Daily.temp.min}&#8451;</p>
                
            </div>
            </button>
            
        </div>
                   
                     
                     )  
                  ))
                
        }
                </div>

                </div>
    );
}

const btnStyle ={
    border: "none",
    background: "none",
    color:"none"

}
function timeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    var day = days[a.getDay()];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var time = day +' ' + date + ' ' + month ;
    return time;
  }
  function timeConverter1(UNIX_timestamp){
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    var day = days[a.getDay()];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var time = day +' ' + date + ' ' + month + ' '+ year ;
    return time;
  }

function pathnameConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp * 1000);
    var days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    var day = days[a.getDay()];
    var path = day;
    return path;
}


