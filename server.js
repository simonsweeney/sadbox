var fs = require('fs');
var express = require('express');

var server = express();

var files = fs.readdirSync( __dirname )
    .filter( file => fs.statSync( file ).isDirectory() && file[ 0 ] === '_' );

server.get('/', ( req, res ) => {
    
    res.send('hi there');
    
})

files.forEach( file => {
        
    server.use( '/' + file, express.static( file + '/www' ) );
    
})

server.listen( process.env.PORT, process.env.IP, () => console.log('👍🏻') );