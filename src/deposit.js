import React, { useContext, useState } from 'react';
import { UserContext } from './context';
import 'bootstrap/dist/css/bootstrap.css';
import Card from './context';

// State variables and context
function Deposit(){
    const [show, setShow]         = React.useState(true);
    const [status, setStatus]     = React.useState('');
    const [deposit, setDeposit] = React.useState("");
    const ctx = React.useContext(UserContext); 

    const [balance, setBalance] = useState(ctx.users[0].balance);

    function validate(field, label){
            // Verify if deposit is valid
        if (!field || isNaN(field) || field <= 0) {
            // Message for not valid deposit
            setStatus('Not valid ' + label);
            setTimeout(() => setStatus(''),3000);
            setDeposit ("");
            return false;
        }

        return true;
    }

    // Function to handle deposit
    function handleCreate(){
        // Verify if number valid
        if (!validate(deposit, 'deposit')) return;
        // Update balance
        const totalbalance = Number(deposit) + Number(balance);
        setBalance(totalbalance);
        ctx.users[0].balance = totalbalance;
        setDeposit("");
        setStatus('Successful Deposit');
        }

      function clearForm(){
        setDeposit('');
        setShow(true);
      } 

      return (
        <Card
          bgcolor="warning"
          header="Deposit"
          status={status}
          body={show ? (  
                  <>
                  Balance: ${balance}
                  <br/><br/>
                  Deposit Amount<br/>
                  <input type="input" className="form-control" id="deposit" placeholder="Deposit Amount" value = {deposit} onChange={e => setDeposit(e.currentTarget.value)}/><br/>
                  <button type="submit" className="btn btn-light" onClick={handleCreate}>Deposit</button>
                  </>
                ):(
                  <>
                  <button type="submit" className="btn btn-light" onClick={clearForm}>Deposit</button>
                  </>
                )}
        />
        ) 
      }

export default Deposit;
