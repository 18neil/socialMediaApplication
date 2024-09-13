import React, { useState } from 'react';
import './ProfileModel.css'; // Ensure you have this file for styling
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { uploadImage } from '../../action/uploadAction';
import { updateUser } from '../../action/userAction.js';

function ProfileModel({modalOpened, setModalOpened, data}) {
  
  const {password, ...other} = data;
  const [formData, setFormData] = useState(other);
  const [profileImage, setProfileImage] = useState(null)
  const [coverImage, setCoverImage] = useState(null)
  const dispatch = useDispatch()
  const param = useParams()

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name] : e.target.value})
  }

  if (!modalOpened) return null;

  const onImageChange = (e) =>{
    if(e.target.files && e.target.files[0]){
      let img = e.target.files[0];
      e.target.name === "profileImage"?setProfileImage(img) : setCoverImage(img)
      }
  }

  const handelSubmit = (e) =>{
    e.preventDefault();
    let UserData = formData;
    if(profileImage){
      const data = new FormData();
      const fileName = Data.now() + profileImage.name;
      data.append("name", fileName);
      data.append("file", profileImage);
      UserData.profilePicture = fileName;
      
      try {
        dispatch(uploadImage(data))
      } catch (error) {
        console.log(error)
      }
    }

    if(profileImage){
      const data = new FormData();
      const fileName = Data.now() + coverImage.name;
      data.append("name", fileName);
      data.append("file", coverImage);
      UserData.coverImage = fileName;
      try {
        dispatch(uploadImage(data))
      } catch (error) {
        console.log(error)
      }
    }
    
    dispatch(updateUser(param.id, UserData));
    setModalOpened(false);


  }

  return (
    <div className="popup">
      <div className="popup-inner">
        <div className="closeIcon">
        <span onClick={() => setModalOpened(false)}>X</span>
        </div>
        <h2>Your Info</h2>

        <form className="infoFrom">
        
        <div>
            <input type="text" className='infoInput' name='firstname' placeholder='First Name' onChange={handleChange} value={formData.firstname}/>
            <input type="text" className='infoInput' name='lastname' placeholder='Last Name' onChange={handleChange} value={formData.lastname}/>
        </div>

        <div>
            <input type="text" className='infoInput' name='worksAt' placeholder='Workes At' onChange={handleChange} value={formData.worksAt}/>
        </div>

        <div>
            <input type="text" className='infoInput' name='livesin' placeholder='Live In' onChange={handleChange} value={formData.livesin}/>
            <input type="text" className='infoInput' name='country' placeholder='Country' onChange={handleChange} value={formData.country}/>
        </div>
        <div>
            <input type="text" className='infoInput' name='relationship' placeholder='RelationShip status' onChange={handleChange} value={formData.relationship}/>
        </div>

        <div>
            Profile Image
            <input type="file" name='profilePic'  onChange={onImageChange}/>
            Cover Image
            <input type="file" name='coverPic' onChange={onImageChange}/>
        </div>

        </form>


        <button className='button pop-button' onClick={handelSubmit}>Update</button>
      </div>
    </div>
  );
}

export default ProfileModel;
