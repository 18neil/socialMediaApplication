import React, { useEffect } from "react";
import './Post.css'
// import {Followers} from "../../staticData/userData"
import Feed from "../Feed/Feed";

import {useDispatch, useSelector} from 'react-redux'
import { getTimelinePost } from "../../action/postAction";

const Post = () =>{
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

    const dispatch = useDispatch()
    const user = decodeJwt(useSelector((state) => state.auth.authData))
    
    


    const {posts, loading} = useSelector((state) => state.postReducer)

    useEffect(()=>{
        dispatch(getTimelinePost(user.id))
    },[])
    return(
        <div className="Post">

        {loading?"Fatching Posts" :
        posts.map((feed, id) => {
            return <Feed data={feed} id={id}/>
        })}

        </div>
    )
}
export default Post;
