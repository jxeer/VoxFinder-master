import React from 'react'

const LyricsResults = (props) => {

  return (
    <div className="Results">
         <center><h3><center><img src="https://static1.squarespace.com/static/59fc8e509f8dcebc07d262e1/t/5ad9198a2b6a282d8e0f555c/1524177299791/masterdisk-gold-record-transparent.png?format=300w" id="logo" /> </center> Select Track </h3></center>
         {props.tracks.map(tracks => (
           <div key={tracks.id}>
             <a href={tracks.track.track_share_url} target="blank" id="tracklist">{tracks.track.track_name}</a>
             <br />
           </div>
         ))}
         </div>

    );
}
export default LyricsResults
