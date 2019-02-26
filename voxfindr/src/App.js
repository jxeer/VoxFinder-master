import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { fetchTracks } from './services/MusixMatch';
import { createCipher } from 'crypto';

class App extends Component {
  async componentDidMount() {
   const tracks = await fetchTracks()
   console.log(tracks)
    }
  render() {
    return (
    <div className="App">
      <header class="VoxFindr">
       VoxFindr
       </header>
        <div className="lyrics">
        <form>
        <label>
         <input type="text" placeholder="♫ Type some lyrics ♫"/>
         </label>
         <input type="submit" value="submit"/>
        </form>
        </div>
      </div>
    );
  }
}


export default App;
