import express from 'express'


const app = express()
const PORT = 5000;

app.get('/', (req, res) => {
    res.json({msg: "Hello"});
});

app.listen(PORT, () =>{
    console.log(`This server is running at http://localhost:${PORT}`)
})