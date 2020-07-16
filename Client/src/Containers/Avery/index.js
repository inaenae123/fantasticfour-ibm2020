import React, {Component} from 'react';
import styles from './styles.module.css';
import Card from './OrganizationCard';
import 'semantic-ui-css/semantic.min.css';


class Avery extends Component{

    render(){
        return(
            <div className="donations" style={styles}>
                <h1 style={{paddingTop: '20px'}}>I Want to Donate</h1>
                <h3>Any donations to any of the following organizations can help make an impact on social inequalities that go on in the United States today</h3>
                <Card />
            </div>
        )
    }
}
export default Avery;