import { Router } from "express";
import { getAuthorByNameOrBio ,getBooksByTitleOrAuthor,getAuthorWithBooks} from "./bonus.controller.js";





const bonusRoter= Router()


bonusRoter.get('/bonus/author',getAuthorByNameOrBio)
bonusRoter.get('/bonus/book',getBooksByTitleOrAuthor)
bonusRoter.get('/bonus/:id',getAuthorWithBooks)
export default bonusRoter