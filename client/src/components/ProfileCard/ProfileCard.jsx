import React from "react";
import './ProfileCard.css'
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const ProfileCard = ({location}) => {

    // console.log(profilePage)

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
    const publicFolder = " http://localhost:5002/public/images/";
    
    const posts = useSelector((state) => state.postReducer.posts)

    // const profilePage = false;

    return(
        <div className="ProfileCard">
            <div className="ProfileImages">
                <img src={user.coverPicture?publicFolder+user.coverPicture:"https://c1.wallpaperflare.com/preview/920/143/681/tyrol-zum-senner-zillertal-zillertal-nature.jpg"} alt=""/>
                <img src={user.profilePicture?publicFolder+user.profilePicture:"https://i2.pngimg.me/thumb/f/720/c3f2c592f9.jpg"} alt=""/>

            </div>

            <div className="ProfileName">
                    <span>{user.firstname} {user.lastname}</span>
                    <span>{user.workAt? user.workAt : "Write About your self"}</span>     
            </div>

            <div className="folloeStatus">
                <hr />
                <div>
                    <div className="follow">
                        <span>{user.following.length}</span>
                        <span>Followings</span>
                    </div>
                    <div className="line"></div>

                    <div className="follow">
                        <span>{user.followers.length}</span>
                        <span>Follower</span>
                    </div>

                    {location==='profilePage' && (
                        <>
                        <div className="vl">

                        </div>
                        <div className="follow">
                        <span>{posts.filter((post)=>post.userId === user.id).length}</span>
                        <span>Post</span>
                    </div>
                        </>
                    )}
                </div>
                <hr />

            </div>

            {location==='profilePage' ? "" :  <span>

                <Link style={{textDecoration:"none", color:"orange"}} to = {`/profile/${user.id}`}> My profile </Link> 
                </span> }

           

        </div>
    )
}

export default ProfileCard