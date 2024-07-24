import authorModel from "../../../db/models/author.model.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const signUp = async (req,res) => {
    let addUser = await authorModel.insertMany(req.body)
    addUser[0].password=undefined
    res.status(201).json({message:"Added",addUser})
}

const signIn = async (req,res) => {

    let author = await authorModel.findOne({email:req.body.email})

    if(author && bcrypt.compareSync(req.body.password,author.password))
    {
            let token = jwt.sign({id:author._id},"secret")
            res.status(200).json({message:"welcome",token})
    }
    else
    {
        res.status(404).json({message:" Invalid email or password "})
    }
    
}

const getAuthers = async (req,res)=>{

let authers = await authorModel.find().populate('books').exec()
res.status(200).json({message:"Done",authers})

}


const getAuther = async (req,res)=>{
    let auther = await authorModel.findById(req.params.id).select('name email bio birthDate').populate('books').exec()
    res.status(200).json({message:"Done",auther})
    }

const updateAuther = async (req,res)=>{
    let author = await authorModel.findByIdAndUpdate(req.params.id,{name:req.body.name},{new:true})
  if(author)
  {
    res.status(200).json({message:"Updated",author})
  }
  else{
    res.status(400).json({message:"Not Found"})
  }
   
  }


  const addBioAndBirthDate = async (req,res)=>{
    let author = await authorModel.findByIdAndUpdate(req.params.id,{bio:req.body.bio,birthDate:new Date(req.body.birthDate)},{new:true})
    if(author)
        {
          res.status(200).json({message:"Updated",author})
        }
        else{
          res.status(400).json({message:"Not Found"})
        }
  
  
    
}

const deleteAuthor = async (req,res)=>{
    let author = await authorModel.findByIdAndDelete(req.params.id)
    if(author)
        {
            res.status(200).json({message:"Deleted",author}) 
        }
        else{
          res.status(400).json({message:"Not Found"})
        }
   
}



export {
    signUp,signIn,getAuthers,getAuther,updateAuther,addBioAndBirthDate,deleteAuthor
}
