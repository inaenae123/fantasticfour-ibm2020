import React, {Component} from 'react';
import styles from './styles.module.css';
import 'semantic-ui-css/semantic.min.css';
import $ from 'jquery';
import Axios from 'axios';
import  'axios';

class CreatePetition extends Component{
    
    render(){
        
        Axios.get('/https://4d11c504-1f41-4dad-ab58-9a0e86c28cd2-bluemix:bc9b9c642faa9b0b5bbd0fbb799f74a3cebbf5fc1166f0cf371167704808f9fd@4d11c504-1f41-4dad-ab58-9a0e86c28cd2-bluemix.cloudantnosqldb.appdomain.cloud/fantastic_four/').then(response => {
            console.log(response.status);
        }).catch(e=>{
          	console.log("ERROR: ", e); 
        });

        return(
            <div class="padding-content">
                <div class="ui raised very padded text container segment">
                    <div className="container"><h1>Create a Petition</h1></div>
                    <form class="ui form">
                        <div class="required field">
                            <label>What is your goal in starting the petition?</label>
                            <input type="text" name="petition-title" placeholder="Petition Subject/Title"></input>
                        </div>
                        <div class="required field">
                            <label>Describe in detail the situation and why people should sign the petition.</label>
                            <textarea type="text" name="petition-description" placeholder="Petition Description"></textarea>
                        </div>
                        <div class="required field">
                            <label>Upload Images/Photos</label>
                            <input type="file" name="TODO" placeholder="TODO"></input>
                        </div>
                        
                        <button class="ui button" type="submit">Submit</button>
                    </form>
            </div>
        </div>
        )
    }
}
export default CreatePetition;