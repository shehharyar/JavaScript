import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar';

function App() {
const [enteredEmail, setEnteredEmail]= useState('');
const [enteredPass, setEnteredPass]= useState('');
const [EmailIsValid, setEmailIsvalid]= useState(false)
const [passIsValid, setPassIsvalid]= useState(false)
const [EmailTouched, setEmailTouched]= useState(false)
const [passIsTouched, setPassIsTouched]= useState(false)

var submission;

function emailHandler(event){
  setEnteredEmail(event.target.value);
}
function passwordHandler(event){
  setEnteredPass(event.target.value);
}

function SubmitHandler(event){
  event.preventDefault();
  setEmailTouched(true);
  setPassIsTouched(true);
  if(enteredEmail.trim() === " " || enteredEmail.length === 0 ){
    setEmailIsvalid(false);
    return;
  }
  setEmailIsvalid(true);
if(enteredPass.trim() === " " || enteredPass.length ===0 ){
  setPassIsvalid(false);
  return;
}
setPassIsvalid(true);


setEnteredEmail("");
setEnteredPass("");
alert("Your response has Been submitted");




}

const emailInputIsInValid= !EmailIsValid && EmailTouched;
const passwordInputIsInvalid= !passIsValid && passIsTouched;

const emailInputClasses= emailInputIsInValid ? "form-control invalid" : "form-control"; 
const passInputClasses= passwordInputIsInvalid ? "form-control invalid" : "form-control"; 


  return (
    <>
      <Navbar/>
<main>

      <form onSubmit={SubmitHandler}>
      <div className='formContainer'>
        <div className={emailInputClasses}>
          
        <label htmlFor="email">
          Email
        </label>
        <input type="text" name='email' value={enteredEmail} className='email' onChange={emailHandler} />
        {
          emailInputIsInValid && <p className='error-text'>Email should not be empty.</p>
        }
        </div>
        <div className={passInputClasses}>

        <label htmlFor="password">
          Password
        </label>
        <input type="text" value={enteredPass} name ="password" onChange={passwordHandler} />
        {
          passwordInputIsInvalid && <p className='error-text'>Password should not be empty.</p>
        }
        </div>
       <div className='form-actions'>
        <button type="submit">Submit</button>
       </div>

      </div>
      </form>
</main>
    </>
  )
}

export default App
