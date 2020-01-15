import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {

  componentDidMount(){
    axios.get("http://localhost:3002/api/users/brands").then(res => {
      console.log(res);
    })
  }
  render() {
  return (
    <div>
      My App
    </div>
  );
  }
}

export default App;
