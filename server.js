import express from 'express'


//code
const app = express()

app.get("/",(req,res)=>{
    res.send("YASH")
})
app.listen(5000,()=>{
    console.log('server Started')
})