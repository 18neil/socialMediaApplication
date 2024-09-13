
import { followUser } from '../../../server/Controllers/UserContriller';
import * as UserApi from '../api/UserRequest';

export const updateUser = (id, formData) => async (dispatch) =>{
   
    dispatch({type:"UPDATING_START"})
    try {
        
        const {data} = await UserApi.updateUser(id, formData);
        dispatch({type: "UPDATING_SUCCESS", data:data})
    } catch (error) {
        dispatch({type:"UPDATTING_FAIL"})
    }
}

export default followUser = (id, data) => async(dispatch)=>{
    dispatch({type:"FOLLOW_USER"})
    UserApi.followUser(id, data)
}