import React, {useState, useRef} from "react";
import './PostShare.css';
import img from '../../img/profile.jpg'
import {UilScenery} from "@iconscout/react-unicons";
import { UilPlayCircle} from "@iconscout/react-unicons";
import { UilLocationPoint} from "@iconscout/react-unicons";
import {UilSchedule } from "@iconscout/react-unicons";
import {UilTimes } from "@iconscout/react-unicons";
import { useDispatch, useSelector } from "react-redux";
import { uploadImage, uploadPost } from "../../action/uploadAction";





const PostShare = () => {

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

    const loading = useSelector((state) => state.postReducer.uploading)
    const dispatch = useDispatch()
    const [image, setImage] = useState(null);
    const imgRef = useRef();
    const desc = useRef();
    const onImageChnge = (e) => {
        if(e.target.files && e.target.files[0]){
            let img =e.target.files[0];
            setImage(img);
        }
    }
    const token = useSelector((state) => state.auth.authData);
    const user = decodeJwt(token);
    
    const reset = () =>{

    setImage(null)
    desc.current.value=""
    }

    const handelSubmit = (e) =>{
        
        e.preventDefault();
        const newPost = {
            userId: user.id,
            desc:desc.current.value
        }
        if(image){
           
            const data = new FormData();
            const filename = Date.now() + image.name;
            data.append("name", filename);
            data.append("file", image);
            newPost.image = filename;
            
            try {
                dispatch(uploadImage(data));
            } catch (error) {
                console.log(error);
            }
        }
        dispatch(uploadPost(newPost))
        reset()
    } 
    const publicFolder = " http://localhost:5002/public/images/";

    return(
        <div className="PostShare">
            <img src={user.profilePicture?publicFolder+user.profilePicture:"https://i2.pngimg.me/thumb/f/720/c3f2c592f9.jpg"} alt=""/>
            {/* <img src={img} alt="" /> */}
            <div>
                <input ref={desc} required type="text" placeholder="What's happening" />
                <div className="postOption">
                <div className="option colorimg" 
                onClick={()=>imgRef.current.click()}
                ><UilScenery/> Photo </div>
                <div className="option colorimg"><UilPlayCircle/> Video</div>
                <div className="option colorimg"><UilLocationPoint/> Location</div>
                <div className="option colorimg"><UilSchedule/> Shedule</div>
                <button type="button" className="button ps-button" onClick={handelSubmit} disabled={loading}>{loading? "uploading..." : "Share"} </button>
                <div style={{display:"none"}}>
                    <input type="file" name="myImage" id=""  ref={imgRef} onChange={onImageChnge}/>
                </div>
            </div>

            {
                image && (
                    <div className="previewImg">
                        <UilTimes onClick={ () => setImage(null)}/>
                        <img src={URL.createObjectURL(image)} alt="" />
                    </div>
                )
            }
            </div>
           
        </div>
    )
}

export default PostShare;