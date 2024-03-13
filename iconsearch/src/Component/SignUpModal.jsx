import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios'

export default function SignUpModal({isSignUpModal, setIsSignUpModal}) {
    // form control
    const [formValue,setFormValue]=useState({
        id:"",
        username:"",
        password:""
    })

    // saves the form value to the state
    const handleChange=(e)=>{
        setFormValue({...formValue, id:new Date().getTime().toString().slice(8, 12), [e.target.name]:e.target.value})
        console.log(formValue);
    }

    const handleSubmit = async (e) => {
        try {
          e.preventDefault()
            const res = await axios.post("http://localhost:3000/user", formValue);
            if (res.status === 201) {
              localStorage.setItem("userId", formValue.id);
              setFormValue({ id: "", username: "", password: ""})
              console.log(formValue);
              console.log("Signed Up successfully");
            }
        } catch (error) {
          console.log(error);
        }
        setIsSignUpModal(false)
      };

  return (
    <>
      <Dialog open={isSignUpModal} onClose={()=>setIsSignUpModal(false)}>
        <DialogTitle>SignUp</DialogTitle>
        <DialogContent>
          <TextField autoFocus required margin="dense" id="username" name="username" label="Username" type="text" fullWidth variant="standard" onChange={handleChange} value={formValue.username} />
          <TextField required margin="dense" id="password" name="password" label="Password" type="password" fullWidth variant="standard" onChange={handleChange} value={formValue.password} />
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>setIsSignUpModal(false)} >Cancel</Button>
          <Button type="submit" onClick={handleSubmit}>SignUp</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}