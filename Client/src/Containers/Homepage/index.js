import React, {Component} from 'react';
import styles from './styles.module.css';
import {NavLink} from 'react-router-dom';

class Homepage extends Component{
    render(){
        const pStyle = {
            display: 'inline-block',
            border: '1px solid #ccc',
            boxShadow: '1px 1px #eee',
            margin: '15px',
            padding: '15px',
            cursor: 'pointer'
        };

        return(
            <div className="main" style={styles}>
                <h1 style={{paddingTop: '20px'}}>Homepage</h1>
                <h3>I want to...</h3>
                <NavLink to='/Tyler'><p style={pStyle}>Get Help</p></NavLink>
                <NavLink to='/Avery'><p style={pStyle}>Donate</p></NavLink>
                <NavLink to='/Eon'><p style={pStyle}>Make a Difference</p></NavLink>
                <NavLink to='/Carmina'><p style={pStyle}>Be More Informed</p></NavLink>
            </div>
        )
    }
}

export default Homepage;