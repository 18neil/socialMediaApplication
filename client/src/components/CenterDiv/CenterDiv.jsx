import React from "react";
import './CenterDiv.css'
import PostShare from "../PostShare/PostShare";
import Post from "../Post/Post";

const CenterDiv = () => {
    return(
        <div className="centerDiv">
           <PostShare/>
           <Post/>
        </div>
    )
}
export default CenterDiv;
