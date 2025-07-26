const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const noteRoutes=require('./routes/noteRoutes')

const app=express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

mongoose.connect("mongodb+srv://anantsharma108:ALZM132%25%25@cluster0.fb4sjk0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",{useUnifiedTopology:true})
.then(()=>{console.log('mongo DB connected')}).catch((err)=>{console.log(err)})

app.set('view engine','ejs') 
app.use(express.static('public')) 

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


app.use('/api/notes',noteRoutes);

app.listen(PORT)