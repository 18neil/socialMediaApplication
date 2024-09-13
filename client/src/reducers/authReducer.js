const authReducer = (state = {authData : null, loading:false, error:false}, action) => {
switch(action.type){
    case "AUTH_START":
        return{...state, loading:true, error:false}
    case "AUTH_SUCCESS":
        localStorage.setItem("profile", JSON.stringify({...action?.data}))
        return{...state, authData: action.data, loading: false, error:false}
    case "Auth_FAIL":
        return{...state, loading:false, error:true}
    case "LOG_OUT":
        localStorage.clear();
        return{...state, loading:false, error:false, authData: null,}

    case "UPDATING_SUCCESS":
        localStorage.setItem('profile', JSON.stringify({...action?.data}))
        return{...state, authData: action.data, updateLoading: false, error:false}
    case "UPDATING_FAIL":
        return{...state,  updateLoading: false, error:false}
    default:
        return state

}
}

export default authReducer;