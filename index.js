const express = require('express')
const app = express()
const fs= require('fs')
const port =8000


app.get('/timestamp',(req,res)=>{
    let date= new Date()
        fs.writeFileSync(`CurrentTimeStamp.txt`,`${date}`,'utf-8')
     let data= fs.readFileSync(`CurrentTimeStamp.txt`,'utf-8')

    res.status(200).send(`${date}`)
})

app.listen(port,()=>{
    console.log("App is listening to "+port)
})