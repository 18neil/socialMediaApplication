import React from "react";
import './Post.css'
import {Followers} from "../../staticData/userData"
import Feed from "../Feed/Feed";

const Post = () =>{
    return(
        <div className="Post">

        {Followers.map((feed, id) => {
            return <Feed data={feed} id={id}/>
        })}

        </div>
    )
}
export default Post;
