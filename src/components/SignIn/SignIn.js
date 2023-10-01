import React from 'react';
import { Link } from 'react-router-dom';
import { Fragment } from 'react';
// import { useEffect } from 'react';
// import { getRedirectResult } from 'firebase/auth';
// import { auth, signInWithGooglePopup, createUserDocumentFromAuth, signInWithGoogleRedirect } from '../utils/Firebase';
import {  signInWithGooglePopup, createUserDocumentFromAuth } from '../utils/Firebase';
import Sign_In from './Sign_In.component';

const SignIn = () => {

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
    <Fragment>
    <div className='SignIn'>
      <p>This is signin page</p>
      <div style={{alignItems:'center',textAlign:'center',display:'grid',justifyContent:'center',gridAutoFlow:'column',gap:'10px'}}>
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
      </fieldset>
      </div>
      <p>Login btn</p>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      <br/>
      <Sign_In/>
      {/* <button onClick={signInWithGoogleRedirect}>Sign In With GoogleRedirect</button> */}
    </div>
    </Fragment>
  );
};

export default SignIn;


