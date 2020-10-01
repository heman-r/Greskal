const express = require("express")
const path = require("path")

const port = 80;
const app = express();

app.use('/static', express.static(path.join("/home/ubuntu/Greskal/portfolio/build/static")))

app.get("/tic", (req, res) => {
    res.sendFile(path.join("/home/ubuntu/Greskal/face", 'build', 'index.html'));
})
app.get("/portfolio", (req, res) => {
    res.sendFile(path.join("/home/ubuntu/projects/Greskal/portfolio", 'build', 'index.html'));
})

app.get("/background-about-me.jpg", (req, res) => {
    res.sendFile(path.join("/home/ubuntu/projects/Greskal/portfolio", 'build', 'background-about-me.jpg'));
})

app.get("/", (req, res)=>{
    res.send("Hello world!");
})

app.listen(port, () => {
    console.log("********** Server listening on Port 80 **********");
})

