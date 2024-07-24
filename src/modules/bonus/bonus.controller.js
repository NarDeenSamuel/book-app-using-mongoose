import authorModel from "../../../db/models/author.model.js";
import bookModel from "../../../db/models/book.model.js";






const getAuthorByNameOrBio = async(req,res)=>{

  let authors = await authorModel.find({ $or: [{ name:req.body.name }, { bio: req.body.bio }] })
  if(authors.length !=0 )
  {
    res.status(200).json({message:"Done",authors})
  }
  else
  {
    res.status(400).json({message:"Not Found"})

  }

}
const getBooksByTitleOrAuthor = async(req,res)=>{
  
  let books = await bookModel.find({ $or: [{ title:req.body.title }, { author: req.body.author }] })
  if(books.length !=0 )
  {
    res.status(200).json({message:"Done",books})
  }
  else
  {
    res.status(400).json({message:"Not Found"})

  }

}

const getAuthorWithBooks = async (req, res) => {
  const authorId = req.params.id;
  const author = await authorModel.findById(authorId).populate('books').exec();
  if(author)
  { 
    author.password=undefined
    res.status(200).json({ message: "Done", author });
  }
  else
  {
    res.status(400).json({ message: "Not Found"});
  }

}


  export {
    getAuthorByNameOrBio,getBooksByTitleOrAuthor,getAuthorWithBooks
  }
