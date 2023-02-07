const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/home', (req, res) => {
  res.sendFile(__dirname + "/views/home.html")
})

app.get('/about', (req, res) => {
  res.sendFile(__dirname + "/views/about.html")
})

app.get("/works", (req,res)=>{
  res.sendFile(__dirname + "/views/works.html")
})

app.get("/gallery", (req,res)=>{
  res.sendFile(__dirname + "/views/gallery.html")
})
app.use(function(req, res, next) {
    res.status(404).send('Lo sentimos, esta página no está en nuestra JorgeAgenda!!');
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})