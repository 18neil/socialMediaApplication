import React, { useEffect, useState } from "react";
import './FollowerCard.css'
import User from "../User/User";
import { useSelector } from "react-redux";
import { getAllUser } from "../../api/UserRequest";


 const FollowerCard = () =>{

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
    const [persons, setPersons] = useState([]);

    useEffect(()=>{
      const fetchPersons = async()=>{
        const {data} = await getAllUser();
        setPersons(data)
      }
      fetchPersons()
    },[])


    return(
    <div className="FollowersCard">
      <h3>People you may know</h3>

    {persons.map((person, id) => {
      if(person._id !== user._id){
        <User person={person} key={id}/>
      }})}
      
    </div>
    )
 }

 export default FollowerCard