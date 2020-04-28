import React from 'react';
class CommentBox extends React.Component{
  constructor(props){
     super(props);
     this.state = {
       value:''
     }
     this.handleSubmit = this.handleSubmit.bind(this);
     this.inputChange = this.inputChange.bind(this);
  }
  inputChange(e){
      this.setState({
        value:e.target.value
      })
      console.log(e.target.value);
  }
  handleSubmit(e){
    alert(this.state.value);
    e.preventDefault();

  }
  render(){
    return (
      <form className = "p-5" onSubmit={this.handleSubmit}>
         <label>留言内容</label>
         <input type="text"
          className="form-control"
          placeholder="请输入内容"
          onChange={this.inputChange.bind(this)}
          value={this.state.value}
         />
         <button type="submit" className="btn btn-primary" >留言</button>
      </form>
    )
  }
}
export default CommentBox