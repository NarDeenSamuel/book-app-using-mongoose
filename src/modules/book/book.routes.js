import { Router } from "express";
import { getBooks,getBook,addBook ,UpdateBook,deleteBook,} from "./book.controller.js";
import { verifyToken } from "../../../middleware/verifyToken.js";



const bookRouter = Router()


bookRouter.get('/book',getBooks)
bookRouter.get('/book/:id',getBook)
bookRouter.post('/book',verifyToken,addBook)
bookRouter.patch('/book',verifyToken,UpdateBook)
bookRouter.delete('/book',verifyToken,deleteBook)
export default bookRouter