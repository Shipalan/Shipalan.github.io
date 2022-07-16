const express = require("express")
const cors = require("cors")
const path = require("path")

const app = express();
app.use(express.json());
app.use(cors());


app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname, "./index.html")) 
})
app.get("/css", (req,res) => {
    res.sendFile(path.join(__dirname, "./portfolio.css")) 
})
app.get("/js", (req,res) => {
    res.sendFile(path.join(__dirname, "./main.js")) 
})
app.get("/gitHub", (req,res) => {
    res.sendFile(path.join(__dirname, "./github-removebg-preview.png")) 
})
app.get("/linkedin", (req,res) => {
    res.sendFile(path.join(__dirname, "./LI-In-Bug.png")) 
})
app.get("/myself", (req,res) => {
    res.sendFile(path.join(__dirname, "./myself-removebg-preview.png")) 
})
app.get("/upArrow", (req,res) => {
    res.sendFile(path.join(__dirname, "./upArrow-removebg-preview.png")) 
})


const port = process.env.PORT || 3021;
app.listen(port, () => console.log(`Listening on port ${port}`));