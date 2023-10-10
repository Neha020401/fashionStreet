import React from 'react';
import { Link } from 'react-router-dom';
import SignIn from '../SignIn/SignIn.component'
import "../../SassStyling/SignIn.scss"
import SignUp from "../SignIn/SignUpForm"

const Authentication = () => {

  return (
    <div className='signInContainer'>
      <div className='logIn'>
        <div>
          <div>
            <Link to="/">
              <span class="material-symbols-outlined">close</span>
            </Link>
          </div>
          <div>
              <SignIn />
          </div>
        </div>
      </div>
      <div className='signup'>
        <SignUp />
      </div>
    </div>
  );
};

export default Authentication;


