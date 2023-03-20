let request = require('request');

let apiKey = 'dfe902d27797cd7c4114202f1bd37fb6';
let location = 'melbourne';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`

request(url, function (err, response, body) {
if(err){
    console.log('error:', error);
} else {
    console.log('body:', body);
}
});