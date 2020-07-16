import React, { Component } from 'react';
import './App.css';
import {Router, Route} from 'react-router';
import History from './Utils'

//PAGES (CONTAINERS)
import Homepage from './Containers/Homepage';
import Avery from './Containers/Avery';
import Carmina from './Containers/Carmina';
import Tyler from './Containers/Tyler';
import Eon from './Containers/Eon';
import CreateAccount from './Containers/CreateAccount'
import CreatePetition from './Containers/CreatePetition';
import Login from './Containers/Login';
import ManagePetition from './Containers/ManagePetition';

function App(){
    return (
      <Router history={History}>
        <Route path="/" exact component={Homepage}/>
        <Route path="/avery" component={Avery}/>
        <Route path="/carmina" component={Carmina}/>
        <Route path="/tyler" component={Tyler}/>
        <Route path="/eon" component={Eon}/>
        <Route path="/createaccount" component={CreateAccount}/>
        <Route path="/createpetition" component={CreatePetition}/>
        <Route path="/login" component={Login}/>
        <Route path="/managepetition" component={ManagePetition}/>
      </Router>
    );
}

export default App;
