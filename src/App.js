import React, { Component } from 'react';
import * as firebase from 'firebase'

class App extends Component {

  constructor() {
    super();
    this.state = {
      val: "No Value"
    }
  }

  componentDidMount() {
    var ref = firebase.database().ref().child('chat');
    ref.on('value', snap => {
      this.setState({
        val: snap.val()
      })
    })

  }

  render() {
    return (
      <div>Hello World: {this.state.val}</div>
    );
  }
}

export default App;
