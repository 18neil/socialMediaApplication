import * as UploadApi from '../api/UploadRequest'

export const uploadImage = (data) => async(dispatch) => {
    try {
         // Debug the FormData content
            for (let pair of data.entries()) {
                console.log(`${pair[0]}: ${pair[1]}`);
            }
        await UploadApi.uploadImage(data)
        
    } catch (error) {
        console.log(error)
    }
} 

export const uploadPost = (data) => async(dispatch) =>{
    dispatch({type: "UPLOAD_START"})
    try {
        const newPost = await UploadApi.uploadPost(data)
        dispatch({type: "UPLOAD_SUCCESS", data:newPost.data})
        
    } catch (error) {
        console.log(error)
        dispatch({type: "UPLOAD_FAIL"})

    }
}