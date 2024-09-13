import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import { followUser } from "../../../../server/Controllers/UserContriller";
import {followUser} from '../../action/userAction'

const User = (person) => {
    const publicFolder = " http://localhost:5002/public/images/";
    const dispatch = useDispatch()
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


    const handelFollow = () =>{
dispatch(followUser 
    (person._id, user)
)
    }
    return(
        <div className="follower">
        <div>
        <img src={person.profilePicture?publicFolder+person.profilePicture:"https://i2.pngimg.me/thumb/f/720/c3f2c592f9.jpg"} alt="" className="followerImg"/>
        <div className="name">
            <span>{person.firstname}</span>
            <samp>{person.username}</samp>
        </div>

        </div>
        <button className="button fc-button" onClick={handelFollow}>Follow</button>
       </div>
    )
}

export default User;