import React from "react";
import './TrendCard.css'
import {Followers} from "../../staticData/userData.js" 

const TrendCard = () => {
    return(
        <div className="TrendCard">

            <h3>Treands for You</h3>
            {Followers.map((user)=>{
                return(
                    <div className="trend" key={user.name}>
                        <span>#{user.name }</span>
                        <span>{user.share}k shares</span>
                    </div>
                )

                

            })}
        </div>

    )
}

export default TrendCard;