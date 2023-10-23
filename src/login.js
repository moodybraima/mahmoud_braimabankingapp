import React, { useState, useContext } from 'react';
import Card from './context';
import { UserContext } from './context';

function Login(){
    const [show, setShow]         = React.useState(true);
    const [status, setStatus]     = React.useState('');
    const [email, setEmail]       = React.useState('');
    const [password, setPassword] = React.useState('');
    const ctx = React.useContext(UserContext); 

    function validate(field, label){
        if (!field) {
            setStatus('Please fill in ' + label);
            setTimeout(() => setStatus(''),3000);
            return false;
        }

        return true;
    }

    function handleCreate(){
        console.log(email, password);
        if (!validate(email,    'email'))    return;
        if (!validate(password, 'password')) return;
        ctx.users.push({email, password});
        setShow(false);
      }    
           
    function clearForm(){
        setEmail('');
        setPassword('');
        setShow(true);
      }
  
    return (
        <Card 
          bgcolor="success"
          header="Login"
          status={status}
          body={show ? (  
                  <>
                  Email<br/>
                  <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
                  Email<br/>
                  <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
                  <button type="submit" className="btn btn-light" onClick={handleCreate}>Login</button>
                  </>
                ):(
                  <>
                  <button type="submit" className="btn btn-light" onClick={clearForm}>Login</button>
                  </>
                )
              }
        />
      ) 
  }

  export default Login;