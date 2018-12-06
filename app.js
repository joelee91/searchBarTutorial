import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bulma/bulma';

class App extends Component {
  state = {
    list: [
      "Go to the store",
      "Wash the dishes",
      "Learn some code"
    ]
  }

  render() {
    return(
      
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));