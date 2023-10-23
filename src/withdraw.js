import React, { useContext, useState } from 'react';
import { UserContext } from './context';
import 'bootstrap/dist/css/bootstrap.css';
import Card from './context';

// state variables and context
function Withdraw(){
  const [show, setShow]         = useState(true);
  const [status, setStatus]     = useState('');
  const [withdrawAmount, setWithdrawAmount] = useState('');
  const ctx = React.useContext(UserContext);
  const [users, setUsers] = useState(ctx.users);
  const [balance, setBalance] = useState(ctx.users[0].balance);

  function validate(amount){
      if (!amount || isNaN(amount) || amount <= 0) {
          setStatus('Please enter a valid amount');<br/>
          setTimeout(() => setStatus(''),3000);
          return false;
      }

      return true;
  }

  // function to handle withdraw
  function handleWithdraw(){
      console.log('handleWithdraw');
      // Check if input is valid number
      if (!validate(withdrawAmount)) return;
      // Check if sufficiant funds to withdraw
      if (balance < withdrawAmount) {
        setStatus('Insufficient funds');
        setWithdrawAmount("");
        return;
      }
      // Update balance by sutracting withdrawal amount
      // Show new balance
      else {
      const totalbalance = Number(balance) - Number(withdrawAmount);
        setBalance(totalbalance);
        ctx.users[0].balance = totalbalance;
        // Message after transaction
        setStatus('Successful Withdrawal');
        setWithdrawAmount('');
      }
}

  return (
      <Card
        bgcolor="info"
        header="Withdraw"
        status={status}
        body={show ? (
                <>
                Balance: ${balance}
                <br/><br/>
                Withdraw Amount<br/>
                <input type="input" className="form-control" id="withdrawAmount" placeholder="Withdraw Amount" value={withdrawAmount} onChange={e => setWithdrawAmount(e.currentTarget.value)}/><br/>
                <button type="submit" className="btn btn-light" onClick={handleWithdraw}>Withdraw</button>
                </>
              ):(
                <>
                <button type="submit" className="btn btn-light" onClick={handleWithdraw}>Withdraw</button>
                </>
              )}
        />
      )
    } 

export default Withdraw;
