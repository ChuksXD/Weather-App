import React from 'react'
import { Link } from 'react-router-dom'
import SearchIcon from "@material-ui/icons/Search"
import './Header.css'

export default function Header({handleChange,handleClick}) {
    return (
        <nav className="header">
             <Link to="/"> 
               <div className="my_header">
                <img className="header_logo" 
                src= "https://seeklogo.com/images/W/weather-ios-logo-69EE212483-seeklogo.com.png"/>
                <p className="header_text">My Weather App</p>
                </div>
             </Link> 
            <div className="header_search">
            <input onChange={handleChange} type="text" className="header_searchInput"  placeholder="Enter city to get weather"/>
            <button onClick={handleClick}><SearchIcon className="header_searchIcon" /></button>
            </div>
            
        </nav>
    )
}
