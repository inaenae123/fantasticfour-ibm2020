const express = require('express');
const router =  express.Router();
const axios = require('axios');
const url = "https://4d11c504-1f41-4dad-ab58-9a0e86c28cd2-bluemix:bc9b9c642faa9b0b5bbd0fbb799f74a3cebbf5fc1166f0cf371167704808f9fd@4d11c504-1f41-4dad-ab58-9a0e86c28cd2-bluemix.cloudantnosqldb.appdomain.cloud/fantastic_four"
//Routes
/**
 * Save petition to db
 */
router.post('/savePetition',async(req,res)=>{
    console.log("REQUEST: ", req.body.value)
    const petition = req.body.value;
    axios.post(url,JSON.stringify(petition)).then(r=>console.log(r)).catch(e=>console.log(e))
    return res.json(location);

})
router.get('/',(req,res)=>{
    const data = {
        username:'Eon John',
        age:20
    };
    return res.json(data)

}) 
/**
 * Get petitions from db
 */
router.get('/getPetitions',(req,res)=>{
    axios(`${url}/_all_docs`).then(r=>{
        console.log(r.data)
        return res.json(r.data)
    }).catch(e=>{
        console.log("ERROR: ",e)
        return e
    })
});
/**
 * Get petition from db
 */
router.get('/getPetition',(req,res)=>{
    const id = req.query.id;
    console.log("id:",id)
    axios(`${url}/${id}`).then(r=>{
        console.log(r.data)
        return res.json(r.data)
    }).catch(e=>{
        console.log("ERROR: ",e)
        return e
    })
});
router.post('/uploadData',(req,res) => {
    const data = req.body;
    console.log(data)
    axios.post(url,data).then(r=>{
        console.log(r.data)
        return res.json(r.data)
    }).catch(e=>{
        console.log(("ERROR: ", e))
        return e
    })
}) 

module.exports = router;