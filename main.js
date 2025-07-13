import express from 'express'
import movieRoutes from './routes/movies.route.js'


const app = express()
const PORT = 5000;

app.get('/', (req, res) => {
    res.json({msg: "Hello friends"});
});


// CRUD Functionality of Movies
// Client - > Middleware - > Server
app.use('/movies',movieRoutes);


app.listen(PORT, () =>{
    console.log(`This server is running at http://localhost:${PORT}`)
})