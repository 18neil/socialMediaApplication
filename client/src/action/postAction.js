import * as PostApi from '../api/PostRequest'
export const getTimelinePost = (id) =>async(dispatch) =>{
    dispatch({type: "RETREVING_START"});
    try {
        const {data} = await PostApi.getTimelinePost(id);
        dispatch({type: "RETREVING_SUCCESS", data:data});
        
    } catch (error) {
        dispatch({type: "RETREVING_FAIL"});

        console.log(error)
        
    }
}