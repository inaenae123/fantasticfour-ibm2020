import React, {Component} from 'react';
import styles from './styles.module.css';
import 'semantic-ui-css/semantic.min.css';
import $ from 'jquery';
import Axios from 'axios';
import  'axios';

class Login extends Component{
    
    render(){

        Axios.get('/https://4d11c504-1f41-4dad-ab58-9a0e86c28cd2-bluemix:bc9b9c642faa9b0b5bbd0fbb799f74a3cebbf5fc1166f0cf371167704808f9fd@4d11c504-1f41-4dad-ab58-9a0e86c28cd2-bluemix.cloudantnosqldb.appdomain.cloud/fantastic_four/').then(response => {
            console.log(response.status);
        }).catch(e=>{
          	console.log("ERROR: ", e); 
        });

        return(
            <div class="padding-content text-center">
                <div class="ui raised very padded text container segment">
                    <div className="container"><h1>Login</h1></div>
                    <form class="ui form">
                        <div class="required field text-left">
                            <label>Email</label>
                            <input type="text" name="email" placeholder="Email"></input>
                        </div>
                        <div class="required field text-left">
                            <label>Password</label>
                            <input type="password" name="password" placeholder="Password"></input>
                        </div>
                        
                        <button class="ui button" type="submit">Submit</button>
                    </form>
            </div>
        </div>
        )
    }
}
export default Login;