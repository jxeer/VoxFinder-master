import React from 'react'

const Form = (props) => {

  return (
    <div className="lyrics">
      <label>
       <h3>
         <center><img src="https://static1.squarespace.com/static/59fc8e509f8dcebc07d262e1/t/5ad9198a2b6a282d8e0f555c/1524177299791/masterdisk-gold-record-transparent.png?format=300w" id="logo" /> </center>
         Welcome to VoxFindr</h3>
       <text>Got a song stuck in your head? 
              Don't know the song title or artist?
              No problem!
              Enter some lyrics below, and VoxFindr will conjure the rest.
        </text>
        <br />
        <br />
       <input type="text" name="lyrics" onChange={props.handleChange} value={props.searchtext} placeholder="♫ Type some lyrics ♫"/>
       </label>
       <input type="submit" onClick={props.handleSubmit} value="submit"/>
       <br /> 
       <br />
      </div>
    );
 }

  export default Form;
