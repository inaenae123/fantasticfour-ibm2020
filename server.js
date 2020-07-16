require('dotenv').config({path:'.env'})
const Cloudant = require('@cloudant/cloudant');
const account = "eon.john@ibm.com";
const password = process.env.cloud_password;
//Connection to database
const cloudant = Cloudant({account,password});
/**
 * Creates document w/data on IBM Cloudant
 */
const createDoc = async (key,data) => {
    //Convert key to a string
    key = JSON.stringify(key);
    //Create key
    await cloudant.db.create(key).then(()=>{
        //Insert data under key (document id)
        cloudant.use(key).insert(data)
        .then(res=>{
            console.log(res)
        })
        .catch(e=>{
            console.log("1. ERROR OCCURED:",e)
        })
    }).catch(e=>{
        console.log("2. ERROR OCCURED:",e);
    }) 
}

createDoc("Test",{tesing:"dummy test"})