const express=require('express')
const app=express()

app.set('view engine','ejs') 
app.use(express.static('public')) 

app.use(express.json())
app.use(express.urlencoded({extended:true}))

require("dotenv").config()

const PORT=process.env.PORT ||3000;

app.get('/',(req,res)=>{
    res.send("Anant Sharma's render server")
})

app.get('/login',(req,res)=>{
    res.render('login')
})

app.post('/authenticate',(req,res)=>{
    const {username,password}=req.body
    if(username===process.env.NAME && password===process.env.PASSWORD){
        res.redirect('https://anantsharma108.github.io/digital-notebook/index.html?authenticated=true')
    }else{
        res.send(`credentials not match .....either username or password is incorrect😢😢`)
    }
})

app.listen(PORT)