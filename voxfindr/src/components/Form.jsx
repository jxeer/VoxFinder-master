import React from 'react'

const Form = (props) => {

  return (
    <div className="lyrics">
      <label>
       <input type="text" name="lyrics" onChange={props.handleChange} value={props.searchtext} placeholder="♫ Type some lyrics ♫"/>
       </label>
       <input type="submit" onClick={props.handleSubmit} value="submit"/>
      </div>
    );
 }

  export default Form;
