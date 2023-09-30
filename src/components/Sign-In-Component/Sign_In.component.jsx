import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../utils/Firebase";

const defaultFormField = {
    displayName:'',
    email:'',
    password:'',
    confirmPassword:'',
}

const Sign_In = () => {
 const [formField,setFormField] = useState(defaultFormField)
const {displayName,email,password,confirmPassword} = formField;

console.log(formField)

const resetFormField = () =>{
  setFormField(defaultFormField)
}

 const handleChange = (event) => {
    const {name, value } = event.target ; 
    setFormField({...formField, [name]: value})
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
    <div style={{margin:'20px 2px'}}>

      <form onSubmit={handleSubmit} >

        <div><label >DisplayName:- </label>
        <input type="text" required onChange={handleChange} name="displayName" value={displayName} /></div>

        <div><label >Email:- </label>
        <input type="email"  required  onChange={handleChange} name="email" value={email} /></div>

        {/* <div><label >Phone No:- </label>
        <input type="number" required  name="phoneNo" /></div> */}

       <div><label >Password:- </label>
        <input type="password" required  onChange={handleChange} name="password" value={password} /></div>

        <div><label >Confirm Password:- </label>
        <input type="Password"  required onChange={handleChange} name="confirmPassword" value={confirmPassword}/></div>

        <div><button type="submit"> Submit</button></div>
      </form>
    </div>
  )
}

export default Sign_In ;