// import ThemeList from "../../Theme/ThemeBtn";
import logo from '../../logo.svg'
import React, {Fragment, useContext} from "react";
import {Link} from "react-router-dom";
import {ThemeContext} from '../../API/context'
import ThemeToggle from "../theme-toggle";

const Navbar = () => {

  let theme = useContext(ThemeContext);

  const {isLightTheme, light, dark} = theme;
  theme = isLightTheme ? light : dark;

  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <img src={logo} style={{width: '100px'}}/>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"/>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="active nav-item  main-nav-links" id="navbarToggleExternalContent">
              <Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item main-nav-links"><Link className="nav-link" to="/blog">Blog</Link></li>
          </ul>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item main-nav-links"><Link className="nav-link" to="/services">Services</Link></li>
            <li className="nav-item main-nav-links"><Link className="nav-link" to="/contact">Contact</Link></li>
          </ul>
        </div>
      </nav>
    </Fragment>
  )
}

export default Navbar;

