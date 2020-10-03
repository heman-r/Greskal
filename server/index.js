const express = require("express")
const path = require("path")
const https = require("https");
const http = require("http");
const fs = require("fs");

const port = 80;
const app = express();

app.use('/static', express.static(path.join("/home/ubuntu/Greskal/portfolio/build/static")))

app.get('*', function(req, res) {  
    res.redirect('https://' + req.headers.host + req.url);

    // Or, if you don't want to automatically detect the domain name from the request header, you can hard code it:
    // res.redirect('https://example.com' + req.url);
})

app.get("/tic", (req, res) => {
    res.sendFile(path.join("/home/ubuntu/Greskal/face", 'build', 'index.html'));
})
app.get("/portfolio", (req, res) => {
    res.sendFile(path.join("/home/ubuntu/Greskal/portfolio", 'build', 'index.html'));
})

app.get("/background-about-me.jpg", (req, res) => {
    res.sendFile(path.join("/home/ubuntu/Greskal/portfolio", 'build', 'background-about-me.jpg'));
})

app.get("/", (req, res)=>{
    res.send("Hello world!");
})



https.createServer({
    key: fs.readFileSync('/home/ubuntu/Certificate/key.pem'),
    cert: fs.readFileSync('/home/ubuntu/Certificate/cert.pem'),
    passphrase: 'pass'
    },app).listen(443, () => console.log('###Https server listening on port 443###'));

