import mongoose, { Types } from "mongoose"






const authorSchema =  new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true},
    password: { type: String, required: true },
    bio:String,
    birthDate:Date,
    books:[{ type:Types.ObjectId, ref: 'Book' }]
},{versionKey:false})


const authorModel =  mongoose.model('Author',authorSchema)

export default authorModel