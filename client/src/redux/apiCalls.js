// import { loginFailure, loginStart, loginSuccess } from "./userRedux"


import { publicRequest } from "../requestMethods"

export const login = async (dispatch, user,navigate) => {
    // dispatch(loginStart());
    try {
      const res = await publicRequest.post("/auth/login", user);
      if(res.status === 200){
        navigate("/") ;
      
      // dispatch(loginSuccess(res.data));}
    }} catch (err) {
      console.log(err)
      // dispatch(loginFailure());
    }
  };