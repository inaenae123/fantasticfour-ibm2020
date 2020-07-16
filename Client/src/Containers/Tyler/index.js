import React, {Component} from 'react';
import styles from './styles.module.css';
import Card from './HelpCard';
import StateDropdown from './StateDropdown'
import 'semantic-ui-css/semantic.min.css'   ;
import $ from 'jquery';
import Axios from 'axios';
import  'axios';

class Tyler extends Component{
    
    render(){
        Axios.get('/https://4d11c504-1f41-4dad-ab58-9a0e86c28cd2-bluemix:bc9b9c642faa9b0b5bbd0fbb799f74a3cebbf5fc1166f0cf371167704808f9fd@4d11c504-1f41-4dad-ab58-9a0e86c28cd2-bluemix.cloudantnosqldb.appdomain.cloud/fantastic_four/').then(response => {
            console.log(response.status);
        }).catch(e=>{
          	console.log("ERROR: ", e); 
        });
        
        return(
            <div class="ui stackable two column centered grid">
                <div class="column"><h1>Get Help</h1></div>
                <div class="two column centered row">
                    <div class="column">
                        <h2>Petitions</h2>
                        <div className="container">
                            <Card />
                        </div>
                    </div>
                    <div class="column">
                        <h2>Legal Assistance</h2>
                        <div className="container">
                            <p>Select your state to get directed to your local Bar association website. They provide great resources on finding a lawyer and getting legal aid.</p>
                            <div class="ui hidden divider"></div>
                            <div class="outer"><StateDropdown id="dropdown" class="center"/></div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
export default Tyler;