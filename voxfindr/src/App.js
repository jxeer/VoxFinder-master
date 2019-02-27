import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { fetchTracks } from './services/MusixMatch';
import { createCipher } from 'crypto';
import Form from "./components/Form"

class App extends Component {
  constructor(){
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
     searchtext: ''
   }
  }
async componentDidMount() {
 const tracks = await fetchTracks()
 console.log(tracks)
  }

handleChange = (e) => {
   this.setState({
     fetchTracks: e.target.value
    });
  }

  handleSubmit = (e) => {
   e.preventDefault();
   this.setState({
      // console.log(this.state)
  })

  }

   render(){
     return (
     <div className="App">
       <header className="VoxFindr">
        VoxFindr
        </header>
        <Form />
         </div>
 )
}
}

export default App;

//pass down as props in form components
//
