import React from 'react';
import PostShare from '../PostShare/PostShare';


function SharePop(props) {
  return (
    <div className="popup">
      <div className="popup-inner">
        <div className="closeIcon">
            <span onClick={props.toggle}>X</span>
        </div>
       
        <PostShare/>

        <button className='button pop-button' >Update</button>
      </div>
    </div>
  );
}

export default SharePop;
