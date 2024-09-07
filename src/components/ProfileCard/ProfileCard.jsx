import React from "react";
import Cover from "../../img/cover.jpg"
import ProfilePic from "../../img/profile.jpg"
import './ProfileCard.css'


const ProfileCard = () => {

    const profilePage = true;

    return(
        <div className="ProfileCard">
            <div className="ProfileImages">
                <img src={Cover} alt=""/>
                <img src={ProfilePic} alt=""/>
            </div>

            <div className="ProfileName">
                    <span>Shubham Gupta</span>
                    <span>Full Stack Developer</span>     
            </div>

            <div className="folloeStatus">
                <hr />
                <div>
                    <div className="follow">
                        <span>434</span>
                        <span>Followings</span>
                    </div>
                    <div className="line"></div>

                    <div className="follow">
                        <span>1</span>
                        <span>Follower</span>
                    </div>

                    {profilePage && (
                        <>
                        <div className="vl">

                        </div>
                        <div className="follow">
                        <span>3</span>
                        <span>Post</span>
                    </div>
                        </>
                    )}
                </div>
                <hr />

            </div>

            {profilePage ? '' :  <span>
                My profile
            </span>}

           

        </div>
    )
}

export default ProfileCard