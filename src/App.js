import React from 'react';
import './App.css';
import TodoItem from './todo/todo';
import Clock from './clock/clock'
import CommentBox from './comment-box/comment-box'
import ThemeButton from './theme-context/theme-button'
import ThemeButtonConsumer from './theme-context/theme-button-consumer'
import { ThemeContext,themes } from './theme-context/theme-context'

function Toolbar(props){
   return (
     <ThemeButton onClick={props.changeTheme}>
           changeTheme
     </ThemeButton>
   )
}
class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      inputValue:'',
      todos: ['1'],
      theme:themes.light
    }

    this.toggleTheme = ()=>{
      this.setState(state=>({
         theme:
           state.theme===themes.dark?
             themes.light:themes.dark
      }))
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
          { 
            this.state.todos.map((item,index)=>{
            return  (
                <TodoItem  key={index}  text={item} index={index} deleteTodo={this.deleteTodo.bind(this,index)}></TodoItem>
              )
            })
          }
        {/* <Clock key="clock"></Clock> */}
        <CommentBox></CommentBox>
        <ThemeContext.Provider value={this.state.theme}>
            <Toolbar changeTheme={this.toggleTheme}></Toolbar>
            <ThemeButtonConsumer></ThemeButtonConsumer>
        </ThemeContext.Provider>
        <ThemeButton />
       
      </div>
    );
  }
}

export default App;
