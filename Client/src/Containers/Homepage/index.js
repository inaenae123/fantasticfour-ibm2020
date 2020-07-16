import React, {Component} from 'react';
import styles from './styles.module.css';
import { Card } from 'semantic-ui-react';

class Homepage extends Component{

    render(){

        const items =  [
            {
                header: 'Get Help',
                href: '/Tyler',
                color: 'grey'
              },
              {
                header: 'Donate',
                href: '/Avery',
                color:'grey'
              },
              {
              header: 'Make a Difference',
              href: '/Eon',
              color:'grey'
            },
            {
                header: 'Be More Informed',
                href: '/Carmina',
                color:'grey'
              }
        ];

        return(
            <div className="main" style={styles}>
                <h1 style={{paddingTop: '20px'}}>Homepage</h1>
                <h3>I want to...</h3>
                <Card.Group centered items={items} />
                {/* <NavLink to='/Tyler'><p style={pStyle}>Get Help</p></NavLink>
                <NavLink to='/Avery'><p style={pStyle}>Donate</p></NavLink>
                <NavLink to='/Eon'><p style={pStyle}>Make a Difference</p></NavLink>
                <NavLink to='/Carmina'><p style={pStyle}>Be More Informed</p></NavLink> */}
            </div>
        )
    }
}

export default Homepage;