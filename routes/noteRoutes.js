const express= require('express')
const router=express.Router()
const Note =require('../models/Note')

router.get('/',async (req,res)=>{ //get all notes
    const notes=await Note.find()
    res.json(notes)
})

router.post('/',async (req,res)=>{  //add new note
    const newNote=new Note({content:req.body.content})
    await newNote.save()
    res.json(newNote)
})

router.put('/:id',async (req,res)=>{  //update note
    const updateNote=await Note.findByIdAndUpdate(req.params.id,{content:req.body.content},{new:true})
    res.json(updateNote)
})

router.delete('/:id',async (req,res)=>{  //add new change
    await Note.findByIdAndDelete(req.params.id)
    res.json({message:'note deleted'})
})

module.exports=router;