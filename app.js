const express = require('express');
const https = require('https');
const app = express();
const PORT = 3000;
// const starturl = 'http://api.weatherapi.com/v1/current.json?key=5a7b27039073496996c34110223103&q=';
// const place = 
// const endurl = '&aqi=no'

const url = 'https://api.weatherapi.com/v1/current.json?key=5a7b27039073496996c34110223103&q=Chicago&aqi=no';
app.get('/', (req,res)=>{
    https.get(url, res=>{
        console.log(res.statusCode);

        res.on('data', data=>{
            const weatherData = JSON.parse(data);
            console.log(weatherData);
        })
    })
    res.send('App Running!!!')
})

app.listen(PORT, (req,res)=>{
    console.log('Server 🏃🏽‍♂️🏃🏽‍♂️🏃🏽‍♂️ on PORT ' + PORT + '!!!');
})