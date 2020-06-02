import React from 'react';
class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state={
      date:new Date()
    }
    this.timer = null;
  }
  componentDidMount(){
    this.timer = setInterval(()=>{
       this.setState({
         date:new Date()
       })
    },1000)
  }
  componentDidUpdate(currentProps,currentState){
      console.log(currentState);
  }
  componentWillUnmount(){
      clearInterval(this.timer);
  }

  render(){
    return (
      <div className="clock-wrap">
         <h1>{this.state.date.toLocaleTimeString()}</h1>
      </div>
    )
  }
}

export default Clock;