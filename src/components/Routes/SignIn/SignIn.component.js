import React, { useState } from "react";
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInUserWithEmailAndPassword
} from "../../utils/Firebase";
import "../../SassStyling/SignIn.scss"
import FormInput from "./FormInput";
import Button from "../../Button";

const defaultFormField = {
  email: '',
  password: '',
}



const SignIn = () => {
  const [formField, setFormField] = useState(defaultFormField)
  const { email, password } = formField;

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log(userDocRef)
  };


  const resetFormField = () => {
    setFormField(defaultFormField)
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormField({ ...formField, [name]: value })
  }


  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password.length < 6) {
      alert("Password should be at least 6 characters long");
      return;
    }

    try {
      const respone = await signInUserWithEmailAndPassword(email, password)
      console.log(respone)
      resetFormField();

    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert(`Please enter correct Password`);
          break;
        case "auth/user-not-found":
          alert(`User not found please enter correct email or please signup `);
          break;
        default:
        console.log(error);
      }
    }
  };


  return (
    <div className="sign-up-container">
      <form onSubmit={handleSubmit} >

        <div> Login with your email and password</div>
        <FormInput
          label="Email "
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email} />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password} />

        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '5px' }}>
          <Button type="submit"> Submit</Button>
          <Button type="button" buttonType='google' onClick={logGoogleUser}>Google signin</Button>
        </div>
      </form>
    </div>
  )
}

export default SignIn;