import React from 'react';
import './App.css';
import TextArea from './textarea'
import ReduxTest from './redux'
import StatusPromotion from './status-promotion'
import TodoItem from './todo/todo';
import Clock from './clock/clock'
import CommentBox from './comment-box/comment-box'
import ThemeButton from './theme-context/theme-button'
import ThemeButtonConsumer from './theme-context/theme-button-consumer'
import { ThemeContext,themes } from './theme-context/theme-context'
import { Link, Route, Switch ,Redirect } from 'react-router-dom'
function Toolbar(props){
   return (
     <ThemeButton onClick={props.changeTheme}>
           changeTheme
     </ThemeButton>
   )
}

function TextComponent(){
    return <div> test test </div>
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
        <ul>
          <li>
            <Link to="/redux-test">redux-test</Link>
          </li>
          <li>
            <Link to="/todo-item">todo item</Link>
          </li>
          <li>
             <Link to="/text-area">controled-component</Link>
          </li>
          <li>
            <Link to="/status-promotion"> status-promotion </Link>
          </li>
          <li>
            <Link to="/strange-clock"> strange-clock </Link>
          </li>
          <li>
            <Link to="/comment-box"> comment-box </Link>
          </li>
          <li>
             <Link to="/strange-button"> strange-button </Link>
          </li>
        </ul>
        <Switch>
            <Route path="/redux-test">
              <ReduxTest></ReduxTest>
            </Route>
            <Route path="/todo-item">
                <input onChange={this.newTodoChange.bind(this)} value={this.state.inputValue}></input> <button onClick={this.addTodo.bind(this)}>add</button>
              { this.state.todos.map((item,index)=>{
                return  (
                <TodoItem text={item} key={index} index={index} deleteTodo={this.deleteTodo.bind(this,index)}></TodoItem>
                )
              })
              }
            </Route>
            <Route path="/text-area" component={TextArea}>

            </Route>
            <Route path="/status-promotion" component={StatusPromotion}>

            </Route>
            <Route path="/strange-clock">
                <Clock key="clock"></Clock>
            </Route>
            <Route path="/comment-box" component={CommentBox}>

            </Route>
            <Route path="/strange-button">
                <ThemeContext.Provider value={this.state.theme}>
                    <Toolbar changeTheme={this.toggleTheme}></Toolbar>
                    <ThemeButtonConsumer></ThemeButtonConsumer>
                </ThemeContext.Provider>
                <ThemeButton />
            </Route>  
           
              {/* default to todo-item */}
            <Redirect to="/todo-item"/>
           
        </Switch>     
      </div>
    );
  }
}

export default App;
