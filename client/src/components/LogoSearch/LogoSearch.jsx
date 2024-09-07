import React from "react";
import logo from '../../img/logo.png'
import './LogoSearch.css'

import {UilSearch} from '@iconscout/react-unicons'

const LogoSearch = () =>{
    return(

        <div className="LogoSearch"> 
        <span>Mango Talk</span>
        <div className="Search">
        <input type="text" placeholder="#search" />
        <div className="S-icon">
        <UilSearch/>
        </div>
        
        </div>


        </div>
        
    )
}

export default LogoSearch;