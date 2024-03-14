import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios'

export default function LoginModal({ isLoginModal, setIsLoginModal }) {
  // form control
  const [formValue, setFormValue] = useState({
    username: "",
    password: ""
  })

  // saves the form value to the state
  const handleChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value })
  }

  // check the value and return the result
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.get("http://localhost:3000/user")
      const userData = resp.data

      const user = userData.find(user => user.username === formValue.username && user.password === formValue.password);
      console.log(user);
      if (user) {
        // Successful login, proceed with further actions
        console.log('Login successfull');
      } else {
        // Invalid credentials, display error message
        console.log("Invalid Email and Password");
      }

    } catch (e) {
      console.log(e);
    }
    setIsLoginModal(false);
  }

  return (
    <>
      <Dialog open={isLoginModal} onClose={() => setIsLoginModal(false)}>
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
          <TextField autoFocus required margin="dense" id="username" name="username" label="Username" type="text" fullWidth variant="standard" onChange={handleChange} value={formValue.username} />
          <TextField required margin="dense" id="password" name="password" label="Password" type="password" fullWidth variant="standard" onChange={handleChange} value={formValue.password} />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsLoginModal(false)} >Cancel</Button>
          <Button type="submit" onClick={handleSubmit}>Login</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}