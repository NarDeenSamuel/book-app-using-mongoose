import mongoose, { Types } from "mongoose"





const bookSchema =  new mongoose.Schema({
    title:{ type: String, required: true },
    content:{ type: String, required: true },
    author:{ type: Types.ObjectId, ref: 'Author',required:true } ,
    publishedDate:{
        type:Date,
        default:new Date()
    }
},{versionKey:false})


const bookModel =  mongoose.model('Book',bookSchema)

export default bookModel