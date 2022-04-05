const express = require('express');
const app = express();
const PORT = 3000;
const starturl = 'http://api.weatherapi.com/v1/current.json?key=5a7b27039073496996c34110223103&q=';
// const place = 
const endurl = '&aqi=no'

// const url = starturl + place + endurl;
app.get('/', (req,res)=>{
    res.send('App Running!!!')
})

app.listen(PORT, (req,res)=>{
    console.log('App 🏃🏽‍♂️🏃🏽‍♂️🏃🏽‍♂️ on PORT ' + PORT + '!!!');
})