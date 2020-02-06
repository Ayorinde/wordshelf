import * as firebase from 'firebase';
import 'firebase/firestore';
import {config} from './secret'
let {apiKey, authDomain, databaseURL, projectId, storageBucket, messagingSenderId, appId, measurementId} = config;
let firebaseConfig = {
    apiKey,
    authDomain,
    databaseURL,
    projectId,
    storageBucket,
    messagingSenderId,
    appId,
    measurementId
  };
  
//firebase.analytics();
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export const storage = firebase.storage();
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const signup = async ({email, password, firstName, lastName}) => {
    let signupResponse, addUserToDbResponse;
    try {
        signupResponse = await auth.createUserWithEmailAndPassword(email, password);
        let userId = signupResponse.user.uid;
        addUserToDbResponse = await firestore.collection("users").add({email, firstName, lastName, userId});
        return {userId, email, firstName, lastName}
        
    } catch (error) {
        console.log('error signing up: ', error);
    }
}
export const signin = async ({email, password}) => {
    let signinResponse;
    try {
        signinResponse = await auth.signInWithEmailAndPassword(email, password);
        return {email}        
    } catch (error) {
        console.log('error signing in: ', error);
    }
}

export const signout = async () =>{
    try {
      let signoutResponse = firebase.auth().signOut();      
    } catch (error) {
      console.log('error signing out: ', error);
    }
  }

export const getClients = async() => {
    try {
      let allClientsSnapshot = await firestore.collection("clients").get();
      let clientsArray = []
      allClientsSnapshot.forEach(function(doc) {
        let collectionObject = doc.data();
        let allClients = {id: doc.id, ...collectionObject}
        clientsArray.push(allClients)
      });
      return clientsArray;
    } catch (error) {
        console.log('error getting clients: ', error)    
    }
}

export const addClient = async(clientObject) => {
    try {
        //dispatch({type: 'FETCHING'})
        await firestore.collection("clients").add({...clientObject});
        //dispatch({type: 'SUCCESS'})
    
    } catch (error) {
        //dispatch({type: 'ERROR'})
        console.log('error getting clients: ', error)    
    }
}







