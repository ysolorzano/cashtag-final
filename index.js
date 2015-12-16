var express = require('express');
 
var server = express();
server.use(express.static(__dirname + '/public'));

server.set('port', (process.env.PORT || 5000));
server.set('view enginer', 'ejs');

server.listen(server.get('port'), function() {
    console.log('server listening on port', server.get('port'));
});
