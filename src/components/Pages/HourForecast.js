import React from 'react'
import  {useLocation} from 'react-router-dom'
import './HourForecast.css'

export default function HourForecast() {
    const location = useLocation();
   

    const Forecast =location.state.Forecast;
    const pathname =  location.pathname.slice(1,4);
    
    return (
        <div className="hourly">
            <h1>Hourly Forecast</h1>
            <div className="Hour_Temps">
                {Forecast.hourly.map((hourForecast,index)=>
                
                <div style={pathname==DayConverter(hourForecast.dt)?showStyle:hideStyle} key={index}>
                   
                     <p>{timeConverter(hourForecast.dt)}</p>
                    <p>{hourForecast.temp}&#8451;</p>
                </div>
               
               )} 

            </div>
            
        </div>
    )
}

// const Hour_tempStyle = {
//     background:"#78BFEB 100%",
//     display: "flex",
//     flexDirection: "row",
// }
const showStyle = {
    paddingLeft :"0px",
    marginRight: "10px"
}
 
const hideStyle = {
    display:"none",
}

function timeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp * 1000);
    
    var days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    var day = days[a.getDay()];

    var date = a.getDate();
    var hour = a.getHours();
    var time = day +' ' + hour+ ':00';
    return time;
  }
  function DayConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp * 1000);
    
    var days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    var day = days[a.getDay()];

 
    var time = day
    return time;
  }