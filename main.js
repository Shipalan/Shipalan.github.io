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
app.get("/pics", (req,res) => {
    res.sendFile(path.join(__dirname, "./pics")) 
})


const port = process.env.PORT || 3021;
app.listen(port, () => console.log(`Listening on port ${port}`));