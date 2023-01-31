const express = require('express');
const app = express();
const data = require('./data');
const cors = require('cors');


app.use(
    cors({
    origin : '*'
}))
app.get('/data',function(req,res){
    res.json(200,{
        data : data
    })
})



app.listen(8000,function(err){
    if(err){
        console.log('There was an error listening', err);
        return
    }

    console.log('Server is up and running on Port 8000');
});