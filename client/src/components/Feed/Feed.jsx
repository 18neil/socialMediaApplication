import React, { useState } from "react";
import './Feed.css';
import {  UilShareAlt, UilThumbsUp,UilCommentAlt, UilThumbsDown } from '@iconscout/react-unicons';
import { useSelector } from "react-redux";
import { likePost } from "../../api/PostRequest";
// import { likePost } from "../../../../server/Controllers/PostControlller";

const Feed = ({data}) => {


    const decodeJwt = (token) => {
        try {
          const [, payload] = token.split('.');
          const decoded = JSON.parse(atob(payload));
          return decoded;
        } catch (error) {
          console.error('Error decoding token:', error);
          return null;
        }
      };

    const user = decodeJwt(useSelector((state) => state.auth.authData))

    const [likeed, setLiked] = useState(data.likes.includes(user.id))
    const [likes, setLikes] = useState(data.likes.length)

    const handelLike = () =>{
        setLiked((prev) => !prev )
        likePost(data._id, user.id)
        likeed?setLikes((prev) => prev -1):setLikes((prev)=>prev+1)
    }
    return(
        <div className="Feed">

            {/* <img src={data.img ? process.env.REACT_APP_PUBLIC_FOLDER + data.image :""} alt="" /> unable to resolve process file value */} 
            <img src={data.image ? "http://localhost:5002/images/" + data.image :""} alt="" />


            <div className="feedReact">
              {likeed ? <UilThumbsUp color="green" title="Like"  style={{cursor:"pointer"}} onClick={handelLike}/> :  <UilThumbsDown color="red" title="Dislike" style={{cursor:"pointer"}} onClick={handelLike}/>}
             <UilCommentAlt  title="Comment" />
             <UilShareAlt title="Share" />
            </div>
            <span>{likes} </span>
            <div className="detai"> 
                <span><b>{data.name} </b></span>
                <span> {data.desc}</span>
            </div>
        </div>
    )
}
 
export default Feed;