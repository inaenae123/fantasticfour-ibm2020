import React, {Component} from 'react';
import styles from './styles.module.css';
import Card from './HelpCard';
import StateDropdown from './StateDropdown'
import 'semantic-ui-css/semantic.min.css';

class Tyler extends Component{
    render(){
        
        return(
            <div className="container">
                <div className="container"><h1>Get Help</h1></div>
                <div className="row">
                    <div className="column container">
                        <h2>Petitions</h2>
                        <div className="container">
                            <Card />
                        </div>

                    </div>
                    <div className="column container">
                        <h2>Legal Assistance</h2>
                        <div className="container">
                            <p>Select your state to get directed to your local Bar association website. They provide great resources on finding a lawyer and getting legal aid.</p>
                            <div ><StateDropdown id="dropdown"/></div>
                        </div>
                    </div>
                </div>

                <form>
                    - What is the petition for (title)
                    - Why is it important / why should people care (description)

                    - Name (first and last)
                    - Email(to receive updates)
                    - Sign the petition (submit)
                </form>
            </div>

        )
    }
}
export default Tyler;