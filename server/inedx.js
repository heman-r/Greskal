const express = require("express")
const path = require("path")

const port = 3000;
const app = express();

app.use('/static', express.static(path.join("/home/ubuntu/Greskal/face/build/static")))

app.get("/tic", (req, res) => {
    res.sendFile(path.join("/home/ubuntu/Greskal/face", 'build', 'index.html'));
})

app.get("/", (req, res)=>{
    res.send("Hello world!");
})

app.listen(port, () => {
    console.log("********** Server listening on Port 80 **********");
})

