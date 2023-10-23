import React, { useContext } from 'react';
import { UserContext } from './context';

function AllData(){
    const ctx = React.useContext(UserContext);
    
    return (
        <div>
          <h4>All Data</h4>
          <h5>User Accounts</h5>
          <ul className="user-list">
            {ctx.users.map((user, index) => (
              <li key={index} className="user-item">
                <div className="user-info">
                  <span className="user-label">Name:</span>
                  <span className="user-value">{user.name}</span>
                </div>
                <div className="user-info">
                  <span className="user-label">Email:</span>
                  <span className="user-value">{user.email}</span>
                </div>
                <div className="user-info">
                  <span className="user-label">Balance:</span>
                  <span className="user-value">${user.balance.toFixed(2)}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      );
    }
    
export default AllData;