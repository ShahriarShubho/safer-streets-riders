import React, { useContext, useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router";
import './LogIn.css'
import { Google} from 'react-bootstrap-icons';

if(!firebase.apps.length){

    firebase.initializeApp(firebaseConfig);
}


const LogIn = () => {

const [loggedInUser, setLoggedInUser,] = useContext(UserContext)
const [newUser, setNewUser] = useState(false);

let history = useHistory();
let location = useLocation();
let { from } = location.state || { from: { pathname: "/" } };

//google Sing In method
const googleProvider = new firebase.auth.GoogleAuthProvider();
const singInGoogle = () => {
  firebase
    .auth()
    .signInWithPopup(googleProvider)
    .then((result) => {
      var {displayName, email} = result.user;
      const userData ={name : displayName, email : email}
      setLoggedInUser(userData);
      history.replace(from);
    })
    .catch((error) => {
      const errorMessage = error.message;
      const newUserInfo = { ...loggedInUser };
      newUserInfo.error = errorMessage;
      newUserInfo.success = false;
      setLoggedInUser(newUserInfo);
    });
};

//Handle Input Change value and valid email and password
const handleChange = (event) => {
  let isValidForm = true;
  if (event.target.name === "email") {
    isValidForm = /\S+@\S+\.\S+/.test(event.target.value);
  }
  if (event.target.name === "password") {
    isValidForm = event.target.value.length >= 6;
  }
  if (isValidForm) {
    const newUserInfo = { ...loggedInUser };
    newUserInfo[event.target.name] = event.target.value;
    setLoggedInUser(newUserInfo);
  }
};

//Handle New User Log In Information
const handleSubmit = (event) => {
  if (newUser && loggedInUser.email && loggedInUser.password) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(loggedInUser.email, loggedInUser.password)
      .then((res) => {
        const newUserInfo = { ...loggedInUser };
        newUserInfo.error = "";
        newUserInfo.success = true;
        setLoggedInUser(newUserInfo);
        updateUserInfo(loggedInUser.name);
      })
      .catch((error) => {
        const errorMessage = error.message;
        const newUserInfo = { ...loggedInUser };
        newUserInfo.error = errorMessage;
        newUserInfo.success = false;
        setLoggedInUser(newUserInfo);
      });
  }

  //handle already logged In user info
  if (!newUser && loggedInUser.email && loggedInUser.password) {
    firebase
      .auth()
      .signInWithEmailAndPassword(loggedInUser.email, loggedInUser.password)
      .then((res) => {
        const newUserInfo = { ...loggedInUser };
        newUserInfo.error = "";
        newUserInfo.success = true;
        setLoggedInUser(newUserInfo);
        history.replace(from);
        console.log("sing in user", res.user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        const newUserInfo = { ...loggedInUser };
        newUserInfo.error = errorMessage;
        newUserInfo.success = false;
        setLoggedInUser(newUserInfo);
      });
  }
  event.preventDefault();
};


//update new user Information
const updateUserInfo = (name) => {
  const user = firebase.auth().currentUser;
  user
    .updateProfile({
      displayName: name,
    })
    .then(function () {
      console.log("Update successful.");
    })
    .catch(function (error) {
      console.log("update error " + error);
    });
};

return (
  <div className="container login">

    <form className="formStyle" action="" onSubmit={handleSubmit}>
        <h3>{newUser ? "Create New Account" : "Place Log In"}</h3>
      {newUser && (
        <input
        className="inputFiled"
          type="text"
          onChange={handleChange}
          name="name"
          placeholder="Enter your name"
          required
        />
      )}
      <input
      className="inputFiled"
        onChange={handleChange}
        type="email"
        name="email"
        placeholder="Enter your email"
        required
      />
      <input
      className="inputFiled"
        onChange={handleChange}
        type="password"
        name="password"
        placeholder="Enter your password"
        required
      />
      {newUser && (
        <input
        className="inputFiled"
          type="password"
          onChange={handleChange}
          name="confirm-password"
          placeholder="Confirm Password"
          required
        />
      )}
      <input className="submitButton" type="submit" value={newUser ? "Create Account" : "Log In"}/>
      <div className="newAccount">
      <input
      type="checkbox"
      name="newUser"
      id=""
      onChange={() => setNewUser(!newUser)}
    />
    <label htmlFor="newUser">Are You New User?</label>
      </div>
    </form>

    <strong style={{ color: "red" }}>{loggedInUser.error}</strong>
    {loggedInUser.success && (
      <strong style={{ color: "green" }}>
        User {newUser ? "Create" : "Logged In"} Successfully
      </strong>
    )}
      <p className="text-center">---Or---</p>
        <button className="btn btn-primary w-100 mb-3" onClick={singInGoogle}><Google color="#3cba54" size={35} />  Continue With Google</button>
    </div>
  );
};

export default LogIn;
