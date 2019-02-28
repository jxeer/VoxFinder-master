import React from 'react'

const LyricsResults = (props) => {

  return (
    <div>
         {props.tracks.map(tracks => (
           <div key={tracks.id}>
             {tracks.track.track_name}
             <br />
           </div>
         ))}
         </div>

    );
}
export default LyricsResults
