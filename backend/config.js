import dotenv from 'dotenv';

dotenv.config()

export const PORT = 5555
const password = process.env.PASSWORD_MONGO
export const mongoDBURL = 
`mongodb+srv://root:${password}@book-store-mern.npgouye.mongodb.net/books-collection?retryWrites=true&w=majority`
