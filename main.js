import express from 'express'
import movieRoutes from './routes/movies.route.js'
import { connect } from 'mongoose';
import connectDB from './lib/db.js';


const app = express()
const PORT = 5000;

// Connect DB
connectDB();

app.get('/', (req, res) => {
    res.json({msg: "Hello friends"});
});


// CRUD Functionality of Movies
// Client - > Middleware - > Server
app.use('/movies',movieRoutes);


app.listen(PORT, () =>{
    console.log(`This server is running at http://localhost:${PORT}`)
})