import React, { useContext, useMemo, useReducer } from 'react';
import {
  SIGNUP, SIGNUP_PENDING, SIGNUP_SUCCESS, SIGNUP_FAIL, SET_USER, SIGNOUT,
  SIGNOUT_FAIL, SIGNIN, SIGNIN_PENDING, SIGNIN_SUCCESS, SIGNIN_FAIL,
} from './constants'
import {signup, signout, signin, auth as firebaseAuth} from '../firebase'

const AuthContext = React.createContext();

function useContextAuth() {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error(`useContextAuth must be used within a Provider`);
    }
    return context;
}
let initialAuthData = {
    pending: false, user: null,  error: null
}
function reducerAuth(state, action) {
    switch (action.type) {
      case SIGNUP:
        return {...state,  pending: true, user: null, error: null};
      case SIGNUP_SUCCESS:
        return {...state, pending: false, user: action.payload, error: null}
      case SIGNUP_FAIL:
        return {...state, pending: false, user: null, error: action.payload}
      case SIGNIN:
        return {...state,  pending: true, user: null, error: null};
      case SIGNIN_SUCCESS:
        return {...state, pending: false, user: action.payload, error: null}
      case SIGNIN_FAIL:
        return {...state, pending: false, user: null, error: action.payload}
      case SIGNOUT:
        return {...state, pending: false, user: null, error: null}
      case SIGNOUT_FAIL:
        return {...state, pending: false, error: action.payload}
      case SET_USER:
        return {...state, user: action.payload}
      default:
        return state;
    }
  }

function AuthProvider(props) {
    const [auth, dispatchAuth] = useReducer(reducerAuth, initialAuthData);
    //let contextValue = { auth, dispatchAuth, signup};
    let contextValue = useMemo(() => ({ auth, dispatchAuth}), [auth, dispatchAuth]);

    return <AuthContext.Provider value={contextValue} {...props} />;
}

const doSignup = async (dispatch, reqObject) =>{
  dispatch({type: SIGNUP})
  try {
    let response = await signup(reqObject);  
    dispatch({type: SIGNUP_SUCCESS, payload: response})     
  } catch (error) {
    dispatch({type: SIGNUP_FAIL, payload: error})        
  }     
}

const doSignin = async (dispatch, reqObject) =>{
  dispatch({type: SIGNIN})
  try {
    let response = await signin(reqObject);  
    dispatch({type: SIGNIN_SUCCESS, payload: response})     
  } catch (error) {
    dispatch({type: SIGNIN_FAIL, payload: error})        
  }     
}

const doSignout = async (dispatch) =>{
    dispatch({type: SIGNUP})
    try {
      let response = await signout();  
      dispatch({type: SIGNOUT})     
    } catch (error) {
        dispatch({type: SIGNUP_FAIL, payload: error})     
    }       
}
  
export { AuthProvider, useContextAuth, doSignup, useSignup, doSignout, doSignin };