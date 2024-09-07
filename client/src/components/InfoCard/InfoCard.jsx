import React, { useState } from 'react';
import './InfoCard.css';
import { UilPen } from '@iconscout/react-unicons';
import ProfileModel from '../ProfileModel/ProfileModel';

const InfoCard = () => {
  const [seen, setSeen] = useState(false);

  const togglePop = () => {
    setSeen(!seen);
  };

  return (
    <>
    <div className="InfoCard">
      <div className="InfoHead">
        <h4>Your Info</h4>
        <UilPen className="svhC" onClick={togglePop} />
      </div>
      <div className="statusBudy">
        <div className="info">
          <span>Status </span>
          <span>in Relationship</span>
        </div>
        <div className="info">
          <span>Lives in </span>
          <span>Allahabad</span>
        </div>
        <div className="info">
          <span>Work at </span>
          <span>Zee Entertainment</span>
        </div>
      </div>
      <button type="button" className="button card-button">Log Out</button>
    </div>
    <div className="popUp">
    {seen && <ProfileModel toggle={togglePop} />}
    </div>
    </>
  );
};

export default InfoCard;
