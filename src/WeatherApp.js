import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link,Switch} from 'react-router-dom'
import './WeatherApp.css';
import DayForecast from './components/DayForecast'
import HourForecast from './components/Pages/HourForecast'
import Header from './components/Header';

export class WeatherApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoaded: false,
      error: null,
      forecast:[],
      long: -97.138374,
      lat: 49.895138,
      city_name:"Winnipeg"
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange=(e)=>{
    this.setState({city_name:e.target.value})

  }
  handleClick=(e)=>{
    e.preventDefault();
  const {city_name} = this.state;
  console.log(city_name);
  fetch(`https://api.opencagedata.com/geocode/v1/json?q=${city_name}&key=1649288bd9fe4070861949473eead893&language=en&pretty=1&limit=1&no_annotations=1`).then(res => res.json()).then((result)=>{
    this.setState({
     
      long: result.results[0].geometry.lng,
      lat:result.results[0].geometry.lat
    });
   
})
fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${this.state.lat}&lon=${this.state.long}&units=metric&exclude=daily.feels_like,hourly.feels_like,minutely&appid=45c4324da32cfbc1422ef2edefe14b6d`).then(res => res.json()).then((result)=>{
       this.setState({
         forecast : result
       }, ()=>{
       });

  })

}
 componentDidUpdate(){
   return(
     
       <DayForecast forecast={this.state.forecast}
                      name={this.state.city_name}/>
  
     
   )
 }


  componentDidMount(){
    const {long,lat} = this.state;
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=metric&exclude=daily.feels_like,hourly.feels_like,minutely&appid=45c4324da32cfbc1422ef2edefe14b6d`).then(res => res.json()).then((result)=>{
      this.setState({
        isLoaded: true,
        forecast : result
      });
    }, (error)=>{
      this.setState({
        isLoaded: true,
        error
      });
    })
  }
  
  render() {
    const {error, isLoaded, forecast} = this.state;
    if (error){
    return <div> Error: {error.message};</div> }
    else if(!isLoaded){
      return <div> Loading.......</div>
    }
    else{
      
    return (
      <Router>
      <div className="APP">
      <Route exact path ="/" >
      <Header  handleChange ={this.handleChange}
        handleClick ={this.handleClick}/>
          <div className="Forecast">
        {<DayForecast forecast={this.state.forecast}
                      name={this.state.city_name}/>
  }
                       </div> 
         
       
         </Route>

          <Route  path="/:dayId" >
              <React.Fragment>
              <Header  handleChange ={this.handleChange}
 handleClick ={this.handleClick}/>
            <HourForecast/>
               </React.Fragment>
             </Route>  
      </div>
      </Router>
    );
          
    
  }
}
  
// return(
// <div>
//   <Header  handleChange ={this.handleChange}
//  handleClick ={this.handleClick}/>
//   <p>{this.state.long}</p> 
//   <p>{this.state.lat}</p> 
//   <p>{this.state.city_name}</p> 
//   </div>);

}


export default WeatherApp;

