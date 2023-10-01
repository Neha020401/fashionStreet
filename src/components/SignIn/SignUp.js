import React from 'react';
import { Link } from 'react-router-dom';
// import { useEffect } from 'react';
// import { getRedirectResult } from 'firebase/auth';
// import { auth, signInWithGooglePopup, createUserDocumentFromAuth, signInWithGoogleRedirect } from '../utils/Firebase';
import {  signInWithGooglePopup, createUserDocumentFromAuth } from '../utils/Firebase';
import SignIn from './SignIn.component';
import "../SassStyling/SignIn.scss"

const SignUp = () => {

  // useEffect(async ()=>{
  //   const response = await getRedirectResult(auth);
  //   console.log(response)
  // },[])
  

  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log(userDocRef)
  };


  return (
    <div className='signInContainer'>
    <div className='logIn'>
      <p>This is signin page</p>
      <div>
      <div className="crossdiv">
        <Link to="/">
          <div className="crossone" />
          <div className="crosstwo" />
        </Link>
      </div>
    
      <fieldset >
        <legend>Sign In</legend>

              <div>Email:-  <input type="text" /> </div>
              <div>PassWord:-  <input type="password" /> </div>
              <div> <button>Sign in</button> </div>
              <p>Login btn</p>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      </fieldset>
      </div>

      </div>
      <div className='signIn'>
      <SignIn/>
      </div>
      {/* <button onClick={signInWithGoogleRedirect}>Sign In With GoogleRedirect</button> */}
  
    </div>
  );
};

export default SignUp;


