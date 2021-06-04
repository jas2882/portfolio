// import "./Home.css";
import SiteContentAPI from '../../API/SiteContentAPI';
import {AboutCard, ValuesCard} from "../cards/cards";
import Navbar from "../navbar/navbar";
import React, {useState, useEffect} from 'react';


const Home = () => {

  const [colorTheme, setColorTheme] = useState('theme-1')

  useEffect(() => {
    const currentThemeColor = localStorage.getItem('theme-color');
    if (currentThemeColor) {
      setColorTheme(currentThemeColor);
    }
  }, [])

  const handleClick = (theme) => {
    setColorTheme(theme);
    localStorage.setItem('theme-color', theme)
  }
  return (
    <div className={`App ${colorTheme}`}>
    <h1>hi</h1>
    </div>
  )
}
export default Home;

// <div className="text-wrapper font-style-10">
//   <h1 className="text-item" id={"equine"}>Equine</h1>
//   <h1 className="text-item" id={"harmony"}>Harmony</h1>
//   <h1 className="text-item" id={"ranch"}>Ranch</h1>
// </div>