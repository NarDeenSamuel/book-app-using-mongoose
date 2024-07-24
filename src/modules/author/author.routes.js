import { Router } from "express";
import { signIn, signUp ,getAuthers , getAuther,updateAuther,addBioAndBirthDate,deleteAuthor} from "./author.controller.js";
import { checkEmail } from "../../../middleware/checkemail.js";



const authorRouter = Router()



authorRouter.post("/signUp",checkEmail,signUp)
authorRouter.post("/signIn",signIn)
authorRouter.get("/author",getAuthers)
authorRouter.get("/author/:id",getAuther)
authorRouter.put('/author/:id',updateAuther)
authorRouter.patch('/author/:id',addBioAndBirthDate)
authorRouter.delete('/author/:id',deleteAuthor)
export default authorRouter