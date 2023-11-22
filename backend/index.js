import express from 'express'
import { PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose';
import { Book } from './models/booksModel.js';



const app = express();
app.use(express.json());

app.get("/",(request,response)=>{
    console.log(request)
    return response.status(234).send('Welocme to MERN Stack')
})

app.post('/books',async (request,response) => {
try {
    if(!request.body.title ||
        !request.body.author||
        !request.body.publishYear){
            response.status(400).send(
                {message: 'Send all required field: title, author ,publishYear'}
             )  
        }
} catch (error) {
 console.log(error.message)  
 response.status(500).send(
    {message: error.message}
 ) 
}
const newBook = {
    title: request.body.title,
    author: request.body.author,
    publishYear: request.body.publishYear
 };

 console.log(request.body.title)
 const book = await Book.create(newBook); 

 return response.status(201).send(book);
})

mongoose
.connect(mongoDBURL)
.then(()=>{
    console.log('App connected to database')
    app.listen(PORT,()=>{
        console.log(`App is listening to port: ${PORT}`)
    })
}
).catch(()=>{

});