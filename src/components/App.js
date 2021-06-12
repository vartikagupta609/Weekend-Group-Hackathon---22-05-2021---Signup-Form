import React, { Component, useState,useEffect } from "react";
import '../styles/App.css';

const App = () => {
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [gender, setgender] = useState('male');
  const [phone, setphone] = useState('');
  const [password, setpassword] = useState('');
  const [success, setsuccess] = useState(false);
  const [message, setmessage] = useState('');
  const [error, seterror] = useState(null)
  useEffect(() => {
    setemail('');
    setgender('');
    setphone('');
    setpassword('');
    setname('');
  }, [success])
  const submitForm = (e) => {
    e.preventDefault();
    if (name === '' && email === '' && gender === '' && phone === '' && password === '') {
      alert("All fields are mandatory");
    }
    else {
      if (name) { seterror("Name Error") }
      else if (email) { seterror("Email Error") }
      else if (phone) { seterror("Phone Number Error") }
      else if (password) { seterror("Password Error") }
      else {
        let alphaExp = /^([a-z]+[\s]*[0-9]+[\s]*)+$/i;
        if (!alphaExp.test(name)) {
          seterror("Name is not alphanumeric")
        }
        else if (!email.includes('@')) {
          seterror("Email must contain @")
        }
        else if (gender === "") {
          seterror("Please identify as male, female or others")
        }
        else if (isNaN(phone)) {
          seterror("Phone Number must contain only numbers")
        }
        else if (password.length < 6) {
          seterror("Password must contain atleast 6 letters")
        } else {
          setsuccess(true);
          seterror(null);
          let username = email.split("@");
          setmessage(`Hello ${username[0]}`);
        }
      }
    }
  }
  return (
    <div id="main">
        <form>
      {!success && error}
      {success && message}
        <div className="mb-3">
        <label htmlFor="name">Name</label>
          <input type="text" className="form-control" data-testid="name" onChange={(e)=>setname(e.target.value)}/>
        </div>
        <div className="mb-3">
          <label htmlFor="email">Email address</label>
          <input type="email" className="form-control" data-testid="email" onChange={(e)=>setemail(e.target.value)}/>
        </div>
        <div className="mb-3">
        <label htmlFor="email">Gender</label>
          <select className="form-select" data-testid = 'gender' onChange={(e)=>setgender(e.target.value)}>
            <option value="male">male</option>
            <option value="female" >female</option>
            <option value="other">other</option>
         </select>
        </div>
        <div className="mb-3">
          <label htmlFor="phone">Phone Number</label>
          <input type="number" className="form-control" data-testid = 'phoneNumber' onChange={(e)=>setphone(e.target.value)}/>
        </div>
        <div className="mb-3">
        <label htmlFor="phone">Password</label>
          <input type="password" className="form-control" data-testid = 'password' onChange={(e)=>setpassword(e.target.value)}/>
        </div>
        <button type="submit" className="btn btn-primary" data-testid = 'submit' onClick={submitForm}>Submit</button>
    </form>
    </div>
  )
}


export default App;