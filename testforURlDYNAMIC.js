var express = require('express');
var app = express();

app.get('/:1', function(req, res){
   res.send('The id you specified is ' + req.exampleAssignments.title);
});
app.listen(3000);