import Rebase from "re-base";
import firebase from "firebase";

// Firebase is used to mirror infomation users put into the app and syncing state. 
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBvZ5Htz_xGYGJjupN3zdrAt-zii1U0Tdc",
    authDomain: "ornate-office-309319.firebaseapp.com",
    databaseURL: "https://ornate-office-309319-default-rtdb.firebaseio.com"
});
    
const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// This is a default export
export default base;