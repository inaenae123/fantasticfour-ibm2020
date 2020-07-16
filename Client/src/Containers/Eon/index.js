import React, {Component} from 'react';
import styles from './styles.module.css';
import 'semantic-ui-css/semantic.min.css';


class Eon extends Component{

    state ={
        cards: [
            {
                header: 'View Events Around Me',
                description: '',
            },
            {
                header: 'Add Event',
                description: 'Add events you are hosting or a part of.',
            },
        ],
    };
    render(){
        return(
            <div className="container">
                <h1>I Want To Make a Difference</h1>
                {/* will add stuff, working on my machine */}
                {/*client side auth for now */}
                {/* user will login to eventbrite to share an event they are a part of or they are hosting*/}
            </div>

        )
    }
}
export default Eon;