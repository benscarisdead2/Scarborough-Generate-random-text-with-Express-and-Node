const express = require('express');
const app = express();
const loremIpsum = require('lorem-ipsum')
  , output = loremIpsum({
      count: 3,
      units: 'paragraphs'
  }); 

app.use(express.static('public'));

app.get('/lorem', function(req, res) {
    res.send(output);    
})

app.get('/lorem/', function(req, res) {
res.send(output);    
})

app.listen(3002, function() {
  console.log("Hey, I'm up and running.");  
})