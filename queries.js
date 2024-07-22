/*-------------------------------- Starter Code --------------------------------*/
// * Import our dependencies
const Todo = require('./models/todo.js')

const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');

const connect = async () => {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');
    await runQueries()
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
    process.exit();
};

const runQueries = async () => {
  console.log('Queries running.')
  // await createTodo()
  await findTodos()
  await foundTodo()
};

connect()
/*-------------------------------- Query Functions --------------------------------*/

// ! Important to use the async keyword when working with promises.
async function createTodo() {

  const todoData = {
    text: "Learn HTML",
    isComplete: false
  }

  const todo = await Todo.create(todoData)
  console.log("New Todo", todo)
}

// * All todos similar to INDEX
const findTodos = async () => {
  
  const todos = await Todo.find({})

  console.log("All todos:", todos)
}

// * Find a todo by _id SHOW
const foundTodo = async () => {
  const id = '6699a8682bc0077fc730b5aa'
  const todo = await Todo.findById(id)

  console.log("The one todo:",todo)
}