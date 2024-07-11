const express = require('express')
const app = express()
const port = 3000

app.use(express.static(`public`))
app.get('/home', (req, res) => {
    res.sendFile(__dirname+`/home.html`)
})

app.get('/about',(req,res)=>{
    res.sendFile(__dirname+'/about.html')
})

app.get('/contect',(req,res)=>{
    res.sendFile(__dirname+'/contect.html')
})

app.get('/process',(req,res)=>{
    var No1= req.query.txt1;
    var No2= req.query.txt2;
    var c = parseInt(No1)+ parseInt(No2);
    res.send('sum is'+c)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})