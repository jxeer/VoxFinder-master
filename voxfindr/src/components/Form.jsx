import React from 'react'

const Form = (props) => {

  return (
    <div className="lyrics">
      <label>
       <input type="text" name="lyrics" placeholder="♫ Type some lyrics ♫"/>
       </label>
       <input type="submit" value="submit"/>
      </div>
    );
 }

  export default Form;
