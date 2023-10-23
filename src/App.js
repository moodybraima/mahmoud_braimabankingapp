import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './navbar';
import Home from './home';
import CreateAccount from './createaccount';
import Login from './login';
import Deposit from './deposit';
import Withdraw from './withdraw';
import AllData from './alldata';
import { UserContext } from './context';

function App(){
    return(
        <BrowserRouter>
            <NavBar/>
            <UserContext.Provider value={{users:[{name:'braima',email:'braima@subr.edu',password:'secret',balance:150}]}}>
                <Routes>
                    <Route path="/home" exact element={<Home/>} />
                    <Route path="/CreateAccount" element={<CreateAccount/>} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="/deposit" element={<Deposit/>} />
                    <Route path="/withdraw" element={<Withdraw/>} />
                    <Route path="/alldata" element={<AllData/>} />
                </Routes>
            </UserContext.Provider>
        </BrowserRouter>
    );
}

export default App;
