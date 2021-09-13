import React, { Component } from "react";
import Todo from "./components/todo.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      text:''
    };
  }

hanleChange=(e)=>{
  this.setState({text:e.target.value})
}

handleSubmit=(e)=>{
  e.preventDefault()
  if(this.state.text===0) return 

  const newItem={
    text:this.state.text,
    id:Date.now()
  }

  
    console.log(this.state.items.push(newItem))
  this.setState({text:''})
  // this.setState(state=>({
  //   items:state.items.concat(newItem),
  //   text:''
  // }))
}

  render() {
    const {items}=this.state
    return (
      <div>
        <Todo items={items} />
        <form onSubmit={this.handleSubmit}>
          <h3>todo</h3>
          <input onChange={this.hanleChange} value={this.state.text}/>
          <button>Submit{this.state.items.length+1}</button>
        </form>
      </div>
    );
  }
}

export default App;
