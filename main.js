import express from 'express'


const app = express()
const PORT = 5000;

app.get('/', (req, res) => {
    res.json({msg: "Hello"});
});


// CRUD Functionality of Movies

// R - For Reading movies
app.get('/movies', () => {

})

// C - For creating movies
app.post('/movies', () =>{

})

// U - For Update movie
app.put('/movies/:id', () => {

})

// D - For Deleting movie
app.delete('/movies/:id', () => {
    
})
 


app.listen(PORT, () =>{
    console.log(`This server is running at http://localhost:${PORT}`)
})