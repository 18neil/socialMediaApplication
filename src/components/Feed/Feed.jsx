import React from "react";
import './Feed.css';
import { 
    UilShareAlt, UilThumbsUp,UilCommentAlt, UilThumbsDown } from '@iconscout/react-unicons';

const Feed = ({data}) => {
    return(
        <div className="Feed">
            <img src={data.img} alt="" />

            <div className="feedReact">
              {data.liked ===true ?  <UilThumbsUp color="green" title="Like" /> :  <UilThumbsDown color="red" title="Dislike" />}
             <UilCommentAlt  title="Comment" />
             <UilShareAlt title="Share" />
            </div>
            <span>{data.likes} Likes</span>
            <div className="detai">
                <span><b>{data.name} </b></span>
                <span> {data.desc}</span>
            </div>
        </div>
    )
}
 
export default Feed;