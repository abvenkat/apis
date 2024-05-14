const mongoose  = require('mongoose');

const ToDoSchema = new mongoose.Schema({ 
    title: {
        type: String,
        required: true
    }
}, 
{
    timestamps: true
}
);

const ToDo = mongoose.model('ToDo', ToDoSchema);

module.exports = ToDo;