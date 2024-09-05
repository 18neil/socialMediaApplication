import React, {useState, useRef} from "react";
import './PostShare.css';
import img from '../../img/profile.jpg'
import {UilScenery} from "@iconscout/react-unicons";
import { UilPlayCircle} from "@iconscout/react-unicons";
import { UilLocationPoint} from "@iconscout/react-unicons";
import {UilSchedule } from "@iconscout/react-unicons";
import {UilTimes } from "@iconscout/react-unicons";
const PostShare = () => {
    const [image, setImage] = useState(null);
    const imgRef = useRef();
    const onImageChnge = (e) => {
        if(e.target.files && e.target.files[0]){
            let img =e.target.files[0];
            setImage({
                image:URL.createObjectURL(img)
            });
        }
    }

    return(
        <div className="PostShare">
            <img src={img} alt="" />
            <div>
                <input type="text" placeholder="What's happening" />
                <div className="postOption">
                <div className="option colorimg" 
                onClick={()=>imgRef.current.click()}
                ><UilScenery/> Photo </div>
                <div className="option colorimg"><UilPlayCircle/> Video</div>
                <div className="option colorimg"><UilLocationPoint/> Location</div>
                <div className="option colorimg"><UilSchedule/> Shedule</div>
                <button type="button" className="button ps-button">Share</button>
                <div style={{display:"none"}}>
                    <input type="file" name="myImage" id=""  ref={imgRef} onChange={onImageChnge}/>
                </div>
            </div>

            {
                image && (
                    <div className="previewImg">
                        <UilTimes onClick={ () => setImage(null)}/>
                        <img src={image.image} alt="" />
                    </div>
                )
            }
            </div>
           
        </div>
    )
}

export default PostShare;