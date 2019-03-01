import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { fetchTracks } from './services/MusixMatch';
import { createCipher } from 'crypto';
import Form from "./components/Form";
import LyricsResults from "./components/LyricsResults";
import About from "./components/About";
import { withRouter } from "react-router";

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
  this.props.history.push('/results')
  }

   render(){
     return (
     <div className="App">
       <header className="VoxFindr">
        VoxFindr
        </header>
        <Route path="/About" component={About} />
        <Route path="/results" render={()=> (
        <LyricsResults tracks= {this.state.tracks} />
          )} />   
        <Route exact path="/" render={()=> (
        <Form handleChange={this.handleChange} handleSubmit={this.handleSubmit} searchtext={this.state.searchtext} /> )} />
    </div>
 )
}
}
export default withRouter(App);
