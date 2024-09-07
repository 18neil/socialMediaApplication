import React from "react";
import {Followers} from '../../staticData/userData'

import './FollowerCard.css'


 const FollowerCard = () =>{
    return(
    <div className="FollowersCard">
      <h3>Who is following You</h3>

    {Followers.map((user, id) => (

       <div className="follower">
        <div>
        <img src={user.img} alt="" className="followerImg"/>
        <div className="name">
            <span>{user.name}</span>
            <samp>{user.username}</samp>
        </div>

        </div>
        <button className="button fc-button">Follow</button>
       </div>
        ))}
      
    </div>
    )
 }

 export default FollowerCard