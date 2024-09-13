import React, { useEffect, useState } from 'react';
import './InfoCard.css';
import { UilPen } from '@iconscout/react-unicons';
import ProfileModel from '../ProfileModel/ProfileModel';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import * as UserApi from '../../api/UserRequest.js'
import { logout } from '../../action/Authaction.js';

const InfoCard = () => {
  const [modalOpened, setModalOpened] = useState(false);

  const dispatch = useDispatch();
  const params = useParams();
  const profileUserId = params.id;
  const [profileUser, serProfileUser] = useState({})
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

useEffect(()=>{
  const fetchProfileUser = async()=>{
    if(profileUserId === user._id){
      setProfileUser(user)
      
    }else{
      const profileUser = await UserApi.getUser(profileUserId)
      serProfileUser(profileUser)
    
    }
  }
  fetchProfileUser();
}, [])

  const togglePop = () => {
    setSeen(!seen);
  };

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <>
    <div className="InfoCard">
      <div className="InfoHead">
        <h4>Profile Info</h4>
        {user.id === profileUserId ? ( 

          <div>
          
          <UilPen  color="orange" className="svhC" onClick={()=>setModalOpened(true)} /> 
          
          </div>
        ) : "" }
       
      </div>
      <div className="statusBudy">
        <div className="info">
          <span>Status </span>
          <span>{profileUser.relationship}</span>
        </div>
        <div className="info">
          <span>Lives in </span>
          <span>{profileUser.livesin}</span>
        </div>
        <div className="info">
          <span>Work at </span>
          <span>{profileUser.worksAt}</span>
        </div>
      </div>
      <button type="button" className="button card-button" onClick={handleLogout}>Log Out</button>
    </div>
    <div className="popUp">
    <ProfileModel modalOpened = {modalOpened}  setModalOpened ={setModalOpened} data = {user}/>
    </div>
    </>
  );
};

export default InfoCard;
