import authorModel from "../db/models/author.model.js"

import bcrypt from 'bcrypt'






export const checkEmail = async(req,res,next)=>{


    let author = await authorModel.findOne({email:req.body.email})
    
if(author)
    {
        res.status(409).json({message:"email is already exist"})
    }
    else{
        req.body.password= bcrypt.hashSync(req.body.password,8)
        next()
    }

}



