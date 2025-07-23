const express=require('express')
const app=express()

app.set('view engine','ejs') 
app.use(express.static('public')) 

app.use(express.json())
app.use(express.urlencoded({extended:true}))

const PORT =process.env.PORT ||3000;

app.get('/',(req,res)=>{
    res.send("Anant Sharma's render server")
})

app.get('/login',(req,res)=>{
    res.render('login')
})

app.post('/authenticate',(req,res)=>{
    const {username,password}=req.body
    if(username===process.env.USERNAME && password===process.env.PASSWORD){
        res.send('user authenticated successfully')
    }else{
        res.send('credentials not match')
    }

})

app.listen(PORT)