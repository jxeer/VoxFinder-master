import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { fetchTracks } from './services/MusixMatch';
import { createCipher } from 'crypto';
import Form from "./components/Form";
import LyricsResults from "./components/LyricsResults";

import { Route, Link } from "react-router-dom";

class App extends Component {
  constructor(){
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
     searchtext: '',
     tracks:[]
   }
  }

handleChange = (e) => {
   this.setState({
     searchtext: e.target.value
    });
  }
  handleSubmit = async (e) => {
   e.preventDefault();
   const tracks = await fetchTracks(this.state.searchtext)
   console.log(this.state)
   this.setState({
   tracks: tracks.message.body.track_list
  })
  }

   render(){
     return (
     <div className="App">
       <header className="VoxFindr">
        VoxFindr
        </header>
        <Form handleChange={this.handleChange} handleSubmit={this.handleSubmit} searchtext={this.state.searchtext} />
        {this.state.tracks.map(tracks => (
          <div key={tracks.id}>
            {tracks.track.track_name}
            <br />
           <p>
           <Route exact path="/" render={App} />
            </p>
          </div>
        ))}
        {this.state.tracks.map}
         </div>
 )
}
}

export default App;
