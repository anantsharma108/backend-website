const express=require('express')
const app=express()

const PORT =process.env.PORT ||3000;

app.get('/',(req,res)=>{
    res.send('Anant')
})

app.get('/login',(req,res)=>{
    res.send('Anant login page')
})


app.listen(PORT)