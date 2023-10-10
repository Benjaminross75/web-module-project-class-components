import React from 'react'
import Form from './Form'
import TodoList from './TodoList'

let id = 0;
let getId = () => ++id
const initialTodos = [
  {id: getId(), name: 'Walk the dog', completed: false},
  {id: getId(), name: 'Learn coding', completed: true},
  {id: getId(), name: 'Understand Javascript', completed: false},
]
export default class App extends React.Component {
  state = {
    todos: initialTodos
  }

  addTodo = (name) =>{
    const newTodo = {
      id: getId(),
      name:name,
      completed: false,
    }
    this.setState({
      ...this.state,
      //todos: this.state.todos.concat({id:getId(), completed:false, name})

      todos: [...this.state.todos, newTodo]
    })
  }

  toggleCompleted = id =>{
    this.setState({
      ...this.state,
      todos: this.state.todos.map(td=> {
        if(td.id === id) return {...td, completed: !td.completed}
        return td
      })
    })
  }
  render() {
    return (
      <div>
        <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted}/>
        <Form addTodo={this.addTodo}/>
      </div>
    )
  }
}
