const express = require('express')
const mongoose = require('mongoose')


const app = express()

const ToDo = require('./models/ToDo.model');


app.use(express.json());



mongoose.connect("mongodb+srv://abhishiktvenkata:YYA3kMbqTdeuBnFG@myhomeprojectcluster.1omzbfv.mongodb.net/?retryWrites=true&w=majority&appName=myhomeprojectcluster").then(() => {
    console.log("Connected to MongoDB");
}).catch(() => {
    console.log("Error: ", err);
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

app.get('/', (req, res) => {    
    res.send("Hello World GET");
});

// code to retreive items from ToDo model in mongoDB
app.get('/todos', async(req, res) => {
    try{
        // code to list items from DB
        const todos = await ToDo.find();
        res.status(200).json(todos);
    } catch (err) { res.status(500).json(err);}
});
// code to add items to ToDo model in mongoDB
app.post('/todo', async (req, res) => { 
    try {
        // code to add items to DB
        const todo = await ToDo.create(req.body);
        res.status(200).json(todo);
    } catch (err) { res.status(500).json(err);}
});
// code to delete items from ToDo model

app.delete('/todo', async (req, res) => {
    try {
        // code to delete items from DB
        
        const todo = await ToDo.findByIdAndDelete(req.body._id);
    } catch (err) { res.status(500).json(err);}
});
// code to update items from ToDo model