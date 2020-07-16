import React, {Component} from 'react';
import styles from './styles.module.css';
import 'semantic-ui-css/semantic.min.css';
import $ from 'jquery';
import Axios from 'axios';
import  'axios';

class CreateAccount extends Component{
    
    render(){

        Axios.get('/https://4d11c504-1f41-4dad-ab58-9a0e86c28cd2-bluemix:bc9b9c642faa9b0b5bbd0fbb799f74a3cebbf5fc1166f0cf371167704808f9fd@4d11c504-1f41-4dad-ab58-9a0e86c28cd2-bluemix.cloudantnosqldb.appdomain.cloud/fantastic_four/').then(response => {
            console.log(response.status);
        }).catch(e=>{
          	console.log("ERROR: ", e); 
        });
        
        return(
            <div class="padding-content">
                <div class="ui raised very padded text container segment">
                    <div className="container"><h1>Create an Account</h1></div>
                    <a href="/Login"><h4>Already have an account? Click here!</h4></a>
                    <form class="ui form container">
                        <div class="two fields">
                            <div class="required field">
                                <label>First Name</label>
                                <input type="text" name="first-name" placeholder="First Name"></input>
                            </div>
                            <div class="required field">
                                <label>Last Name</label>
                                <input type="text" name="last-name" placeholder="Last Name"></input>
                            </div>
                        </div>
                        <div class="required field">
                            <label>Email</label>
                            <input type="text" name="email" placeholder="Email"></input>
                        </div>
                        <div class="required field">
                            <label>Password</label>
                            <input type="password" name="password" placeholder="Password"></input>
                        </div>
                        <div class="required field">
                            <label>Street Address</label>
                            <input type="text" name="street-address" placeholder="Street Address"></input>
                        </div>
                        <div class="required two fields">
                            <div class="required field">
                                <label>City</label>
                                <input type="text" name="city" placeholder="City"></input>
                            </div>
                            <div class="required field">
                                <label>State</label>
                                <input type="text" name="state" placeholder="State"></input>
                            </div>
                        </div>
                    <button class="ui button" type="submit" to="/CreatePetition">Next</button>
                </form>
            </div>
        </div>
        )
    }
}
export default CreateAccount;