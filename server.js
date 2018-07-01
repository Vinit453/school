
// server.js/
const path = require('path');
const express = require('express');
const app = express();
// Run the app by serving the static files
// in the dist directory
// If an incoming request uses
// a protocol other than HTTPS,
// redirect that request to the
// same url but with HTTPS
const forceSSL = function() {
    return function (req, res, next) {
        if (req.headers['x-forwarded-proto'] !== 'https') {
        return res.redirect(
            ['https://', req.get('Host'), req.url].join('')
        );
        }
        next();
    }
}
// Instruct the app
// to use the forceSSL
// middleware
//app.use(forceSSL());
app.use('/dist/schoolManagement', express.static(__dirname + '/dist/schoolManagement'));

// For all GET requests, send back index.html
// so that PathLocationStrategy can be used
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/schoolManagement/index.html'));
  });

console.log("server started");
// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 9000 );
