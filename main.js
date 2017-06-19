const express = require('express');
const app = express();
const loremIpsum = require('lorem-ipsum');

app.get('/lorem', function(req, res) {
    res.send(loremIpsum({count: 3, units: 'paragraphs', format: 'html'}));    
});

app.listen(3002, function() {
  console.log("Hey, I'm up and running.");  
})