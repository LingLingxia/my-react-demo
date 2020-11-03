import React, { Component } from 'react';
import { createStore } from 'redux'

import  fun from 'lib';
console.log(fun);
function reduce (state=0,action){
   switch(action.type){
       case 'ADD':
           state +=1; break;
        case 'REDUCE':
           state -=1; break;  
   }
   return state;
}
const store = createStore(reduce);

class reduxTest extends Component {
    state = { count:store.getState() }
    render() { 
        store.subscribe(()=>{
            this.setState({ count: store.getState() });
        })
        return ( <div>
            {this.state.count}
            <button onClick={()=>{store.dispatch({type:'ADD'})}}>add</button>
            <button onClick={()=>{store.dispatch({type:'REDUCE'})}}>reduce</button>
            </div> );
    }
}
 

export default reduxTest;

