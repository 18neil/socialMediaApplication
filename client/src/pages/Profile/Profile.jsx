import React from "react";
import './Profile.css'
import ProfileLeft from "../../components/ProfileLeft/ProfileLeft";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import Post from "../../components/Post/Post";
import PostShare from "../../components/PostShare/PostShare"
import RightDiv from "../../components/RightDiv/RightDiv"

const Profile = () =>{
    return(
        <>
       <div className="Profile">
        <ProfileLeft/>

        <div className="ProfileCenter">
            <ProfileCard/>
            <PostShare/>
           <Post/>
        </div>
        <RightDiv/>
       </div>
        </>
    )
}

export default Profile;