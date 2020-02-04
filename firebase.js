import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDdUBQme0qQF2-80AtMd36LK6m1siISm9s",
    authDomain: "ourclientslog.firebaseapp.com",
    databaseURL: "https://ourclientslog.firebaseio.com",
    projectId: "ourclientslog",
    storageBucket: "ourclientslog.appspot.com",
    messagingSenderId: "865505289154",
    appId: "1:865505289154:web:91528869401b0e63d62c5b",
    measurementId: "G-LWWM4FXVJR"
  };
  
//firebase.analytics();
const firebaseApp = firebase.initializeApp(firebaseConfig);

export const storage = firebase.storage();
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const signup = async ({email, password, firstName, lastName}) => {
    let signupResponse, addUserToDbResponse;
    try {
        signupResponse = await auth.createUserWithEmailAndPassword(email, password);
        let userId = signupResponse.user.uid;
        addUserToDbResponse = await firestore.collection("users").add({email, firstName, lastName, userId});
        //handle success
        
    } catch (error) {
        console.log('error signing up: ', error);
        //handle error     
    }
}
export const signin = async ({email, password}) => {
    let signinResponse;
    try {
        signinResponse = await auth.signInWithEmailAndPassword(email, password);
        //handle success
        
    } catch (error) {
        console.log('error signing in: ', error);
        //handle error     
    }
}
 









