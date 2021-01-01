import React from 'react'
import './Header.css'
import LOGO from './images/Airbnb-Logo.png'
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import {Link} from 'react-router-dom'
function Headder() {
    return (
       <header>
            
             <Link to="/">
             <div className="header_left">
                   <img  className="logo" src={LOGO} alt="airbnb"/>

                  
             </div>
             </Link>
            
             <div className="header_center">
                 
            <input className="search" type="text" />
            <SearchIcon/>
             </div>
             <div className="header_right">
                 <h4> become a host </h4>
                 <AccountCircleIcon/>
                 <div className="wrapper">
              <LanguageIcon className="language" />
              <ExpandMoreIcon/>
              </div>
             </div>
             
       </header>
    )
}

export default Headder
