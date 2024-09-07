import React from 'react';
import './ProfileModel.css'; // Ensure you have this file for styling

function ProfileModel(props) {
  return (
    <div className="popup">
      <div className="popup-inner">
        <div className="closeIcon">
            <span onClick={props.toggle}>X</span>
        </div>
        <h2>Your Info</h2>

        <form className="infoFrom">
        
        <div>
            <input type="text" className='infoInput' name='FirstName' placeholder='First Name'/>
            <input type="text" className='infoInput' name='LastName' placeholder='Last Name'/>
        </div>

        <div>
            <input type="text" className='infoInput' name='worksat' placeholder='Workes At'/>
        </div>

        <div>
            <input type="text" className='infoInput' name='Live In' placeholder='Iive In'/>
            <input type="text" className='infoInput' name='counter' placeholder='Country'/>
        </div>
        <div>
            <input type="text" className='infoInput' name='RelationShip' placeholder='RelationShip status'/>
        </div>

        <div>
            Profile Image
            <input type="file" name='profileImg' />
            Cover Image
            <input type="file" name='coverImg' />
        </div>

        </form>


        <button className='button pop-button' >Update</button>
      </div>
    </div>
  );
}

export default ProfileModel;
