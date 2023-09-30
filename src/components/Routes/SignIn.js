import React from 'react';
import { Link } from 'react-router-dom';
// import { useEffect } from 'react';
// import { getRedirectResult } from 'firebase/auth';
// import { auth, signInWithGooglePopup, createUserDocumentFromAuth, signInWithGoogleRedirect } from '../utils/Firebase';
import {  signInWithGooglePopup, createUserDocumentFromAuth } from '../utils/Firebase';
import Sign_In from '../Sign-In-Component/Sign_In.component';


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
    <div className='SignIn'>
      <p>This is signin page</p>
      <div className="crossdiv">
        <Link to="/">
          <div className="crossone" />
          <div className="crosstwo" />
        </Link>
      </div>
      <fieldset style={{width:'300px'}}>
        <legend>Sign In</legend>
              <> <input type="text" /> </>
              <> <input type="password" /> </>
              <> <button>Sign in</button> </>
      </fieldset>
      <p>Login btn</p>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      <br/>
      <Sign_In/>
      {/* <button onClick={signInWithGoogleRedirect}>Sign In With GoogleRedirect</button> */}
    </div>
  );
};

export default SignIn;


