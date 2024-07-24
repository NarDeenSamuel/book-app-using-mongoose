import express from 'express'
import { dbConnection } from './db/dbConnection.js'
import bookRouter from './src/modules/book/book.routes.js'
import authorRouter from './src/modules/author/author.routes.js'
import bonusRoter from './src/modules/bonus/bonus.routes.js'




const app = express()
const port = 3000 


app.use(express.json());

app.use(bookRouter)
app.use(authorRouter)
app.use(bonusRoter)



app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))