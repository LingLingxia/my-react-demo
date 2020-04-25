import React from 'react';
import './App.css';
import TodoItem from './todo';
class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      inputValue:'',
      todos: ['1']
    }
  }
  deleteTodo(index){
     let todos = [...this.state.todos];
     todos.splice(index,1);
     this.setState({
       todos
     })
  }
  newTodoChange(e){
    let inputValue = e.target.value;
    this.setState({
        inputValue
    })
  }
  addTodo(){
    let todos = [...this.state.todos,this.state.inputValue];
    this.setState({
      todos
    })
    this.setState({
      inputValue:''
  })
  }

  render(){
   return (
      <div className="App">
        <input onChange={this.newTodoChange.bind(this)} value={this.state.inputValue}></input> <button onClick={this.addTodo.bind(this)}>add</button>
      { this.state.todos.map((item,index)=>{
         return  (
         <TodoItem text={item} key={index} index={index} deleteTodo={this.deleteTodo.bind(this,index)}></TodoItem>
         )
       })
      }
      </div>
    );
  }
}

export default App;
