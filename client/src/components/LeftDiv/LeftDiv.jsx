import React from "react";
import LogoSearch from "../LogoSearch/LogoSearch";
import './LeftDiv.css'
import ProfileCard from "../ProfileCard/ProfileCard";
import FollowerCard from "../FollowersCard/FollowerCard";

const LeftDiv = () =>{
    return (
        <div className="LeftDiv">
        <LogoSearch/>   
        <ProfileCard location="homepage"/>
        <FollowerCard/>
        </div>
    )
}

export default LeftDiv;