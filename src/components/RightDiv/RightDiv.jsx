import React from "react";
import './RightDiv.css'
import { UilHome, UilBell, UilCommentAlt,  UilSetting } from '@iconscout/react-unicons';

const RightDiv = () =>{
    return(
        <div className="RightDiv">
            <div className="navIcon">
            <UilHome color="orange" title="Home" />
            <UilBell title="Notifications" />
            <UilCommentAlt  title="Comment" />
            <UilSetting  title="Settings" />
            </div>
        </div>
    )
}

export default RightDiv;