import React, {Component} from 'react';
import styles from './styles.module.css';
import 'semantic-ui-css/semantic.min.css';
import axios from 'axios';
import { Card } from 'semantic-ui-react';

class Eon extends Component{
    state ={
        colors:["red","orange","yellow","olive","green","teal","blue","violet","purple","pink","brown","grey","black"],
        petitions:[],
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
    parseData = data => {
        const _data = {
            header:data.title,
            description:data.title,
            id:data.id,
            href:`https://www.change.org/p/${data.slug}`,
            color: this.state.colors[Math.floor(Math.random() * 12) + 0]
        }
        const petitions = this.state.petitions;
        petitions.push(_data);
        this.setState({petitions});
    }
    getData = async (id) => {
        console.log('getting data')
       await axios("/api/getPetition",{
           params:{
               id
           }
       }).then(res=>{
           this.parseData(res.data)
           console.log(res);
        }).catch(e=>console.log(e))
    }
    getAllPetitions = async () => {
        await axios("/api/getPetitions").then(res=>{
            const data = res.data.rows;
            console.log(data)
            for(let i = 0; i < data.length; i++){
                let id = data[i].id;
                this.getData(id)
            }
            // this.parseData(res.data)
            // console.log(res);
         }).catch(e=>console.log(e))
    }
     componentDidMount(){
       this.getAllPetitions()
        
        // fetch('https://4d11c504-1f41-4dad-ab58-9a0e86c28cd2-bluemix:bc9b9c642faa9b0b5bbd0fbb799f74a3cebbf5fc1166f0cf371167704808f9fd@4d11c504-1f41-4dad-ab58-9a0e86c28cd2-bluemix.cloudantnosqldb.appdomain.cloud/fantastic_four/23452235')
        //     .then(response => response.json())
        //     .then(data => console.log(data));
    
    }
    render(){
        return(
            <div className="container">
                <h1>I Want To Make a Difference</h1>
                <Card.Group centered items={this.state.petitions} />
                {/* will add stuff, working on my machine */}
                {/*client side auth for now */}
                {/* user will login to eventbrite to share an event they are a part of or they are hosting*/}
            </div>

        )
    }
}
export default Eon;