import React, { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/Firebase";
import "../../SassStyling/SignIn.scss"
import FormInput from "./FormInput";
import Button from "../../Button";

const defaultFormField = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

const SignUp = () => {
  const [formField, setFormField] = useState(defaultFormField)
  const { displayName, email, password, confirmPassword } = formField;

  console.log(formField)

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

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password);
      await createUserDocumentFromAuth(user, { displayName });
      resetFormField();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert(`Can't create user, email already in use`);
      }
      console.log("User creation encountered an error: ", error);
    }
  };


  return (
    <div className="sign-up-container">
      <h2>Don't have an Account</h2>
      <span> Sign up with your email and password</span>
      <form onSubmit={handleSubmit} >

        <FormInput
          label="DisplayName "
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName} />

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

        <FormInput
          label="Confirm Password "
          type="Password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword} />

        <div>
          <Button type="submit"> Submit</Button>
        </div>
      </form>
    </div>
  )
}

export default SignUp;