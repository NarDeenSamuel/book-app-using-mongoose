import { errorMonitor } from "events"
import bookModel from "../../../db/models/book.model.js"
import jwt from "jsonwebtoken"
import authorModel from "../../../db/models/author.model.js"
import e from "express"





const getBooks = async (req, res) => {

    let books = await bookModel.find()
    res.status(200).json({ message: "done", books })
}

const getBook = async (req, res) => {
    let book = await bookModel.findById(req.params.id)
    if (book) {
        res.status(200).json({ message: "done", book })
    }
    else {
        res.status(400).json({ message: "Book Not Found" })
    }
}


const addBook = async (req, res) => {
    req.body.author = req.user.id
    let books = await bookModel.insertMany([req.body]);
    let book = books[0];
    await authorModel.findByIdAndUpdate(req.user.id, { $push: { books: book._id } })


    res.status(201).json({ message: "Added", book })
}



const UpdateBook = async (req, res) => {


    let book = await bookModel.findById(req.body.id)

    if (book) {
        if (book.author == req.user.id) {
            book.content = req.body.content;
            await book.save();
            res.status(200).json({ message: "Updated", book })
        }
        else{
            res.status(400).json({ message: "Can't do it" })
        }

    }
    else {
        res.status(400).json({ message: "Book Not Found" })
    }

}





const deleteBook = async (req, res) => {

    let book = await bookModel.findById(req.body.id)
    if(book){
        if (book.author == req.user.id) {
            await bookModel.findByIdAndDelete(req.body.id)
            await authorModel.findByIdAndUpdate(req.user.id, { $pull: { books: book._id } })

            res.status(200).json({ message: "deleted" })
        }
        else{
            res.status(400).json({ message: "Can't do it" })
        }
    }
   
    
    else {
        res.status(400).json({ message: "Book not found" })
    }

}

export {
    getBooks, getBook, addBook, UpdateBook, deleteBook
}